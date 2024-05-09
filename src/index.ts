// src/index.ts
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();
console.log("OpenAI API Key:");
console.log(process.env.OPENAI_API_KEY);

const queryChatGPT = async (prompt: string): Promise<void> => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
      },
      {
        headers: { 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` }
      }
    );
    console.log(response.data.choices[0].message.content);
  } catch (error) {
    console.error("Error calling ChatGPT API:", error);
  }
};

queryChatGPT("Hello, ChatGPT!");
