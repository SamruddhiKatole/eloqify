// // import React from 'react'
// // import { Button } from "@/components/ui/button";
// // import { useRouter } from 'next/navigation';

// // const InterviewItemCard = ({interview}) => {

// //     const router = useRouter()
// //     const onStart = ()=>{
// //         router.push("/dashboard/interview/"+interview?.mockId)
// //     }
// //     const onFeedback = ()=>{
// //         router.push("/dashboard/interview/"+interview?.mockId+"/feedback")
// //     }
// //   return (
// //     <div className="border border-gray-500 shadow-sm rounded-lg p-3" >
// //         <h2 className='font-bold text-primary' >{interview?.jobPosition}</h2>
// //         <h2 className='text-sm text-gray-600' >{interview?.jobExperience} Years of experience</h2>
// //         <h2 className="text-xs text-gray-400" >Created At:{interview.createdAt}</h2>

// //         <div className='flex justify-between mt-2 gap-5 ' >
// //             <Button onClick={onFeedback} size="sm"  className="w-full" >Feedback</Button>
// //             <Button onClick={onStart} size="sm"  className="w-full">Start</Button>
// //         </div>
// //     </div>

// //   )
// // }

// // export default InterviewItemCard
// "use client";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";

// const InterviewItemCard = ({ interview, rating }) => {
//   const router = useRouter();

//   const onStart = () => {
//     router.push(`/dashboard/interview/${interview?.mockId}`);
//   };

//   const onFeedback = () => {
//     router.push(`/dashboard/interview/${interview?.mockId}/feedback`);
//   };

//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-300 dark:border-gray-700 shadow-sm transform hover:scale-105 transition duration-300">
//       <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
//         {interview?.jobPosition || "Mock Interview"}
//       </h2>
//       <div className="flex items-center justify-between mb-3">
//         <p className="text-sm text-gray-600 dark:text-gray-400">
//           {interview?.jobExperience} Years Experience
//         </p>
//         <p className="text-xs text-gray-500 dark:text-gray-400">
//           {new Date(interview?.createdAt).toLocaleDateString()}
//         </p>
//       </div>
//       <div className="mb-4">
//         <p className="text-sm text-gray-700 dark:text-gray-200">
//           <span className="font-semibold">Rating:</span> {rating ? rating : "N/A"}
//         </p>
//       </div>
//       <div className="flex gap-3">
//         <Button
//           onClick={onFeedback}
//           size="sm"
//           className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
//         >
//           Feedback
//         </Button>
//         <Button
//           onClick={onStart}
//           size="sm"
//           className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
//         >
//           Start
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default InterviewItemCard;
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const InterviewItemCard = ({ interview, rating }) => {
  const router = useRouter();

  const onStart = () => {
    router.push(`/dashboard/interview/${interview?.mockId}`);
  };

  const onFeedback = () => {
    router.push(`/dashboard/interview/${interview?.mockId}/feedback`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-300 dark:border-gray-700 shadow-sm transform hover:scale-105 transition duration-300">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
        {interview?.jobPosition || "Mock Interview"}
      </h2>
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {interview?.jobExperience} Years Experience
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {new Date(interview?.createdAt).toLocaleDateString()}
        </p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-700 dark:text-gray-200">
          <span className="font-semibold">Rating:</span> {rating ? rating : "N/A"}
        </p>
      </div>
      <div className="flex gap-3">
        <Button
          onClick={onFeedback}
          size="sm"
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Feedback
        </Button>
        <Button
          onClick={onStart}
          size="sm"
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default InterviewItemCard;


