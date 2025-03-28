// import React from 'react'
// import { Button } from "@/components/ui/button"
// import Head from 'next/head';
// import Contect from './_components/Contect';
// import Link from 'next/link';
// import { FaGithub } from "react-icons/fa";

// const page = () => {
//   return (
//     // <div className='p-10 flex flex-col items-center justify-center' >
//     //   <h1 className='red font-bold text-[22px]'>Welcome to AI Mock Interview</h1>
//     // <a  ><h1><Button>Start</Button></h1></a>
//     // </div>
//     <div>
//       <Head>
//         <title>Eloqify</title>
//         <meta name="description" content="Ace your next interview with AI-powered mock interviews" />
//         {/* <link rel="icon" href="/favicon.ico" /> */}
//         {/* <title>Your New Website Title</title>  */}
//         {/* <link rel="icon" href="/favicon.ico" /> */}
//       </Head>

//       <main className="min-h-screen">
//         {/* Header Section */}
//         <header className="w-full py-4 bg-gray-100 shadow-lg">
//   <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
    
//     {/* Logo with Text */}
//     <div className="flex items-center">
//       {/* Logo Image */}
//       <img src="/elo.png" alt="Eloqify Logo" className="w-32 h-auto object-cover" /> {/* Increased logo width */}
//       {/* Optional text next to the logo */}
//       {/* <h1 className="text-3xl font-bold text-primary ml-2">Eloqify</h1> */}
//     </div>

//     {/* Navigation */}
//     <nav className="mt-4 md:mt-0 flex items-center">
//       <div className="flex space-x-4"> {/* Adjusted spacing between nav items */}
//         <a href="#features" className="text-lg text-gray-800 hover:text-blue-600 transition duration-300 mx-2">Features</a>
//         <a href="#testimonials" className="text-lg text-gray-800 hover:text-blue-600 transition duration-300 mx-2">Testimonials</a>
//         <a href="#contact" className="text-lg text-gray-800 hover:text-blue-600 transition duration-300 mx-2">Contact</a>
//       </div>

//       {/* Optional Social Media Icons */}
//       <div className="ml-6">
//         {/* Uncomment and replace with actual links and icons if needed */}
//         {/*
//           <FaGithub className="w-8 h-8 text-gray-800 hover:text-blue-600 transition duration-300" />
//         </a> */}
//       </div>
//     </nav>
//   </div>
// </header>


//         {/* Hero Section */}
//         <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-gray-900 to-gray-400  px-6 md:px-0">
//           <h2 className="text-4xl md:text-5xl font-bold text-white">Ace Your Next Interview</h2>
//           <p className="mt-4 text-lg md:text-xl text-white ">Practice with AI-powered mock interviews and get personalized feedback</p>
//           <div className="mt-6 flex flex-col md:flex-row">
//             <a
//               href="/dashboard"
//               className="px-6 py-3 mb-4 md:mb-0 md:mr-4 text-lg font-semibold bg-white !text-primary-600 rounded-lg shadow-lg hover:bg-gray-100"
//             >
//               Get Started
//             </a>
//             <a
//               href="#features"
//               className="px-6 py-3 text-lg font-semibold border border-white rounded-lg hover:bg-white hover:text-black-600"
//             >
//               Learn More
//             </a>
//           </div>
          
//         </section>
//         {/* <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-[#72A0C1] to-[#E0F7FA] px-6 md:px-0"> */}

//         {/* <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-[#72A0C1] to-[#E0F7FA] px-6 md:px-0">
//   <h2 className="text-4xl md:text-5xl font-bold text-[#003B5C]">Ace Your Next Interview</h2>
//   <p className="mt-4 text-lg md:text-xl text-[#004D6B]">
//     Practice with AI-powered mock interviews and get personalized feedback
//   </p>
//   <div className="mt-6 flex flex-col md:flex-row">
//     <a
//       href="/dashboard"
//       className="px-6 py-3 mb-4 md:mb-0 md:mr-4 text-lg font-semibold bg-white !text-primary-600 rounded-lg shadow-lg hover:bg-gray-100"
//     >
//       Get Started
//     </a>
//     <a
//       href="#features"
//       className="px-6 py-3 text-lg font-semibold border border-white rounded-lg hover:bg-white hover:text-black-600"
//     >
//       Learn More
//     </a>
//   </div>
// </section> */}



//         {/* Features Section */}
//         <section id="features" className="py-16 bg-white px-6 md:px-0">
//           <div className="container mx-auto text-center">
//             <h2 className="text-4xl font-bold text-gray-800">Features</h2>
//             <p className="mt-4 text-lg text-gray-800">
//               Our AI Mock Interview platform offers a range of powerful features:
//             </p>
//             <div className="flex flex-wrap justify-center mt-8">
//               <div className="w-full md:w-1/3 px-4 py-8">
//                 <div className="bg-blue-100 rounded-lg p-6 shadow-md">
//                   <h3 className="text-2xl font-semibold text-black-600">Resume Based Mock Interview</h3>
//                   <p className="mt-2 text-gray-600">Experience realistic interview scenarios with our advanced AI.</p>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/3 px-4 py-8">
//                 <div className="bg-blue-100 rounded-lg p-6 shadow-md">
//                   <h3 className="text-2xl font-semibold text-black-600">Instant Feedback</h3>
//                   <p className="mt-2 text-gray-600">Get instant, personalized feedback to improve your performance.</p>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/3 px-4 py-8">
//                 <div className="bg-blue-100 rounded-lg p-6 shadow-md">
//                   <h3 className="text-2xl font-semibold text-black-600">Comprehensive Reports</h3>
//                   <p className="mt-2 text-gray-600">Receive detailed reports highlighting your strengths and weaknesses.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section id="testimonials" className="py-16 bg-gray-50 px-6 md:px-0">
//           <div className="container mx-auto text-center">
//             <h2 className="text-4xl font-bold text-gray-800">What Our Users Say</h2>
//             <div className="flex flex-wrap justify-center mt-8">
//               <div className="w-full md:w-1/2 px-4 py-8">
//                 <div className="bg-white rounded-lg p-6 shadow-md">
//                   <p className="text-gray-600">
//                     "The AI mock interviews were incredibly helpful. I felt much more confident going into my real interview."
//                   </p>
//                   <h4 className="mt-4 text-lg font-semibold text-blue-600">- Alex Johnson</h4>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2 px-4 py-8">
//                 <div className="bg-white rounded-lg p-6 shadow-md">
//                   <p className="text-gray-600">
//                     "The feedback was spot on and helped me improve my answers. Highly recommend this service!"
//                   </p>
//                   <h4 className="mt-4 text-lg font-semibold text-blue-600">- Sarah Williams</h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-16 bg-white px-6 md:px-0">
//           <Contect />
//         </section>
//       </main>

//       <footer className="py-8 bg-black text-white text-center">
//         <p>© 2024 Eloqify : AI Mock Interview. All rights reserved.</p>
//       </footer>
//     </div>
//   )
// }

// export default page
// 

// "use client";
// import React, { useState } from "react";
// import Head from "next/head";
// import Contect from "./_components/Contect";
// import Link from "next/link";

// const page = () => {
//   const [faqOpen, setFaqOpen] = useState(null);

//   const faqs = [
//     {
//       question: "How does the AI mock interview work?",
//       answer:
//         "Our AI analyzes your responses in real-time, providing feedback on communication skills, tone, and accuracy based on job descriptions.",
//     },
//     {
//       question: "Is the interview tailored to my resume?",
//       answer:
//         "Yes! We extract key skills from your resume to generate personalized interview questions.",
//     },
//     {
//       question: "How soon do I receive feedback?",
//       answer:
//         "Feedback is instant. As soon as you complete your mock interview, our AI provides an analysis of your performance.",
//     },
//     {
//       question: "Can I retake interviews to improve?",
//       answer:
//         "Absolutely! You can practice multiple times to refine your answers and boost confidence.",
//     },
//   ];

//   return (
//     <div>
//       <Head>
//         <title>Eloqify</title>
//         <meta
//           name="description"
//           content="Ace your next interview with AI-powered mock interviews"
//         />
//       </Head>

//       <main className="min-h-screen">
//         {/* Header Section */}
//         <header className="fixed top-0 left-0 w-full z-50 py-4 bg-white shadow-md">
//           <div className="container mx-auto flex justify-between items-center px-6">
//             {/* Logo */}
//             <div className="flex items-center">
//               <span className="text-2xl font-bold text-[#1a1a1a]">Eloqify</span>
//             </div>

//             {/* Navigation */}
//             <nav className="flex items-center space-x-6">
//               <a
//                 href="#how-it-works"
//                 className="text-md font-semibold text-[#1a1a1a] hover:text-gray-500 transition-all"
//               >
//                 How It Works
//               </a>
//               <a
//                 href="#features"
//                 className="text-md font-semibold text-[#1a1a1a] hover:text-gray-500 transition-all"
//               >
//                 Features
//               </a>
//               <a
//                 href="#testimonials"
//                 className="text-md font-semibold text-[#1a1a1a] hover:text-gray-500 transition-all"
//               >
//                 Testimonials
//               </a>
//               <a
//                 href="#faq"
//                 className="text-md font-semibold text-[#1a1a1a] hover:text-gray-500 transition-all"
//               >
//                 FAQ
//               </a>

//               {/* Login and Sign Up Buttons */}
//               <a
//                 href="/login"
//                 className="text-md font-semibold text-[#1a1a1a] hover:text-gray-500 transition-all"
//               >
//                 Login
//               </a>
//               <a
//                 href="/signup"
//                 className="px-5 py-2 text-md font-semibold bg-[#1a1a1a] text-white rounded-lg shadow-md hover:bg-gray-800 transition-all"
//               >
//                 Sign Up
//               </a>
//             </nav>
//           </div>
//         </header>

//         {/* Hero Section */}
//         <section className="relative flex flex-col md:flex-row items-center justify-between text-center md:text-left py-24 px-6 md:px-12 bg-[#f5f5f5]">
//           {/* Left Content - Text & CTA */}
//           <div className="md:w-1/2">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
//               Unlock Your Dream Job with AI
//             </h2>
//             <p className="mt-4 text-lg md:text-xl text-gray-600">
//               Master your interviews with AI-driven mock sessions and receive
//               instant, personalized feedback!
//             </p>
//             <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//               <a
//                 href="/dashboard"
//                 className="px-6 py-3 text-lg font-semibold bg-[#1a1a1a] text-white rounded-lg shadow-md hover:bg-gray-800 transition-all"
//               >
//                 Start for Free
//               </a>
//               <a
//                 href="#features"
//                 className="px-6 py-3 text-lg font-semibold bg-transparent border-2 border-[#1a1a1a] text-[#1a1a1a] rounded-lg shadow-md hover:bg-[#1a1a1a] hover:text-white transition-all"
//               >
//                 Learn More
//               </a>
//             </div>
//           </div>

//           {/* Right Content - Image */}
//           <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
//             <img
//               src="/interview.webp"
//               alt="AI Interview Illustration"
//               className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg"
//             />
//           </div>
//         </section>

//         {/* How It Works Section */}
//         <section
//           id="how-it-works"
//           className="py-16 bg-white px-6 md:px-12"
//         >
//           <div className="container mx-auto text-center">
//             <h2 className="text-4xl font-bold text-[#1a1a1a]">
//               Be 10x More Successful in Interviews
//             </h2>
//             <p className="mt-4 text-lg text-gray-600">
//               Get hired quicker by mastering your interview skills with AI-driven
//               feedback and tailored practice sessions.
//             </p>

//             <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//               {/* Step 1 */}
//               <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//                 <h3 className="text-2xl font-semibold text-[#1a1a1a]">Step 1</h3>
//                 <p className="mt-2 text-gray-600">
//                   Upload your resume and let our AI analyze your skills and
//                   experience.
//                 </p>
//               </div>

//               {/* Step 2 */}
//               <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//                 <h3 className="text-2xl font-semibold text-[#1a1a1a]">Step 2</h3>
//                 <p className="mt-2 text-gray-600">
//                   Practice with tailored mock interviews and receive real-time
//                   feedback.
//                 </p>
//               </div>

//               {/* Step 3 */}
//               <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//                 <h3 className="text-2xl font-semibold text-[#1a1a1a]">Step 3</h3>
//                 <p className="mt-2 text-gray-600">
//                   Improve with detailed performance reports and actionable
//                   insights.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-6">
//               <a
//                 href="/dashboard"
//                 className="px-6 py-3 text-lg font-semibold bg-[#1a1a1a] text-white rounded-lg shadow-md hover:bg-gray-800 transition-all"
//               >
//                 Get Started Now
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section
//           id="features"
//           className="py-16 bg-[#f5f5f5] px-6 md:px-12"
//         >
//           <div className="container mx-auto text-center">
//             <h2 className="text-4xl font-bold text-[#1a1a1a]">
//               Why Choose Eloqify?
//             </h2>
//             <p className="mt-4 text-lg text-gray-600">
//               Unlock the full potential of AI-driven interview preparation with
//               our cutting-edge features.
//             </p>

//             <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//               {/* Feature 1 */}
//               <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//                 <h3 className="text-2xl font-semibold text-[#1a1a1a]">
//                   🎯 Resume-Based Mock Interviews
//                 </h3>
//                 <p className="mt-2 text-gray-600">
//                   Our AI analyzes your resume and tailors questions based on your
//                   experience and skills.
//                 </p>
//               </div>

//               {/* Feature 2 */}
//               <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//                 <h3 className="text-2xl font-semibold text-[#1a1a1a]">
//                   ⚡ Instant AI Feedback
//                 </h3>
//                 <p className="mt-2 text-gray-600">
//                   Get real-time insights on your responses, including tone,
//                   confidence, and clarity.
//                 </p>
//               </div>

//               {/* Feature 3 */}
//               <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//                 <h3 className="text-2xl font-semibold text-[#1a1a1a]">
//                   📊 Detailed Performance Reports
//                 </h3>
//                 <p className="mt-2 text-gray-600">
//                   Receive in-depth analysis with strengths, improvement areas,
//                   and score breakdowns.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section
//           id="testimonials"
//           className="py-16 bg-white px-6 md:px-12"
//         >
//           <div className="container mx-auto text-center">
//             <h2 className="text-4xl font-bold text-[#1a1a1a]">
//               What Our Users Say
//             </h2>
//             <p className="mt-4 text-lg text-gray-600">
//               See how Eloqify has helped professionals excel in interviews.
//             </p>

//             <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//               {[
//                 {
//                   name: "John Doe",
//                   role: "Software Engineer at Google",
//                   feedback:
//                     "Eloqify transformed my interview preparation! The AI-driven feedback helped me improve my answers and boost confidence.",
//                 },
//                 {
//                   name: "Sarah Smith",
//                   role: "Data Analyst at Amazon",
//                   feedback:
//                     "The real-time feedback on tone and clarity was a game-changer. I landed my dream job thanks to Eloqify!",
//                 },
//                 {
//                   name: "Mark Johnson",
//                   role: "Product Manager at Microsoft",
//                   feedback:
//                     "I loved the resume-based mock interviews! The tailored questions made me feel super prepared.",
//                 },
//               ].map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className="bg-[#f5f5f5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
//                 >
//                   <p className="text-gray-600 italic">
//                     "{testimonial.feedback}"
//                   </p>
//                   <h3 className="mt-4 text-lg font-semibold text-[#1a1a1a]">
//                     - {testimonial.name}
//                   </h3>
//                   <p className="text-gray-500 text-sm">{testimonial.role}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* FAQ Section */}
//         <section
//           id="faq"
//           className="py-16 bg-[#f5f5f5] px-6 md:px-12"
//         >
//           <div className="container mx-auto text-center">
//             <h2 className="text-4xl font-bold text-[#1a1a1a]">
//               Frequently Asked Questions
//             </h2>
//             <div className="mt-8 max-w-3xl mx-auto">
//               {faqs.map((faq, index) => (
//                 <div key={index} className="mb-6">
//                   <button
//                     onClick={() => setFaqOpen(faqOpen === index ? null : index)}
//                     className="w-full text-left text-lg font-semibold bg-white p-4 rounded-lg shadow-md hover:bg-[#1a1a1a] hover:text-white transition duration-300"
//                   >
//                     {faq.question}
//                   </button>
//                   {faqOpen === index && (
//                     <p className="mt-2 text-gray-600 p-4 bg-white shadow-md rounded-lg">
//                       {faq.answer}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-16 bg-white px-6 md:px-12">
//           <Contect />
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="py-8 bg-[#1a1a1a] text-white text-center">
//         <div className="container mx-auto">
//           <p>© 2024 Eloqify. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default page;













// "use client";
// import React, { useState } from "react";
// import Head from "next/head";
// import Contect from "./_components/Contect";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const page = () => {
//   const [faqOpen, setFaqOpen] = useState(null);

//   const faqs = [
//     {
//       question: "How does the AI mock interview work?",
//       answer:
//         "Our AI analyzes your responses in real-time, providing feedback on communication skills, tone, and accuracy based on job descriptions.",
//     },
//     {
//       question: "Is the interview tailored to my resume?",
//       answer:
//         "Yes! We extract key skills from your resume to generate personalized interview questions.",
//     },
//     {
//       question: "How soon do I receive feedback?",
//       answer:
//         "Feedback is instant. As soon as you complete your mock interview, our AI provides an analysis of your performance.",
//     },
//     {
//       question: "Can I retake interviews to improve?",
//       answer:
//         "Absolutely! You can practice multiple times to refine your answers and boost confidence.",
//     },
//   ];

//   return (
//     <div>
//       <Head>
//         <title>Eloqify</title>
//         <meta
//           name="description"
//           content="Ace your next interview with AI-powered mock interviews"
//         />
//       </Head>

//       <main className="min-h-screen">
//         {/* Header Section */}
//         <header className="fixed top-0 left-0 w-full z-50 py-4 bg-[#1a1a1a] shadow-md">
//           <div className="container mx-auto flex justify-between items-center px-6">
//             {/* Logo */}
//             <div className="flex items-center">
//               <span className="text-2xl font-bold text-white">Eloqify</span>
//             </div>

//             {/* Navigation */}
//             <nav className="flex items-center space-x-6">
//               <a
//                 href="#how-it-works"
//                 className="text-md font-semibold text-white hover:text-gray-300 transition-all"
//               >
//                 How It Works
//               </a>
//               <a
//                 href="#features"
//                 className="text-md font-semibold text-white hover:text-gray-300 transition-all"
//               >
//                 Features
//               </a>
//               <a
//                 href="#testimonials"
//                 className="text-md font-semibold text-white hover:text-gray-300 transition-all"
//               >
//                 Testimonials
//               </a>
//               <a
//                 href="#faq"
//                 className="text-md font-semibold text-white hover:text-gray-300 transition-all"
//               >
//                 FAQ
//               </a>

//               {/* Login and Sign Up Buttons */}
//               <a
//                 href="/login"
//                 className="text-md font-semibold text-white hover:text-gray-300 transition-all"
//               >
//                 Login
//               </a>
//               <a
//                 href="/signup"
//                 className="px-5 py-2 text-md font-semibold bg-gradient-to-r from-[#6C63FF] to-[#4A90E2] text-white rounded-lg shadow-md hover:opacity-90 transition-all"
//               >
//                 Sign Up
//               </a>
//             </nav>
//           </div>
//         </header>

//         {/* Hero Section */}
//         <section className="relative flex flex-col md:flex-row items-center justify-between text-center md:text-left py-24 px-6 md:px-12 bg-gradient-to-r from-[#2c3e50] to-[#25413a]">
//           {/* Left Content - Text & CTA */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="md:w-1/2"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-white">
//               Unlock Your Dream Job with AI
//             </h2>
//             <p className="mt-4 text-lg md:text-xl text-gray-300">
//               Master your interviews with AI-driven mock sessions and receive
//               instant, personalized feedback!
//             </p>
//             <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//               <a
//                 href="/dashboard"
//                 className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-[#6C63FF] to-[#4A90E2] text-white rounded-lg shadow-md hover:opacity-90 transition-all"
//               >
//                 Start for Free
//               </a>
//               <a
//                 href="#features"
//                 className="px-6 py-3 text-lg font-semibold bg-transparent border-2 border-white text-white rounded-lg shadow-md hover:bg-white hover:text-[#1a1a1a] transition-all"
//               >
//                 Learn More
//               </a>
//             </div>
//           </motion.div>

//           {/* Right Content - Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="md:w-1/2 flex justify-center mt-8 md:mt-0"
//           >
//             <img
//               src="/interview.webp"
//               alt="AI Interview Illustration"
//               className="w-full max-w-2xl"
//             />
//           </motion.div>
//         </section>

//         {/* How It Works Section */}
//         <section
//           id="how-it-works"
//           className="py-16 bg-white px-6 md:px-12"
//         >
//           <div className="container mx-auto text-center">
//             <h2 className="text-4xl font-bold text-[#1a1a1a]">
//               Be 10x More Successful in Interviews
//             </h2>
//             <p className="mt-4 text-lg text-gray-600">
//               Get hired quicker by mastering your interview skills with AI-driven
//               feedback and tailored practice sessions.
//             </p>

//             <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//               {/* Step 1 */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-[#f5f5f5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
//               >
//                 <h3 className="text-2xl font-semibold text-[#1a1a1a]">Step 1</h3>
//                 <p className="mt-2 text-gray-600">
//                   Upload your resume and let our AI analyze your skills and
//                   experience.
//                 </p>
//               </motion.div>

//               {/* Step 2 */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-[#f5f5f5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
//               >
//                 <h3 className="text-2xl font-semibold text-[#1a1a1a]">Step 2</h3>
//                 <p className="mt-2 text-gray-600">
//                   Practice with tailored mock interviews and receive real-time
//                   feedback.
//                 </p>
//               </motion.div>

//               {/* Step 3 */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-[#f5f5f5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
//               >
//                 <h3 className="text-2xl font-semibold text-[#1a1a1a]">Step 3</h3>
//                 <p className="mt-2 text-gray-600">
//                   Improve with detailed performance reports and actionable
//                   insights.
//                 </p>
//               </motion.div>
//             </div>

//             <div className="mt-6">
//               <a
//                 href="/dashboard"
//                 className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-[#6C63FF] to-[#4A90E2] text-white rounded-lg shadow-md hover:opacity-90 transition-all"
//               >
//                 Get Started Now
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section
//           id="features"
//           className="py-16 bg-[#f5f5f5] px-6 md:px-12"
//         >
//           <div className="container mx-auto text-center">
//             <h2 className="text-4xl font-bold text-[#1a1a1a]">
//               Why Choose Eloqify?
//             </h2>
//             <p className="mt-4 text-lg text-gray-600">
//               Unlock the full potential of AI-driven interview preparation with
//               our cutting-edge features.
//             </p>

//             <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//               {/* Feature 1 */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] to-[#4A90E2] opacity-0 hover:opacity-100 transition-all duration-300"></div>
//                 <h3 className="text-2xl font-semibold text-[#1a1a1a] relative z-10">
//                   🎯 Resume-Based Mock Interviews
//                 </h3>
//                 <p className="mt-2 text-gray-600 relative z-10">
//                   Our AI analyzes your resume and tailors questions based on your
//                   experience and skills.
//                 </p>
//               </motion.div>

//               {/* Feature 2 */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] to-[#4A90E2] opacity-0 hover:opacity-100 transition-all duration-300"></div>
//                 <h3 className="text-2xl font-semibold text-[#1a1a1a] relative z-10">
//                   ⚡ Instant AI Feedback
//                 </h3>
//                 <p className="mt-2 text-gray-600 relative z-10">
//                   Get real-time insights on your responses, including tone,
//                   confidence, and clarity.
//                 </p>
//               </motion.div>

//               {/* Feature 3 */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] to-[#4A90E2] opacity-0 hover:opacity-100 transition-all duration-300"></div>
//                 <h3 className="text-2xl font-semibold text-[#1a1a1a] relative z-10">
//                   📊 Detailed Performance Reports
//                 </h3>
//                 <p className="mt-2 text-gray-600 relative z-10">
//                   Receive in-depth analysis with strengths, improvement areas,
//                   and score breakdowns.
//                 </p>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section
//           id="testimonials"
//           className="py-16 bg-white px-6 md:px-12"
//         >
//           <div className="container mx-auto text-center">
//             <h2 className="text-4xl font-bold text-[#1a1a1a]">
//               What Our Users Say
//             </h2>
//             <p className="mt-4 text-lg text-gray-600">
//               See how Eloqify has helped professionals excel in interviews.
//             </p>

//             <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//               {[
//                 {
//                   name: "John Doe",
//                   role: "Software Engineer at Google",
//                   feedback:
//                     "Eloqify transformed my interview preparation! The AI-driven feedback helped me improve my answers and boost confidence.",
//                 },
//                 {
//                   name: "Sarah Smith",
//                   role: "Data Analyst at Amazon",
//                   feedback:
//                     "The real-time feedback on tone and clarity was a game-changer. I landed my dream job thanks to Eloqify!",
//                 },
//                 {
//                   name: "Mark Johnson",
//                   role: "Product Manager at Microsoft",
//                   feedback:
//                     "I loved the resume-based mock interviews! The tailored questions made me feel super prepared.",
//                 },
//               ].map((testimonial, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-[#f5f5f5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
//                 >
//                   <p className="text-gray-600 italic">
//                     "{testimonial.feedback}"
//                   </p>
//                   <h3 className="mt-4 text-lg font-semibold text-[#1a1a1a]">
//                     - {testimonial.name}
//                   </h3>
//                   <p className="text-gray-500 text-sm">{testimonial.role}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* FAQ Section */}
//         <section
//           id="faq"
//           className="py-16 bg-[#f5f5f5] px-6 md:px-12"
//         >
//           <div className="container mx-auto text-center">
//             <h2 className="text-4xl font-bold text-[#1a1a1a]">
//               Frequently Asked Questions
//             </h2>
//             <div className="mt-8 max-w-3xl mx-auto">
//               {faqs.map((faq, index) => (
//                 <div key={index} className="mb-6">
//                   <button
//                     onClick={() => setFaqOpen(faqOpen === index ? null : index)}
//                     className="w-full text-left text-lg font-semibold bg-white p-4 rounded-lg shadow-md hover:bg-[#1a1a1a] hover:text-white transition duration-300"
//                   >
//                     {faq.question}
//                   </button>
//                   {faqOpen === index && (
//                     <p className="mt-2 text-gray-600 p-4 bg-white shadow-md rounded-lg">
//                       {faq.answer}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-16 bg-white px-6 md:px-12">
//           <Contect />
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="py-8 bg-[#1a1a1a] text-white text-center">
//         <div className="container mx-auto">
//           <p>© 2024 Eloqify. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default page;









"use client";
import React, { useState } from "react";
import Head from "next/head";
import Contect from "./_components/Contect";
import Link from "next/link";
import { motion } from "framer-motion";

const page = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const faqs = [
    {
      question: "How does the AI mock interview work?",
      answer:
        "Our AI analyzes your responses in real-time, providing feedback on communication skills, tone, and accuracy based on job descriptions.",
    },
    {
      question: "Is the interview tailored to my profile?",
      answer:
        "Yes! We extract key skills from your profile to generate personalized interview questions.",
    },
    {
      question: "How soon do I receive feedback?",
      answer:
        "Feedback is instant. As soon as you complete your mock interview, our AI provides an analysis of your performance.",
    },
    {
      question: "Can I retake interviews to improve?",
      answer:
        "Absolutely! You can practice multiple times to refine your answers and boost confidence.",
    },
  ];

  return (
    <div>
      <Head>
        <title>Eloqify</title>
        <meta
          name="description"
          content="Ace your next interview with AI-powered mock interviews"
        />
      </Head>

      <main className="min-h-screen">
        {/* Header Section */}
        <header className="fixed top-0 left-0 w-full z-50 py-4 bg-[#1a1a1a] shadow-md">
          <div className="container mx-auto flex justify-between items-center px-6">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-3xl font-bold text-white">
                <motion.div
                            initial={{ opacity: 2, x: -20 }}
                            animate={{ opacity: 5, x: 0 }}
                            transition={{ delay: 3.2 }}
                            className="flex flex-col"
                          >
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                              Eloqify
                            </span>
                            <span className="text-xs text-gray-400">AI Interview Coach</span>
                          </motion.div>
              </span>
            </div>

            

            {/* Navigation */}
            <nav className="flex items-center space-x-6">
              <a
                href="#how-it-works"
                className="text-md font-semibold text-white hover:text-gray-300 transition-all"
              >
                How It Works
              </a>
              <a
                href="#features"
                className="text-md font-semibold text-white hover:text-gray-300 transition-all"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-md font-semibold text-white hover:text-gray-300 transition-all"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-md font-semibold text-white hover:text-gray-300 transition-all"
              >
                FAQ
              </a>

              {/* Login and Sign Up Buttons */}
              <a
                href="/dashboard"
                className="text-md font-semibold text-white hover:text-gray-300 transition-all"
              >
                Login
              </a>
              <a
                href="/dashboard"
                className="px-5 py-2 text-md font-semibold bg-gradient-to-r from-[#6C63FF] to-[#4A90E2] text-white rounded-lg shadow-md hover:opacity-90 transition-all"
              >
                Sign Up
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 md:px-10 bg-gradient-to-r from-[#2c3e50] to-[#25413a]">
          {/* Centered Content - Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl"
          >
            <h2><br></br></h2>
            <h2><br></br></h2>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Unlock Your Dream Job with AI
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              Master your interviews with AI-driven mock sessions and receive
              instant, personalized feedback!
            </p>
            <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
              <a
                href="/dashboard"
                className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-[#6C63FF] to-[#4A90E2] text-white rounded-lg shadow-md hover:opacity-90 transition-all"
              >
                Start for Free
              </a>
              <a
                href="#features"
                className="px-6 py-3 text-lg font-semibold bg-transparent border-2 border-white text-white rounded-lg shadow-md hover:bg-white hover:text-[#1a1a1a] transition-all"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="py-16 bg-white px-6 md:px-12"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            {/* Left Content - Text & Cards */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-[#1a1a1a]">
                Be 10x More Successful in Interviews
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Get hired quicker by mastering your interview skills with AI-driven
                feedback and tailored practice sessions.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-1 gap-6">
                {/* Step 1 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#f5f5f5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-[#1a1a1a]">Step 1</h3>
                  <p className="mt-2 text-gray-600">
                    Upload your Job Details and let our AI analyze your skills and
                    experience.
                  </p>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#f5f5f5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-[#1a1a1a]">Step 2</h3>
                  <p className="mt-2 text-gray-600">
                    Practice with tailored mock interviews and receive real-time
                    feedback.
                  </p>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#f5f5f5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-[#1a1a1a]">Step 3</h3>
                  <p className="mt-2 text-gray-600">
                    Improve with detailed performance reports and actionable
                    insights.
                  </p>
                </motion.div>
              </div>

              <div className="mt-6">
                <a
                  href="/dashboard"
                  className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-[#6C63FF] to-[#4A90E2] text-white rounded-lg shadow-md hover:opacity-90 transition-all"
                >
                  Get Started Now
                </a>
              </div>
            </div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 flex justify-center mt-8 md:mt-0"
            >
              <img
                src="/interview.webp"
                alt="AI Interview Illustration"
                className="w-full max-w-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-16 bg-[#f5f5f5] px-6 md:px-12"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#1a1a1a]">
              Why Choose Eloqify?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Unlock the full potential of AI-driven interview preparation with
              our cutting-edge features.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] to-[#4A90E2] opacity-0 hover:opacity-100 transition-all duration-300"></div>
                <h3 className="text-2xl font-semibold text-[#1a1a1a] relative z-10">
                  🎯 Profile-Based Mock Interviews
                </h3>
                <p className="mt-2 text-gray-600 relative z-10">
                  Our AI analyzes your Profile and tailors questions based on your
                  experience and skills.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] to-[#4A90E2] opacity-0 hover:opacity-100 transition-all duration-300"></div>
                <h3 className="text-2xl font-semibold text-[#1a1a1a] relative z-10">
                  ⚡ Instant AI Feedback
                </h3>
                <p className="mt-2 text-gray-600 relative z-10">
                  Get real-time insights on your responses, including tone,
                  confidence, and clarity.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] to-[#4A90E2] opacity-0 hover:opacity-100 transition-all duration-300"></div>
                <h3 className="text-2xl font-semibold text-[#1a1a1a] relative z-10">
                  📊 Detailed Performance Reports
                </h3>
                <p className="mt-2 text-gray-600 relative z-10">
                  Receive in-depth analysis with strengths, improvement areas,
                  and score breakdowns.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-16 bg-white px-6 md:px-12"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#1a1a1a]">
              What Our Users Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See how Eloqify has helped professionals excel in interviews.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "John Doe",
                  role: "Software Engineer at Google",
                  feedback:
                    "Eloqify transformed my interview preparation! The AI-driven feedback helped me improve my answers and boost confidence.",
                },
                {
                  name: "Sarah Smith",
                  role: "Data Analyst at Amazon",
                  feedback:
                    "The real-time feedback on tone and clarity was a game-changer. I landed my dream job thanks to Eloqify!",
                },
                {
                  name: "Mark Johnson",
                  role: "Product Manager at Microsoft",
                  feedback:
                    "I loved the profile-based mock interviews! The tailored questions made me feel super prepared.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#f5f5f5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <p className="text-gray-600 italic">
                    "{testimonial.feedback}"
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-[#1a1a1a]">
                    - {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="py-16 bg-[#f5f5f5] px-6 md:px-12"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#1a1a1a]">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-6">
                  <button
                    onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                    className="w-full text-left text-lg font-semibold bg-white p-4 rounded-lg shadow-md hover:bg-[#1a1a1a] hover:text-white transition duration-300"
                  >
                    {faq.question}
                  </button>
                  {faqOpen === index && (
                    <p className="mt-2 text-gray-600 p-4 bg-white shadow-md rounded-lg">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white px-6 md:px-12">
          <Contect />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-[#1a1a1a] text-white text-center">
        <div className="container mx-auto">
          <p>© 2024 Eloqify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default page;














