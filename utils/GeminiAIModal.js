
// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// // process.env.NEXT_PUBLIC_GEMINI_API_KEY=AIzaSyCeur3ql4vgLbZr4JeHhbbunDVDxgJ1RSs
// // NEXT_PUBLIC_GOOGLE_API_KEY=AIzaSyCeur3ql4vgLbZr4JeHhbbunDVDxgJ1RSs

// const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
//   apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
// });

// // const generationConfig = {
// //   temperature: 1,
// //   topP: 0.95,
// //   topK: 64,
// //   maxOutputTokens: 8192,
// //   responseMimeType: "text/plain",
// // };
// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "application/json",
// };

// const safetySettings = [
//   {
//     category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//     threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//     threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//   },
// ];

// export const chatSession = model.startChat({
//   generationConfig,
//   safetySettings,
  
//   model: 'models/gemini-1.5-flash', 
//   // model: 'models/chat-bison-001', // or 'models/gemini-1.5-flash' if appropriate
//   apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
// });




const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = "AIzaSyDy3kl4Y09rzVpNZa35m8ZqNq-hP136CyI";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
];

export const chatSession = model.startChat({
  generationConfig,
  safetySettings,
});


// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// const safetySettings = [
//   {
//     category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//     threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//     threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//   },
// ];

// export const chatSession = model.startChat({
//   generationConfig,
//   safetySettings,
// });