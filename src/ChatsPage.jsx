import { PrettyChatWindow } from "react-chat-engine-pretty";
// import { ChatEngine } from "react-chat-engine";
// import {
//   ChatEngine,
//   MultiChatSocket,
//   useMultiChatLogic,
// } from "react-chat-engine-advanced";

const ChatsPage = ({ user }) => {
  return (
    <div className="background">
      {/* <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} /> */}
      {/* <ChatEngine
        publicKey={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        userName={user.username}
        userSecret={user.secret}
        style={{ height: "100vh" }}
      /> */}
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={user.username}
        secret={user.secret}
        style={{ height: "100vh" }}
      />
    </div>
  );
};
export default ChatsPage;
