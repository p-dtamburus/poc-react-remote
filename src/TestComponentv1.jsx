import React from 'react';
import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';

// Função para gerar o token de sessão com nickname e profile_url

// const generateSessionToken = async (userId, nickname, profileUrl) => {
//   const sendbirdApiToken = '90531da25be30e04eda270164101a31365a40766'; // Substitua pelo seu token API do Sendbird
//   const appId = '546ABAB3-6E78-4A6A-A13E-69AA3EE8BC72'; // Substitua pelo seu ID de aplicativo do Sendbird

//   try {
//     const response = await fetch(`https://api-${appId}.sendbird.com/v3/users/${userId}/token`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Api-Token': sendbirdApiToken,
//       },
//       body: JSON.stringify({
//         nickname, // Passando o nome do usuário
//         profile_url: profileUrl, // Passando a URL do avatar
//       }),
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       console.error('Response data:', data);
//       throw new Error(`Failed to generate session token: ${response.statusText}`);
//     }

//     console.log('Generated session token:', data.token);
//     return data.token; // O token de sessão gerado
//   } catch (error) {
//     console.error('Error generating session token:', error);
//     return null;
//   }
// };

const TestComponent = () => {
  const appId = '546ABAB3-6E78-4A6A-A13E-69AA3EE8BC72';
  // const userId = 'sendbird_desk_agent_id_ba1494bf-54b1-491f-b0d0-04efe1e22c41';
  
  const userId = 'sendbird_desk_agent_id_be1d06c9-f95f-453d-b3fe-c057ccf48a77';
  const nickname = 'Rogério da Silva'; // Nome do usuário (pode vir do Cognito)
  const profileUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'; // URL da foto do usuário (pode vir do Cognito)

  // const getSessionToken = async () => {
  //   const token = await generateSessionToken(userId, nickname, profileUrl);
  //   return token;
  // };

  // const token = getSessionToken();

  // if (!token) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <SendbirdApp
        appId={appId}
        userId={userId}
        accessToken={token} // Passando o token gerado com nickname e profile_url
      />
    </div>
  );
};

export default TestComponent;