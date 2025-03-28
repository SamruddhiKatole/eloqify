// // import { UserButton } from "@clerk/nextjs";
// // import React from "react";
// // import AddNewInterview from "./_components/AddNewInterview";
// // import InterviewList from "./_components/InterviewList";

// // const Dashboard = () => {
// //   return (
// //     <div className="p-10" >
// //       <h2 className="font-bold text-2xl" >Dashboard</h2>
// //       <h2 className="text-gray-500" >Create and start your AI Mockup Interview</h2>

// //       <div className="grid grid-cols-1 md:grid-cols-3 my-5" >
// //         <AddNewInterview/>
// //       </div>

// //       <InterviewList/>
// //     </div>
// //   );
// // };

// // export default Dashboard;
// "use client";
// import { UserButton } from "@clerk/nextjs";
// import React from "react";
// import AddNewInterview from "./_components/AddNewInterview";
// import InterviewList from "./_components/InterviewList";

// const Dashboard = () => {
//   return (
//     <div className="p-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">Dashboard</h2>
//         <UserButton afterSignOutUrl="/" />
//       </div>
//       <p className="text-gray-600 dark:text-gray-300 mb-6">
//         Create and start your AI Mockup Interview
//       </p>
//       <div className="mb-8">
//         <AddNewInterview />
//       </div>
//       <InterviewList />
//     </div>
//   );
// };

// export default Dashboard;



"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";

const Dashboard = () => {
  return (
    <div className="p-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">Dashboard</h2>
        <UserButton afterSignOutUrl="/" />
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Create and start your AI Mockup Interview
      </p>
      <div className="mb-8">
        <AddNewInterview />
      </div>
      <InterviewList />
    </div>
  );
};

export default Dashboard;


