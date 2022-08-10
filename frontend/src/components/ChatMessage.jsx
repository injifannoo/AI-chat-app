import React from 'react';

const ChatMessage = ({ message, isUser }) => (
    <div className={`p-4 ${isUser ? 'text-right' : 'text-left'}`}>
        <div className={`inline-block p-2 rounded-md ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            {message}
        </div>
    </div>
);

export default ChatMessage;
