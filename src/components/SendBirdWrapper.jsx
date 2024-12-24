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

  
  const appId = '546ABAB3-6E78-4A6A-A13E-69AA3EE8BC72';

  const userId = 'sendbird_desk_agent_id_ba1494bf-54b1-491f-b0d0-04efe1e22c41';
  // const userId = 'sendbird_desk_agent_id_be1d06c9-f95f-453d-b3fe-c057ccf48a77';

  const accessToken = '2da6130d3d4094014ff0ac83b030d28a7120d791';
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