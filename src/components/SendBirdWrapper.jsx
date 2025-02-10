import React from 'react';
import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';


const SendBirdWrapper = () => {

  const colorSet = {
    '--sendbird-light-primary-500': '#066858',
    '--sendbird-light-primary-400': '#027d69',
    '--sendbird-light-primary-300': '#259c72',
    '--sendbird-light-primary-200': '#69c085',
    '--sendbird-light-primary-100': '#a8e2ab',
}

  
  const appId = 'F00975C4-E1E4-491A-A30C-DE3E1AD77064';

  const userId = 'sendbird_desk_agent_id_b38963f0-0239-4e67-a663-ea36a407704e';
  // const userId = 'sendbird_desk_agent_id_be1d06c9-f95f-453d-b3fe-c057ccf48a77';

  const accessToken = '9fa7a81c91ed9bdc5e4b7186eb5a9f839a1101f2';
  // const accessToken = 'd2d998a3c1c54aba1e1d8b4dc41bd87b943a0b66';

  return (
    <>
    <div style={{ width: '100vw', height: '100vh' }}>
      <SendbirdApp
        appId={appId}
        userId={userId}
        accessToken={accessToken} 
        colorSet={colorSet}
      />
    </div>
    </>
  );
};

export default SendBirdWrapper;