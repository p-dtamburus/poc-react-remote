import React, { useEffect, useState } from 'react';
import { SendbirdProvider, App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';
// https://api-${YOUR_APP_ID}
const createUserIfNotExists = async (userId, nickname) => {
  let appId = 'F00975C4-E1E4-491A-A30C-DE3E1AD77064';
  const apiUrl = `https://api-${appId}.sendbird.com/v3/users`;

  // const apiUrl = `https://api-F00975C4-E1E4-491A-A30C-DE3E1AD77064.sendbird.com/v3/users`;

  const headers = {
    'Content-Type': 'application/json',
    'Api-Token': '6cc93cef7d356dd032333187f717a9ec895f2042', // Replace with your actual API token
  };

  // const userPayload = {
  //   user_id: userId,
  //   nickname: nickname,
  // };

  const userPayload = {
    "user_id": "1061",
    "nickname": "Dant",
    "profile_url": "https://sendbird.com/main/img/profiles/profile_05_512px.png",
    "issue_access_token": true,
    "session_token_expires_at": 1542945056625,
    "metadata": {
        "font_preference": "times new roman",
        "font_color": "black"
    }
}

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(userPayload),
  });

  if (response.ok) {
    return await response.json(); // User created successfully
  } else if (response.status === 409) {
    // User already exists, return the existing user
    const userResponse = await fetch(`${apiUrl}/${userId}`, {
      headers: headers,
    });
    return await userResponse.json();
  } else {
    console.log('Failed to create or fetch user');
  }
};

const SendBirdWrapper = () => {
  const [user, setUser] = useState(null);
  const [hasInitialized, setHasInitialized] = useState(false);


  const colorSet = {
    '--sendbird-light-primary-500': '#066858',
    '--sendbird-light-primary-400': '#027d69',
    '--sendbird-light-primary-300': '#259c72',
    '--sendbird-light-primary-200': '#69c085',
    '--sendbird-light-primary-100': '#a8e2ab',
  };


  useEffect(() => {

    if(hasInitialized) return;

    const initializeUser = async () => {
      const userId = 'dynamic_user_id'; // Replace with your dynamic user ID logic
      const nickname = 'dynamic_nickname'; // Replace with your dynamic nickname logic

      try {
        console.log('teste');
        const user = await createUserIfNotExists(userId, nickname);
        setUser(user);
        setHasInitialized(true);
        console.log('createUserIfNotExists sucesso')
        console.log(user)
        //GET https://api-{application_id}.sendbird.com/v3/users/{user_id}

        if (!user) {
          return <div>Loading...</div>;
        } 
        else {
          return (
            <>
              <div style={{ width: '100vw', height: '100vh' }}>
                <SendbirdProvider appId="F00975C4-E1E4-491A-A30C-DE3E1AD77064" userId={user.user_id} accessToken={user.access_token} colorSet={colorSet}>
                  <SendbirdApp />
                </SendbirdProvider>
              </div>
            </>
          );  
        }




        
      } catch (error) {
        console.error('Error initializing user:', error);
      }
    };

    initializeUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  // return (
  //   <>
  //     <div style={{ width: '100vw', height: '100vh' }}>
  //       <SendbirdProvider appId="F00975C4-E1E4-491A-A30C-DE3E1AD77064" userId={user.user_id} accessToken={user.access_token} colorSet={colorSet}>
  //         <SendbirdApp />
  //       </SendbirdProvider>
  //     </div>
  //   </>
  // );
};

export default SendBirdWrapper;