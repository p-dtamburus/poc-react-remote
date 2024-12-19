import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';

import ProfitChart from './components/ProfitChart'; // Assumindo que você ainda queira importar isso
import './App.css';

// Função para criar o usuário caso não exista
const createUser = async (userId, nickname, profileUrl) => {
  const sendbirdApiToken = '90531da25be30e04eda270164101a31365a40766'; // Substitua pelo seu token API do Sendbird
  const appId = '546ABAB3-6E78-4A6A-A13E-69AA3EE8BC72'; // Substitua pelo seu ID de aplicativo do Sendbird

  try {
    const response = await fetch(`https://api-${appId}.sendbird.com/v3/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Token': sendbirdApiToken,
      },
      body: JSON.stringify({
        user_id: userId,
        nickname: nickname,
        profile_url: profileUrl,
      }),
    });

    if (!response.ok) {
      console.error('Response data:', await response.json());
      throw new Error(`Failed to create user: ${response.statusText}`);
    }

    console.log(`User ${userId} created successfully`);
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

// Função para gerar o token de sessão com nickname e profile_url
const generateSessionToken = async (userId, nickname, profileUrl) => {
  const sendbirdApiToken = '90531da25be30e04eda270164101a31365a40766'; // Substitua pelo seu token API do Sendbird
  const appId = '546ABAB3-6E78-4A6A-A13E-69AA3EE8BC72'; // Substitua pelo seu ID de aplicativo do Sendbird

  try {
    const response = await fetch(`https://api-${appId}.sendbird.com/v3/users/${userId}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Token': sendbirdApiToken,
      },
      body: JSON.stringify({
        nickname,
        profile_url: profileUrl,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 400 && data.code === 400401) {
        // Caso o usuário não exista, cria o usuário e tenta gerar o token novamente
        console.log(`User ${userId} does not exist, creating user...`);
        await createUser(userId, nickname, profileUrl);

        // Retentativa de gerar o token de sessão após a criação do usuário
        return await generateSessionToken(userId, nickname, profileUrl);
      } else {
        console.error('Response data:', data);
        throw new Error(`Failed to generate session token: ${response.statusText}`);
      }
    }

    console.log('Generated session token:', data.token);
    return data.token;
  } catch (error) {
    console.error('Error generating session token:', error);
    return null;
  }
};

const TestComponent = () => {
  const [accessToken, setAccessToken] = useState(null);

  const appId = '546ABAB3-6E78-4A6A-A13E-69AA3EE8BC72';

  console.log('porta');
  console.log(window.location.port);
  

  // Dados do usuário (você pode pegá-los do Cognito ou de qualquer outra fonte)
  let userId = 'sendbird_desk_agent_id_ba1494bf-54b1-491f-b0d0-04efe1e22c41';
  let nickname = 'Rogério da Silva'; // Nome do usuário
  const profileUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'; // URL da foto do usuário

  useEffect(() => {
    const getSessionToken = async () => {
      const token = await generateSessionToken(userId, nickname, profileUrl);
      setAccessToken(token);
    };

    getSessionToken();
  }, [userId, nickname, profileUrl]);

  if (!accessToken) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <SendbirdApp
        appId={appId} // Substitua com o seu ID de app do Sendbird
        userId={userId}
        accessToken={accessToken} // Passando o token gerado com nickname e profile_url
      />
    </div>
  );
};

export default TestComponent;

