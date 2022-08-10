import React, { useState } from 'react';
import ChatHistory from '../components/ChatHistory';
import ChatInput from '../components/ChatInput';
import axios from 'axios';

const ChatPage = () => {
    const [messages, setMessages] = useState([]);

    const sendMessage = async (message) => {
        const userMessage = { role: 'user', content: message };
        setMessages([...messages, userMessage]);

        try {
            const { data } = await axios.post('http://localhost:5000/api/chat', { message });
            const botMessage = { role: 'assistant', content: data.botResponse };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto">
            <ChatHistory messages={messages} />
            <ChatInput sendMessage={sendMessage} />
        </div>
    );
};

export default ChatPage;
