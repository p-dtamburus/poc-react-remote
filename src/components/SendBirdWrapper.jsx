import React, { useState, useEffect } from 'react';
import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';

const SendBirdWrapper = () => {
  const colorSet = {
    '--sendbird-light-primary-500': '#066858',
    '--sendbird-light-primary-400': '#027d69',
    '--sendbird-light-primary-300': '#259c72',
    '--sendbird-light-primary-200': '#69c085',
    '--sendbird-light-primary-100': '#a8e2ab',
  };

  const appId = 'F00975C4-E1E4-491A-A30C-DE3E1AD77064';

  const createUserIfNotExists = async (userId, nickname) => {
    const apiUrl = `https://api-${appId}.sendbird.com/v3/users`;
    const headers = {
      'Content-Type': 'application/json',
      'Api-Token': '6cc93cef7d356dd032333187f717a9ec895f2042',
    };

    const userPayload = {
      user_id: userId,
      nickname: nickname,
      profile_url: 'https://sendbird.com/main/img/profiles/profile_05_512px.png',
      issue_access_token: true,
      metadata: {
        font_preference: 'times new roman',
        font_color: 'black',
      },
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(userPayload),
      });

      if (response.ok) {
        return await response.json();
      } else if (response.status === 409) {
       
      } else {
        console.log('Failed to create or fetch user, loggin in');

        const userResponse = await fetch(`${apiUrl}/${userId}`, { headers });
        return await userResponse.json();
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await createUserIfNotExists('sendbird_desk_agent_id_b38963f0-0239-4e67-a663-ea36a407704e', 'Dan');
      if (user) {
        setUserData(user);
      }
    };
    fetchUser();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <SendbirdApp
        appId={appId}
        userId={userData.user_id}
        accessToken={userData.access_token}
        colorSet={colorSet}
      />
    </div>
  );
};

export default SendBirdWrapper;
