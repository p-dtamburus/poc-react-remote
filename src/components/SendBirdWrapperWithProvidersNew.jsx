import "@sendbird/uikit-react/dist/index.css";
import "./SendBirdWrapperWithProvidersNew.css";
import React, { useState, useEffect } from "react";
import SendbirdProvider from "@sendbird/uikit-react/SendbirdProvider";
import GroupChannelList from "@sendbird/uikit-react/GroupChannelList";
import GroupChannel from "@sendbird/uikit-react/GroupChannel";
import GroupChannelListHeader from "@sendbird/uikit-react/GroupChannelList/components/GroupChannelListHeader";
import Header from "@sendbird/uikit-react/ui/Header";

const appId = "F00975C4-E1E4-491A-A30C-DE3E1AD77064";

const createUserIfNotExists = async (userId, nickname) => {
  const apiUrl = `https://api-${appId}.sendbird.com/v3/users`;
  const headers = {
    "Content-Type": "application/json",
    "Api-Token": "6cc93cef7d356dd032333187f717a9ec895f2042",
  };

  const userPayload = {
    user_id: userId,
    nickname: nickname,
    profile_url: "https://sendbird.com/main/img/profiles/profile_05_512px.png",
    issue_access_token: true,
    metadata: {
      font_preference: "times new roman",
      font_color: "black",
    },
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(userPayload),
    });

    if (response.ok) {
      return await response.json();
    } else if (response.status !== 409) {
      const userResponse = await fetch(`${apiUrl}/${userId}`, { headers });
      return await userResponse.json();
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const ChatApp = () => {
  const [userData, setUserData] = useState(null);
  const [selectedChannelUrl, setSelectedChannelUrl] = useState(null);

  useEffect(() => {
    const usrId = "sendbird_desk_agent_id_b38963f0-0239-4e67-a663-ea36a407704e";
    const usrNickName = "Danilo Andrade";

    const fetchUser = async () => {
      const user = await createUserIfNotExists(usrId, usrNickName);
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
    <SendbirdProvider appId={appId} userId={userData.user_id} accessToken={userData.access_token}>
      <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
        <div style={{ width: "30%", borderRight: "1px solid #ccc" }}>
          <GroupChannelList
            onChannelSelect={(channel) => {
              if (channel) setSelectedChannelUrl(channel.url);
            }}
            renderHeader={() => (
              <GroupChannelListHeader
                renderMiddle={() => <Header.Title title="Your Channels" />}
              />
            )}
          />
        </div>
        <div style={{ flex: 1 }}>
          {selectedChannelUrl ? (
            <GroupChannel channelUrl={selectedChannelUrl} />
          ) : (
            <div>Select a channel</div>
          )}
        </div>
      </div>
    </SendbirdProvider>
  );
};

export default ChatApp;
