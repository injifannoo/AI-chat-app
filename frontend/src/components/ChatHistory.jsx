import React from 'react';
import ChatMessage from './ChatMessage';

const ChatHistory = ({ messages }) => (
    <div className="flex flex-col space-y-2 p-4">
        {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg.content} isUser={msg.role === 'user'} />
        ))}
    </div>
);

export default ChatHistory;
