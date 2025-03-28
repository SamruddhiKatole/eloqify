// "use client";
// import { db } from "@/utils/db";
// import { UserAnswer } from "@/utils/schema";
// import { eq } from "drizzle-orm";
// import React, { useEffect, useState } from "react";
// import { ChevronDown } from "lucide-react";

// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import { useMemo } from "react";

// const Feedback = ({ params }) => {
//   const router = useRouter();
//   const [feedbackList, setFeedbackList] = useState([]);

//   useEffect(() => {
//     GetFeedback();
//   }, []);

//   const GetFeedback = async () => {
//     const result = await db
//       .select()
//       .from(UserAnswer)
//       .where(eq(UserAnswer.mockIdRef, params.interviewId))
//       .orderBy(UserAnswer.id);

//     console.log(result);
//     setFeedbackList(result);
//   };

//   const overallRating = useMemo(() => {
//     if (feedbackList && feedbackList.length > 0) {
//       const totalRating = feedbackList.reduce(
//         (sum, item) => sum + Number(item.rating),
//         0
//       );
//       // console.log("total",totalRating);
//       // console.log("length",feedbackList.length);
//       return (totalRating / feedbackList.length).toFixed(1);
//     }
//     return 0;
//   }, [feedbackList]);

//   return (
//     <div className="p-10">
//       {feedbackList?.length == 0 ? (
//         <h2 className="font-bold text-xl text-gray-500 my-5">
//           No Interview feedback Record Found
//         </h2>
//       ) : (
//         <>
//          <h2 className="text-3xl font-bold text-green-500">Congratulations</h2>
//          <h2 className="font-bold text-2xl">Here is your interview feedback</h2>
//           <h2 className="text-primary text-lg my-3">
//             Your overall interview rating{" "}
//             <strong
//               className={`${
//                 overallRating >= 5 ? "text-green-500" : "text-red-600"
//               }`}
//             >
//               {overallRating}
//               <span className="text-black">/10</span>
//             </strong>
//           </h2>
//           <h2 className="text-sm text-gray-500">
//             Find below interview question with correct answer, Your answer and
//             feedback for improvement
//           </h2>
//           {feedbackList &&
//             feedbackList.map((item, index) => (
//               <Collapsible key={index} className="mt-7">
//                 <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 text-left flex justify-between gap-7 w-full">
//                   {item.question} <ChevronDown className="h-5 w-5" />{" "}
//                 </CollapsibleTrigger>
//                 <CollapsibleContent>
//                   <div className="flex flex-col gap-2">
//                     <h2 className="text-red-500 p-2 border rounded-lg">
//                       <strong>Rating: </strong>
//                       {item.rating}
//                     </h2>
//                     <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
//                       <strong>Your Answer: </strong>
//                       {item.userAns}
//                     </h2>
//                     <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
//                       <strong>Correct Answer: </strong>
//                       {item.correctAns}
//                     </h2>
//                     <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-primary-900">
//                       <strong>Feedback: </strong>
//                       {item.feedback}
//                     </h2>
//                   </div>
//                 </CollapsibleContent>
//               </Collapsible>
//             ))}
//         </>
//       )}

//       <Button onClick={() => router.replace("/dashboard")}>Go Home</Button>
//     </div>
//   );
// };

// export default Feedback;
"use client";
import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

// Chart.js and react-chartjs-2 imports
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Doughnut, Bar } from "react-chartjs-2";

// Circular Progress Bar imports
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Confetti and window size hook
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// ThemeToggle Component
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

const Feedback = ({ params }) => {
  const router = useRouter();
  const [feedbackList, setFeedbackList] = useState([]);
  const { width, height } = useWindowSize();

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = async () => {
    try {
      const result = await db
        .select()
        .from(UserAnswer)
        .where(eq(UserAnswer.mockIdRef, params.interviewId))
        .orderBy(UserAnswer.id);
      console.log("Fetched Feedback:", result);
      // Limit to only the first five feedback records
      setFeedbackList(result.slice(0, 5));
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  // Calculate Overall Rating (average of five ratings)
  const overallRating = useMemo(() => {
    if (feedbackList.length > 0) {
      const totalRating = feedbackList.reduce(
        (sum, item) => sum + Number(item.rating),
        0
      );
      return (totalRating / feedbackList.length).toFixed(1);
    }
    return 0;
  }, [feedbackList]);

  // Convert overall rating to a percentage (out of 10)
  const overallRatingPercentage = useMemo(
    () => (overallRating * 10).toFixed(0),
    [overallRating]
  );

  // Data for the Line Chart (Rating Progression)
  const lineChartData = useMemo(
    () => ({
      labels: feedbackList.map((_, index) => `Q${index + 1}`),
      datasets: [
        {
          label: "Rating per Question",
          data: feedbackList.map((item) => Number(item.rating)),
          fill: false,
          borderColor: "#4BC0C0",
          backgroundColor: "#4BC0C0",
          tension: 0.2,
        },
      ],
    }),
    [feedbackList]
  );

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Rating Progression" },
    },
  };

  // Data for the Doughnut Chart (Rating Distribution)
  const doughnutChartData = useMemo(() => {
    // Calculate how many times each rating occurs.
    const distribution = feedbackList.reduce((acc, item) => {
      const rating = Number(item.rating);
      acc[rating] = (acc[rating] || 0) + 1;
      return acc;
    }, {});
    const labels = Object.keys(distribution);
    const data = Object.values(distribution);
    const backgroundColors = labels.map((label) =>
      Number(label) >= 5 ? "#4CAF50" : "#F44336"
    );
    return {
      labels,
      datasets: [
        {
          label: "Rating Distribution",
          data,
          backgroundColor: backgroundColors,
          hoverOffset: 4,
        },
      ],
    };
  }, [feedbackList]);

  const doughnutChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: { position: "right" },
      title: { display: true, text: "Rating Distribution" },
    },
  };

  // Data for the Bar Chart (Detailed Ratings)
  const barChartData = useMemo(
    () => ({
      labels: feedbackList.map((_, index) => `Q${index + 1}`),
      datasets: [
        {
          label: "Rating",
          data: feedbackList.map((item) => Number(item.rating)),
          backgroundColor: feedbackList.map((item) =>
            Number(item.rating) >= 5 ? "#4CAF50" : "#F44336"
          ),
        },
      ],
    }),
    [feedbackList]
  );

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Detailed Ratings" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 p-10 space-y-10">
      {/* Confetti Animation for High Scores */}
      {Number(overallRating) >= 8 && (
        <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />
      )}

      {/* Header with Theme Toggle */}
      <div className="flex justify-between items-center">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Interview Insights
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Unlock your performance with beautiful analytics.
          </p>
        </div>
        <ThemeToggle />
      </div>

      {feedbackList.length === 0 ? (
        <div className="text-center">
          <h2 className="font-bold text-xl text-gray-500 my-5">
            No Interview Feedback Record Found
          </h2>
        </div>
      ) : (
        <>
          {/* Overall Rating and Charts Section */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Overall Rating Card */}
            <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300">
              <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Overall Rating
              </h2>
              <div className="w-32 h-32">
                <CircularProgressbar
                  value={overallRatingPercentage}
                  text={`${overallRating}/5`}
                  styles={buildStyles({
                    pathColor: overallRating >= 5 ? "#4CAF50" : "#F44336",
                    textColor: "#333",
                    trailColor: "#d6d6d6",
                    textSize: "16px",
                  })}
                />
              </div>
            </div>

            {/* Line Chart Card */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-2xl md:col-span-2 transform hover:scale-105 transition duration-300">
              <Line data={lineChartData} options={lineChartOptions} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Doughnut Chart Card */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300 flex justify-center items-center">
              <div className="w-64 h-64">
                <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
              </div>
            </div>

            {/* Bar Chart Card */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300">
              <Bar data={barChartData} options={barChartOptions} />
            </div>
          </div>

          {/* Detailed Feedback Section */}
          <div className="mt-10 bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold text-green-500 mb-4">
              Congratulations!
            </h2>
            <h2 className="font-bold text-2xl mb-3 text-gray-800 dark:text-gray-200">
              Here is your interview feedback
            </h2>
            <h2 className="text-primary text-lg mb-4">
              Your overall interview rating{" "}
              <strong className={`${overallRating >= 5 ? "text-green-500" : "text-red-600"}`}>
                {overallRating}
                <span className="text-black dark:text-gray-300">/5</span>
              </strong>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Find below interview questions with correct answers, your answers, and actionable feedback for improvement.
            </p>
            <div className="space-y-4">
              {feedbackList.map((item, index) => (
                <Collapsible key={index} className="border-b pb-4">
                  <CollapsibleTrigger className="p-3 bg-gray-50 dark:bg-gray-600 rounded-lg flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {item.question}
                    </span>
                    <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3">
                    <div className="flex flex-col gap-3">
                      <div className="p-3 border-l-4 border-red-500 bg-red-50 dark:bg-red-900 dark:text-white rounded">
                        <strong>Rating: </strong>{item.rating}
                      </div>
                      <div className="p-3 border-l-4 border-red-300 bg-red-100 dark:bg-red-800 dark:text-white rounded">
                        <strong>Your Answer: </strong>{item.userAns}
                      </div>
                      <div className="p-3 border-l-4 border-green-400 bg-green-50 dark:bg-green-900 dark:text-white rounded">
                        <strong>Correct Answer: </strong>{item.correctAns}
                      </div>
                      <div className="p-3 border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-900 dark:text-white rounded">
                        <strong>Feedback: </strong>{item.feedback}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Footer Button */}
      <div className="text-center">
        <Button
          onClick={() => router.replace("/dashboard")}
          className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition duration-300"
        >
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default Feedback;

