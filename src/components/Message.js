import React from 'react';
import '../styles/Message.css';

const Message = ({ children, isUser }) => {
  const messageClass = isUser ? 'user-message' : 'message-container';

  return <div className={messageClass}>{children}</div>;
};

export default Message;