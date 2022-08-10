import React, { useState } from 'react';

const ChatInput = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        sendMessage(message);
        setMessage('');
    };

    return (
        <div className="flex items-center space-x-2 p-4">
            <input
                className="flex-1 border p-2 rounded-md"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSend}>
                Send
            </button>
        </div>
    );
};

export default ChatInput;
