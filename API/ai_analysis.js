import dotenv from 'dotenv';
import axios from 'axios';
import Groq from "groq-sdk";

dotenv.config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function getGroqChatCompletion(apartment) {
    const messages = [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": process.env.PROMPT
                },
                ...apartment.images.additional.map(image => ({
                    "type": "image_url",
                    "image_url": {
                        "url": image.url
                    }
                }))
            ]
        }
    ];

    return groq.chat.completions.create({
        "messages": messages,
        "model": "meta-llama/llama-4-scout-17b-16e-instruct",
        "temperature": 1,
        "max_completion_tokens": 1024,
        "top_p": 1,
        "stream": false,
        "stop": null
    });
}

export default async function analyzeApartment(apartment) {
    const chatCompletion = await getGroqChatCompletion(apartment);
    let textCompletion = chatCompletion.choices[0]?.message?.content;

    if (textCompletion) {
        try {
            const parsedData = JSON.parse(textCompletion);
            return parsedData;
        } catch (error) {
            console.error("Failed to parse JSON:", error);
            return { "error": "Failed to understand AI feedback. Sorry!"};
        }
    }
}
