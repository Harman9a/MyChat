import React from "react";
import ChatNavBar from "../components/userChat/ChatNavBar";
import Chatting from "../components/userChat/Chatting";
import InputField from "../components/userChat/InputField";

const Chat: React.FC = () => {
  return (
    <div>
      <ChatNavBar />
      <Chatting />
      <InputField />
    </div>
  );
};

export default Chat;
