const axios = require('axios');
const Chat = require('../models/chatModel');

const sendMessage = async (req, res) => {
    const { message } = req.body;

    try {
        const openAIResponse = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4',
                messages: [{ role: 'user', content: message }],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        );

        const botResponse = openAIResponse.data.choices[0].message.content;

        const chat = await Chat.create({ userMessage: message, botResponse });

        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { sendMessage };
