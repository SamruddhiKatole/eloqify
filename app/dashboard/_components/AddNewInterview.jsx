// // // // "use client";
// // // // import React, { useState } from "react";
// // // // import {
// // // //   Dialog,
// // // //   DialogClose,
// // // //   DialogContent,
// // // //   DialogDescription,
// // // //   DialogHeader,
// // // //   DialogTitle,
// // // //   DialogTrigger,
// // // // } from "@/components/ui/dialog";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Textarea } from "@/components/ui/textarea";
// // // // import { chatSession } from "@/utils/GeminiAIModal";
// // // // import { LoaderCircle } from "lucide-react";
// // // // import { db } from "@/utils/db";
// // // // import { MockInterview } from "@/utils/schema";
// // // // import { v4 as uuidv4 } from "uuid";
// // // // import { useUser } from "@clerk/nextjs";
// // // // import moment from "moment";
// // // // import { useRouter } from "next/navigation";

// // // // const AddNewInterview = () => {
// // // //   const [openDailog, setOpenDialog] = useState(false);
// // // //   const [jobPosition, setJobPosition] = useState();
// // // //   const [jobDesc, setJobDesc] = useState();
// // // //   const [jobExperience, setJobExperience] = useState();
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [jsonResponse, setJsonResponse] = useState([]);
// // // //   const { user } = useUser();
// // // //   const router = useRouter();


// // // //   const onSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);
  
// // // //     try {
// // // //       const InputPrompt = `
// // // //         Job Positions: ${jobPosition}, 
// // // //         Job Description: ${jobDesc}, 
// // // //         Years of Experience: ${jobExperience}. 
// // // //         Based on this information, please provide 5 interview questions with answers in JSON format, ensuring "Question" and "Answer" are fields in the JSON.
// // // //       `;
  
// // // //       const result = await chatSession.sendMessage(InputPrompt);
// // // //       const responseText = result.response
// // // //         .text()
// // // //         .replace("```json", "")
// // // //         .replace("```", "")
// // // //         .trim();
  
// // // //       const MockJsonResp = JSON.parse(responseText);
  
// // // //       console.log(MockJsonResp);
  
// // // //       // Proceed to insert into the database
// // // //       const resp = await db
// // // //         .insert(MockInterview)
// // // //         .values({
// // // //           mockId: uuidv4(),
// // // //           jsonMockResp: responseText,
// // // //           jobPosition: jobPosition,
// // // //           jobDesc: jobDesc,
// // // //           jobExperience: jobExperience,
// // // //           createdBy: user?.primaryEmailAddress?.emailAddress,
// // // //           createdAt: moment().format("YYYY-MM-DD"),
// // // //         })
// // // //         .returning({ mockId: MockInterview.mockId });
  
// // // //       console.log("Inserted ID:", resp);
  
// // // //       if (resp) {
// // // //         setOpenDialog(false);
// // // //         router.push("/dashboard/interview/" + resp[0]?.mockId);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error:", error);
// // // //       // Optionally, display an error message to the user
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };
  



// // // // STOPPPP






// // // //   const onSubmit = async (e) => {
// // // //     setLoading(true);
// // // //     e.preventDefault();
// // // //     console.log(jobPosition, jobDesc, jobExperience);

// // // //     const InputPrompt = `
// // // //   Job Positions: ${jobPosition}, 
// // // //   Job Description: ${jobDesc}, 
// // // //   Years of Experience: ${jobExperience}. 
// // // //   Based on this information, please provide 5 interview questions with answers in JSON format, ensuring "Question" and "Answer" are fields in the JSON.
// // // // `;

// // // //     const result = await chatSession.sendMessage(InputPrompt);
// // // //     const MockJsonResp = result.response
// // // //       .text()
// // // //       .replace("```json", "")
// // // //       .replace("```", "")
// // // //       .trim();
// // // //     console.log(JSON.parse(MockJsonResp));
// // // //     // const parsedResp = MockJsonResp
// // // //     setJsonResponse(MockJsonResp);

// // // //     if (MockJsonResp) {
// // // //       const resp = await db
// // // //         .insert(MockInterview)
// // // //         .values({
// // // //           mockId: uuidv4(),
// // // //           jsonMockResp: MockJsonResp,
// // // //           jobPosition: jobPosition,
// // // //           jobDesc: jobDesc,
// // // //           jobExperience: jobExperience,
// // // //           createdBy: user?.primaryEmailAddress?.emailAddress,
// // // //           createdAt: moment().format("YYYY-MM-DD"),
// // // //         })
// // // //         .returning({ mockId: MockInterview.mockId });
        
// // // //       console.log("Inserted ID:", resp);

// // // //       if (resp) {
// // // //         setOpenDialog(false);
// // // //         router.push("/dashboard/interview/" + resp[0]?.mockId);
// // // //       }
// // // //     } else {
// // // //       console.log("ERROR");
// // // //     }
// // // //     setLoading(false);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <div
// // // //         className="p-10 rounded-lg border bg-secondary hover:scale-105 hover:shadow-sm transition-all cursor-pointer"
// // // //         onClick={() => setOpenDialog(true)}
// // // //       >
// // // //         <h2 className=" text-lg text-center">+ Add New</h2>
// // // //       </div>
// // // //       <Dialog open={openDailog}>
// // // //         <DialogContent className="max-w-2xl">
// // // //           <DialogHeader>
// // // //             <DialogTitle className="text-2xl">
// // // //               Tell us more about your job interviwing
// // // //             </DialogTitle>
// // // //             <DialogDescription>
// // // //               <form onSubmit={onSubmit}>
// // // //                 <div className="my-3">
// // // //                   <h2>
// // // //                     Add Details about your job position, job descritpion and
// // // //                     years of experience
// // // //                   </h2>

// // // //                   <div className="mt-7 my-3">
// // // //                     <label className="text-black">Job Role/job Position</label>
// // // //                     <Input
// // // //                       className="mt-1"
// // // //                       placeholder="Ex. Full stack Developer"
// // // //                       required
// // // //                       onChange={(e) => setJobPosition(e.target.value)}
// // // //                     />
// // // //                   </div>
// // // //                   <div className="my-5">
// // // //                     <label className="text-black">
// // // //                       Job Description/ Tech stack (In Short)
// // // //                     </label>
// // // //                     <Textarea
// // // //                       className="placeholder-opacity-50"
// // // //                       placeholder="Ex. React, Angular, Nodejs, Mysql, Nosql, Python"
// // // //                       required
// // // //                       onChange={(e) => setJobDesc(e.target.value)}
// // // //                     />
// // // //                   </div>
// // // //                   <div className="my-5">
// // // //                     <label className="text-black">Years of Experience</label>
// // // //                     <Input
// // // //                       className="mt-1"
// // // //                       placeholder="Ex. 5"
// // // //                       max="50"
// // // //                       type="number"
// // // //                       required
// // // //                       onChange={(e) => setJobExperience(e.target.value)}
// // // //                     />
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="flex gap-5 justify-end">
// // // //                   <Button
// // // //                     type="button"
// // // //                     variant="goast"
// // // //                     onClick={() => setOpenDialog(false)}
// // // //                   >
// // // //                     Cancel
// // // //                   </Button>
// // // //                   <Button type="submit" disabled={loading}>
// // // //                     {loading ? (
// // // //                       <>
// // // //                         <LoaderCircle className="animate-spin" />
// // // //                         Generating From AI
// // // //                       </>
// // // //                     ) : (
// // // //                       "Start Interview"
// // // //                     )}
// // // //                   </Button>
// // // //                 </div>
// // // //               </form>
// // // //             </DialogDescription>
// // // //           </DialogHeader>
// // // //         </DialogContent>
// // // //       </Dialog>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddNewInterview;


// // // // // // // // "use client";
// // // // // // // // import React, { useState } from "react";

// // // // // // // // import {
// // // // // // // //   Dialog,
// // // // // // // //   DialogClose,
// // // // // // // //   DialogContent,
// // // // // // // //   DialogDescription,
// // // // // // // //   DialogHeader,
// // // // // // // //   DialogTitle,
// // // // // // // //   DialogTrigger,
// // // // // // // // } from "@/components/ui/dialog";
// // // // // // // // import { Input } from "@/components/ui/input";
// // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // import { Textarea } from "@/components/ui/textarea";
// // // // // // // // import { chatSession } from "@/utils/GeminiAIModal";
// // // // // // // // import { LoaderCircle } from "lucide-react";
// // // // // // // // import { db } from "@/utils/db";
// // // // // // // // import { MockInterview } from "@/utils/schema";
// // // // // // // // import { v4 as uuidv4 } from "uuid";
// // // // // // // // import { useUser } from "@clerk/nextjs";
// // // // // // // // import moment from "moment";
// // // // // // // // import { useRouter } from "next/navigation";

// // // // // // // // const AddNewInterview = () => {
// // // // // // // //   const [openDailog, setOpenDialog] = useState(false);
// // // // // // // //   const [jobPosition, setJobPosition] = useState();
// // // // // // // //   const [jobDesc, setJobDesc] = useState();
// // // // // // // //   const [jobExperience, setJobExperience] = useState();
// // // // // // // //   const [resumeFile, setResumeFile] = useState(null); // State to store the resume file
// // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // //   const [jsonResponse, setJsonResponse] = useState([]);
// // // // // // // //   const { user } = useUser();
// // // // // // // //   const router = useRouter();

// // // // // // // //   const onSubmit = async (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     setLoading(true);
  
// // // // // // // //     try {
// // // // // // // //       const InputPrompt = `
// // // // // // // //         Job Positions: ${jobPosition}, 
// // // // // // // //         Job Description: ${jobDesc}, 
// // // // // // // //         Years of Experience: ${jobExperience}. 
// // // // // // // //         Based on this information, please provide 5 interview questions with answers in JSON format, ensuring "Question" and "Answer" are fields in the JSON.
// // // // // // // //       `;
  
// // // // // // // //       const result = await chatSession.sendMessage(InputPrompt);
// // // // // // // //       const responseText = result.response
// // // // // // // //         .text()
// // // // // // // //         .replace("```json", "")
// // // // // // // //         .replace("```", "")
// // // // // // // //         .trim();
  
// // // // // // // //       const MockJsonResp = JSON.parse(responseText);
  
// // // // // // // //       console.log(MockJsonResp);

// // // // // // // //       // Handle resume file upload if necessary (e.g., to Firebase or any storage)
// // // // // // // //       if (resumeFile) {
// // // // // // // //         console.log("Resume file selected:", resumeFile);
// // // // // // // //         // You can handle resume file upload here using an API or storage service.
// // // // // // // //       }
  
// // // // // // // //       // Proceed to insert into the database
// // // // // // // //       const resp = await db
// // // // // // // //         .insert(MockInterview)
// // // // // // // //         .values({
// // // // // // // //           mockId: uuidv4(),
// // // // // // // //           jsonMockResp: responseText,
// // // // // // // //           jobPosition: jobPosition,
// // // // // // // //           jobDesc: jobDesc,
// // // // // // // //           jobExperience: jobExperience,
// // // // // // // //           createdBy: user?.primaryEmailAddress?.emailAddress,
// // // // // // // //           createdAt: moment().format("YYYY-MM-DD"),
// // // // // // // //         })
// // // // // // // //         .returning({ mockId: MockInterview.mockId });
  
// // // // // // // //       console.log("Inserted ID:", resp);
  
// // // // // // // //       if (resp) {
// // // // // // // //         setOpenDialog(false);
// // // // // // // //         router.push("/dashboard/interview/" + resp[0]?.mockId);
// // // // // // // //       }
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error:", error);
// // // // // // // //       // Optionally, display an error message to the user
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleFileChange = (e) => {
// // // // // // // //     setResumeFile(e.target.files[0]);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <div
// // // // // // // //         className="p-10 rounded-lg border bg-secondary hover:scale-105 hover:shadow-sm transition-all cursor-pointer"
// // // // // // // //         onClick={() => setOpenDialog(true)}
// // // // // // // //       >
// // // // // // // //         <h2 className=" text-lg text-center">+ Add New</h2>
// // // // // // // //       </div>
// // // // // // // //       <Dialog open={openDailog}>
// // // // // // // //         <DialogContent className="max-w-2xl">
// // // // // // // //           <DialogHeader>
// // // // // // // //             <DialogTitle className="text-2xl">
// // // // // // // //               Tell us more about your job interviewing
// // // // // // // //             </DialogTitle>
// // // // // // // //             <DialogDescription>
// // // // // // // //               <form onSubmit={onSubmit}>
// // // // // // // //                 <div className="my-3">
// // // // // // // //                   <h2>
// // // // // // // //                     Add Details about your job position, job description, and
// // // // // // // //                     years of experience
// // // // // // // //                   </h2>

// // // // // // // //                   <div className="mt-7 my-3">
// // // // // // // //                     <label className="text-black">Job Role/Job Position</label>
// // // // // // // //                     <Input
// // // // // // // //                       className="mt-1"
// // // // // // // //                       placeholder="Ex. Full stack Developer"
// // // // // // // //                       required
// // // // // // // //                       onChange={(e) => setJobPosition(e.target.value)}
// // // // // // // //                     />
// // // // // // // //                   </div>
// // // // // // // //                   <div className="my-5">
// // // // // // // //                     <label className="text-black">
// // // // // // // //                       Job Description/ Tech stack (In Short)
// // // // // // // //                     </label>
// // // // // // // //                     <Textarea
// // // // // // // //                       className="placeholder-opacity-50"
// // // // // // // //                       placeholder="Ex. React, Angular, Nodejs, Mysql, Nosql, Python"
// // // // // // // //                       required
// // // // // // // //                       onChange={(e) => setJobDesc(e.target.value)}
// // // // // // // //                     />
// // // // // // // //                   </div>
// // // // // // // //                   <div className="my-5">
// // // // // // // //                     <label className="text-black">Years of Experience</label>
// // // // // // // //                     <Input
// // // // // // // //                       className="mt-1"
// // // // // // // //                       placeholder="Ex. 5"
// // // // // // // //                       max="50"
// // // // // // // //                       type="number"
// // // // // // // //                       required
// // // // // // // //                       onChange={(e) => setJobExperience(e.target.value)}
// // // // // // // //                     />
// // // // // // // //                   </div>

// // // // // // // //                   {/* Resume Upload Section */}
// // // // // // // //                   <div className="my-5">
// // // // // // // //                     <label className="text-black">Upload Resume (Optional)</label>
// // // // // // // //                     <Input
// // // // // // // //                       className="mt-1"
// // // // // // // //                       type="file"
// // // // // // // //                       accept=".pdf,.doc,.docx"
// // // // // // // //                       onChange={handleFileChange}
// // // // // // // //                     />
// // // // // // // //                     {resumeFile && <p>Selected file: {resumeFile.name}</p>}
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //                 <div className="flex gap-5 justify-end">
// // // // // // // //                   <Button
// // // // // // // //                     type="button"
// // // // // // // //                     variant="goast"
// // // // // // // //                     onClick={() => setOpenDialog(false)}
// // // // // // // //                   >
// // // // // // // //                     Cancel
// // // // // // // //                   </Button>
// // // // // // // //                   <Button type="submit" disabled={loading}>
// // // // // // // //                     {loading ? (
// // // // // // // //                       <>
// // // // // // // //                         <LoaderCircle className="animate-spin" />
// // // // // // // //                         Generating From AI
// // // // // // // //                       </>
// // // // // // // //                     ) : (
// // // // // // // //                       "Start Interview"
// // // // // // // //                     )}
// // // // // // // //                   </Button>
// // // // // // // //                 </div>
// // // // // // // //               </form>
// // // // // // // //             </DialogDescription>
// // // // // // // //           </DialogHeader>
// // // // // // // //         </DialogContent>
// // // // // // // //       </Dialog>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default AddNewInterview;




// // // // // // // // stop


// // // // // // // "use client";
// // // // // // // import React, { useState } from "react";

// // // // // // // import {
// // // // // // //   Dialog,
// // // // // // //   DialogClose,
// // // // // // //   DialogContent,
// // // // // // //   DialogDescription,
// // // // // // //   DialogHeader,
// // // // // // //   DialogTitle,
// // // // // // //   DialogTrigger,
// // // // // // // } from "@/components/ui/dialog";
// // // // // // // import { Input } from "@/components/ui/input";
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import { Textarea } from "@/components/ui/textarea";
// // // // // // // import { chatSession } from "@/utils/GeminiAIModal";
// // // // // // // import { LoaderCircle } from "lucide-react";
// // // // // // // import { db } from "@/utils/db";
// // // // // // // import { MockInterview } from "@/utils/schema";
// // // // // // // import { v4 as uuidv4 } from "uuid";
// // // // // // // import { useUser } from "@clerk/nextjs";
// // // // // // // import moment from "moment";
// // // // // // // import { useRouter } from "next/navigation";

// // // // // // // const AddNewInterview = () => {
// // // // // // //   const [openDailog, setOpenDialog] = useState(false);
// // // // // // //   const [jobPosition, setJobPosition] = useState();
// // // // // // //   const [jobDesc, setJobDesc] = useState();
// // // // // // //   const [jobExperience, setJobExperience] = useState();
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [jsonResponse, setJsonResponse] = useState([]);
// // // // // // //   const { user } = useUser();
// // // // // // //   const router = useRouter();

// // // // // // //   const onSubmit = async (e) => {
// // // // // // //     setLoading(true);
// // // // // // //     e.preventDefault();
// // // // // // //     console.log(jobPosition, jobDesc, jobExperience);

// // // // // // //     const InputPrompt = `
// // // // // // //   Job Positions: ${jobPosition}, 
// // // // // // //   Job Description: ${jobDesc}, 
// // // // // // //   Years of Experience: ${jobExperience}. 
// // // // // // //   Based on this information, please provide 5 interview questions with answers in JSON format, ensuring "Question" and "Answer" are fields in the JSON.
// // // // // // // `;

// // // // // // //     const result = await chatSession.sendMessage(InputPrompt);
// // // // // // //     const MockJsonResp = result.response
// // // // // // //       .text()
// // // // // // //       .replace("```json", "")
// // // // // // //       .replace("```", "")
// // // // // // //       .trim();
// // // // // // //     console.log(JSON.parse(MockJsonResp));
// // // // // // //     // const parsedResp = MockJsonResp
// // // // // // //     setJsonResponse(MockJsonResp);

// // // // // // //     if (MockJsonResp) {
// // // // // // //       const resp = await db
// // // // // // //         .insert(MockInterview)
// // // // // // //         .values({
// // // // // // //           mockId: uuidv4(),
// // // // // // //           jsonMockResp: MockJsonResp,
// // // // // // //           jobPosition: jobPosition,
// // // // // // //           jobDesc: jobDesc,
// // // // // // //           jobExperience: jobExperience,
// // // // // // //           createdBy: user?.primaryEmailAddress?.emailAddress,
// // // // // // //           createdAt: moment().format("YYYY-MM-DD"),
// // // // // // //         })
// // // // // // //         .returning({ mockId: MockInterview.mockId });
        
// // // // // // //       console.log("Inserted ID:", resp);

// // // // // // //       if (resp) {
// // // // // // //         setOpenDialog(false);
// // // // // // //         router.push("/dashboard/interview/" + resp[0]?.mockId);
// // // // // // //       }
// // // // // // //     } else {
// // // // // // //       console.log("ERROR");
// // // // // // //     }
// // // // // // //     setLoading(false);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <div
// // // // // // //         className="p-10 rounded-lg border bg-secondary hover:scale-105 hover:shadow-sm transition-all cursor-pointer"
// // // // // // //         onClick={() => setOpenDialog(true)}
// // // // // // //       >
// // // // // // //         <h2 className=" text-lg text-center">+ Add New</h2>
// // // // // // //       </div>
// // // // // // //       <Dialog open={openDailog}>
// // // // // // //         <DialogContent className="max-w-2xl">
// // // // // // //           <DialogHeader>
// // // // // // //             <DialogTitle className="text-2xl">
// // // // // // //               Tell us more about your job interviwing
// // // // // // //             </DialogTitle>
// // // // // // //             <DialogDescription>
// // // // // // //               <form onSubmit={onSubmit}>
// // // // // // //                 <div className="my-3">
// // // // // // //                   <h2>
// // // // // // //                     Add Details about your job position, job descritpion and
// // // // // // //                     years of experience
// // // // // // //                   </h2>

// // // // // // //                   <div className="mt-7 my-3">
// // // // // // //                     <label className="text-black">Job Role/job Position</label>
// // // // // // //                     <Input
// // // // // // //                       className="mt-1"
// // // // // // //                       placeholder="Ex. Full stack Developer"
// // // // // // //                       required
// // // // // // //                       onChange={(e) => setJobPosition(e.target.value)}
// // // // // // //                     />
// // // // // // //                   </div>
// // // // // // //                   <div className="my-5">
// // // // // // //                     <label className="text-black">
// // // // // // //                       Job Description/ Tech stack (In Short)
// // // // // // //                     </label>
// // // // // // //                     <Textarea
// // // // // // //                       className="placeholder-opacity-50"
// // // // // // //                       placeholder="Ex. React, Angular, Nodejs, Mysql, Nosql, Python"
// // // // // // //                       required
// // // // // // //                       onChange={(e) => setJobDesc(e.target.value)}
// // // // // // //                     />
// // // // // // //                   </div>
// // // // // // //                   <div className="my-5">
// // // // // // //                     <label className="text-black">Years of Experience</label>
// // // // // // //                     <Input
// // // // // // //                       className="mt-1"
// // // // // // //                       placeholder="Ex. 5"
// // // // // // //                       max="50"
// // // // // // //                       type="number"
// // // // // // //                       required
// // // // // // //                       onChange={(e) => setJobExperience(e.target.value)}
// // // // // // //                     />
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //                 <div className="flex gap-5 justify-end">
// // // // // // //                   <Button
// // // // // // //                     type="button"
// // // // // // //                     variant="goast"
// // // // // // //                     onClick={() => setOpenDialog(false)}
// // // // // // //                   >
// // // // // // //                     Cancel
// // // // // // //                   </Button>
// // // // // // //                   <Button type="submit" disabled={loading}>
// // // // // // //                     {loading ? (
// // // // // // //                       <>
// // // // // // //                         <LoaderCircle className="animate-spin" />
// // // // // // //                         Generating From AI
// // // // // // //                       </>
// // // // // // //                     ) : (
// // // // // // //                       "Start Interview"
// // // // // // //                     )}
// // // // // // //                   </Button>
// // // // // // //                 </div>
// // // // // // //               </form>
// // // // // // //             </DialogDescription>
// // // // // // //           </DialogHeader>
// // // // // // //         </DialogContent>
// // // // // // //       </Dialog>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default AddNewInterview;


// // // // // // "use client";
// // // // // // import React, { useState } from "react";
// // // // // // import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf";
// // // // // // import Tesseract from "tesseract.js";

// // // // // // // Set pdfjs worker src from a CDN
// // // // // // GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

// // // // // // import {
// // // // // //   Dialog,
// // // // // //   DialogContent,
// // // // // //   DialogDescription,
// // // // // //   DialogHeader,
// // // // // //   DialogTitle,
// // // // // // } from "@/components/ui/dialog";
// // // // // // import { Input } from "@/components/ui/input";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Textarea } from "@/components/ui/textarea";
// // // // // // import { chatSession } from "@/utils/GeminiAIModal";
// // // // // // import { LoaderCircle } from "lucide-react";
// // // // // // import { db } from "@/utils/db";
// // // // // // import { MockInterview } from "@/utils/schema";
// // // // // // import { v4 as uuidv4 } from "uuid";
// // // // // // import { useUser } from "@clerk/nextjs";
// // // // // // import moment from "moment";
// // // // // // import { useRouter } from "next/navigation";

// // // // // // // Standard PDF text extraction using pdfjs-dist
// // // // // // const extractPdfText = async (arrayBuffer) => {
// // // // // //   try {
// // // // // //     const loadingTask = getDocument({ data: arrayBuffer });
// // // // // //     const pdf = await loadingTask.promise;
// // // // // //     let text = "";
// // // // // //     for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
// // // // // //       const page = await pdf.getPage(pageNum);
// // // // // //       const content = await page.getTextContent();
// // // // // //       console.log(`Page ${pageNum} content items:`, content.items); // Debug log each page's content items
// // // // // //       const strings = content.items.map((item) => item.str || "");
// // // // // //       text += strings.join(" ") + "\n";
// // // // // //     }
// // // // // //     return text;
// // // // // //   } catch (error) {
// // // // // //     console.error("Error during pdfjs text extraction:", error);
// // // // // //     return "";
// // // // // //   }
// // // // // // };

// // // // // // // Render the first page of the PDF as an image using pdfjs-dist
// // // // // // const renderPdfPageToImage = async (arrayBuffer) => {
// // // // // //   try {
// // // // // //     const loadingTask = getDocument({ data: arrayBuffer });
// // // // // //     const pdf = await loadingTask.promise;
// // // // // //     const page = await pdf.getPage(1);
// // // // // //     const viewport = page.getViewport({ scale: 2 });
// // // // // //     const canvas = document.createElement("canvas");
// // // // // //     const context = canvas.getContext("2d");
// // // // // //     canvas.height = viewport.height;
// // // // // //     canvas.width = viewport.width;
// // // // // //     await page.render({ canvasContext: context, viewport }).promise;
// // // // // //     const imageDataUrl = canvas.toDataURL("image/png");
// // // // // //     console.log("Rendered image data URL:", imageDataUrl); // Log the data URL to verify the image
// // // // // //     return imageDataUrl;
// // // // // //   } catch (error) {
// // // // // //     console.error("Error rendering PDF page to image:", error);
// // // // // //     return "";
// // // // // //   }
// // // // // // };

// // // // // // // Use Tesseract.js to perform OCR on the rendered image
// // // // // // const ocrPdfPage = async (arrayBuffer) => {
// // // // // //   try {
// // // // // //     const imageDataUrl = await renderPdfPageToImage(arrayBuffer);
// // // // // //     if (!imageDataUrl) {
// // // // // //       console.error("No image data URL generated.");
// // // // // //       return "";
// // // // // //     }
// // // // // //     const { data } = await Tesseract.recognize(imageDataUrl, "eng", {
// // // // // //       logger: (m) => console.log("OCR progress:", m), // Logs OCR progress
// // // // // //     });
// // // // // //     console.log("OCR result:", data.text);
// // // // // //     return data.text;
// // // // // //   } catch (error) {
// // // // // //     console.error("Error during OCR extraction:", error);
// // // // // //     return "";
// // // // // //   }
// // // // // // };

// // // // // // const AddNewInterview = () => {
// // // // // //   const [openDailog, setOpenDialog] = useState(false);
// // // // // //   const [jobPosition, setJobPosition] = useState("");
// // // // // //   const [jobDesc, setJobDesc] = useState("");
// // // // // //   const [jobExperience, setJobExperience] = useState("");
// // // // // //   const [resumeFile, setResumeFile] = useState(null);
// // // // // //   const [resumeText, setResumeText] = useState("");
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const { user } = useUser();
// // // // // //   const router = useRouter();

// // // // // //   const handleFileChange = async (e) => {
// // // // // //     const file = e.target.files[0];
// // // // // //     console.log("Uploaded file:", file); // Log file details for debugging
// // // // // //     if (file) {
// // // // // //       setResumeFile(file);
// // // // // //       if (file.type === "application/pdf") {
// // // // // //         const reader = new FileReader();
// // // // // //         reader.onload = async () => {
// // // // // //           const arrayBuffer = reader.result;
// // // // // //           console.log("ArrayBuffer loaded:", arrayBuffer);
// // // // // //           // First, try standard text extraction
// // // // // //           let text = await extractPdfText(arrayBuffer);
// // // // // //           console.log("Text extracted using pdfjs:", text);
// // // // // //           // If no text is found, try OCR
// // // // // //           if (!text || text.trim() === "") {
// // // // // //             console.log("No text found using pdfjs. Trying OCR...");
// // // // // //             text = await ocrPdfPage(arrayBuffer);
// // // // // //             console.log("Text extracted using OCR:", text);
// // // // // //           }
// // // // // //           setResumeText(text);
// // // // // //         };
// // // // // //         reader.readAsArrayBuffer(file);
// // // // // //       } else {
// // // // // //         alert("Please upload a PDF file.");
// // // // // //       }
// // // // // //     }
// // // // // //   };

// // // // // //   const onSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setLoading(true);

// // // // // //     try {
// // // // // //       const InputPrompt = `
// // // // // //         Job Position: ${jobPosition}, 
// // // // // //         Job Description: ${jobDesc}, 
// // // // // //         Years of Experience: ${jobExperience}.
// // // // // //         Resume Extracted Text: ${resumeText}.
// // // // // //         Based on this information, provide 5 interview questions with answers in JSON format.
// // // // // //       `;
// // // // // //       console.log("Input Prompt:", InputPrompt);

// // // // // //       const result = await chatSession.sendMessage(InputPrompt);
// // // // // //       const responseText = result.response
// // // // // //         .text()
// // // // // //         .replace("```json", "")
// // // // // //         .replace("```", "")
// // // // // //         .trim();

// // // // // //       const MockJsonResp = JSON.parse(responseText);
// // // // // //       console.log("AI Response:", MockJsonResp);

// // // // // //       // Save the interview data in the database
// // // // // //       const resp = await db
// // // // // //         .insert(MockInterview)
// // // // // //         .values({
// // // // // //           mockId: uuidv4(),
// // // // // //           jsonMockResp: responseText,
// // // // // //           jobPosition,
// // // // // //           jobDesc,
// // // // // //           jobExperience,
// // // // // //           createdBy: user?.primaryEmailAddress?.emailAddress,
// // // // // //           createdAt: moment().format("YYYY-MM-DD"),
// // // // // //         })
// // // // // //         .returning({ mockId: MockInterview.mockId });

// // // // // //       console.log("Inserted ID:", resp);
// // // // // //       if (resp) {
// // // // // //         setOpenDialog(false);
// // // // // //         router.push("/dashboard/interview/" + resp[0]?.mockId);
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error("Error during submission:", error);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <div
// // // // // //         className="p-10 rounded-lg border bg-secondary hover:scale-105 hover:shadow-sm transition-all cursor-pointer"
// // // // // //         onClick={() => setOpenDialog(true)}
// // // // // //       >
// // // // // //         <h2 className="text-lg text-center">+ Add New</h2>
// // // // // //       </div>
// // // // // //       <Dialog open={openDailog}>
// // // // // //         <DialogContent className="max-w-2xl">
// // // // // //           <DialogHeader>
// // // // // //             <DialogTitle className="text-2xl">Tell us about your interview</DialogTitle>
// // // // // //             <DialogDescription>
// // // // // //               <form onSubmit={onSubmit}>
// // // // // //                 <div className="my-3">
// // // // // //                   <h2>Enter job details</h2>
// // // // // //                   <div className="mt-7 my-3">
// // // // // //                     <label className="text-black">Job Role/Job Position</label>
// // // // // //                     <Input
// // // // // //                       className="mt-1"
// // // // // //                       placeholder="Ex. Full Stack Developer"
// // // // // //                       required
// // // // // //                       onChange={(e) => setJobPosition(e.target.value)}
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                   <div className="my-5">
// // // // // //                     <label className="text-black">Job Description/Tech Stack</label>
// // // // // //                     <Textarea
// // // // // //                       className="placeholder-opacity-50"
// // // // // //                       placeholder="Ex. React, Angular, Node.js, MySQL, NoSQL, Python"
// // // // // //                       required
// // // // // //                       onChange={(e) => setJobDesc(e.target.value)}
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                   <div className="my-5">
// // // // // //                     <label className="text-black">Years of Experience</label>
// // // // // //                     <Input
// // // // // //                       className="mt-1"
// // // // // //                       placeholder="Ex. 5"
// // // // // //                       max="50"
// // // // // //                       type="number"
// // // // // //                       required
// // // // // //                       onChange={(e) => setJobExperience(e.target.value)}
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                   <div className="my-5">
// // // // // //                     <label className="text-black">Upload Resume (PDF only)</label>
// // // // // //                     <Input type="file" accept="application/pdf" onChange={handleFileChange} />
// // // // // //                   </div>
// // // // // //                   {resumeText && (
// // // // // //                     <div className="my-5 p-3 bg-gray-100 rounded-md">
// // // // // //                       <h3 className="text-black font-semibold">Extracted Resume Text:</h3>
// // // // // //                       <p className="text-sm text-gray-600 overflow-auto max-h-40">
// // // // // //                         {resumeText}
// // // // // //                       </p>
// // // // // //                     </div>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //                 <div className="flex gap-5 justify-end">
// // // // // //                   <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>
// // // // // //                     Cancel
// // // // // //                   </Button>
// // // // // //                   <Button type="submit" disabled={loading}>
// // // // // //                     {loading ? (
// // // // // //                       <>
// // // // // //                         <LoaderCircle className="animate-spin" />
// // // // // //                         Generating From AI
// // // // // //                       </>
// // // // // //                     ) : (
// // // // // //                       "Start Interview"
// // // // // //                     )}
// // // // // //                   </Button>
// // // // // //                 </div>
// // // // // //               </form>
// // // // // //             </DialogDescription>
// // // // // //           </DialogHeader>
// // // // // //         </DialogContent>
// // // // // //       </Dialog>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default AddNewInterview;
// // // // // "use client";
// // // // // import React, { useState } from "react";
// // // // // import {
// // // // //   Dialog,
// // // // //   DialogContent,
// // // // //   DialogDescription,
// // // // //   DialogHeader,
// // // // //   DialogTitle,
// // // // // } from "@/components/ui/dialog";
// // // // // import { Input } from "@/components/ui/input";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Textarea } from "@/components/ui/textarea";
// // // // // import { chatSession } from "@/utils/GeminiAIModal";
// // // // // import { LoaderCircle } from "lucide-react";
// // // // // import { db } from "@/utils/db";
// // // // // import { MockInterview } from "@/utils/schema";
// // // // // import { v4 as uuidv4 } from "uuid";
// // // // // import { useUser } from "@clerk/nextjs";
// // // // // import moment from "moment";
// // // // // import { useRouter } from "next/navigation";

// // // // // const AddNewInterview = () => {
// // // // //   const [openDailog, setOpenDialog] = useState(false);
// // // // //   const [jobPosition, setJobPosition] = useState("");
// // // // //   const [jobDesc, setJobDesc] = useState("");
// // // // //   const [jobExperience, setJobExperience] = useState("");
// // // // //   const [resumeFile, setResumeFile] = useState(null);
// // // // //   const [resumeText, setResumeText] = useState("");
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [resumeLoading, setResumeLoading] = useState(false);
// // // // //   const { user } = useUser();
// // // // //   const router = useRouter();

// // // // //   // Handle file selection and send the PDF to the API for text extraction
// // // // //   const handleFileChange = async (e) => {
// // // // //     const file = e.target.files[0];
// // // // //     console.log("Uploaded file:", file);
// // // // //     if (file) {
// // // // //       setResumeFile(file);
// // // // //       if (file.type === "application/pdf") {
// // // // //         setResumeLoading(true);
// // // // //         setResumeText("");
// // // // //         const formData = new FormData();
// // // // //         formData.append("file", file); // Key must match the API expectation

// // // // //         try {
// // // // //           const response = await fetch("/api/uploadResume", {
// // // // //             method: "POST",
// // // // //             body: formData,
// // // // //           });
// // // // //           if (!response.ok) {
// // // // //             throw new Error("Failed to upload the file");
// // // // //           }
// // // // //           const data = await response.json();
// // // // //           console.log("Extracted text from API:", data.text);
// // // // //           setResumeText(data.text);
// // // // //         } catch (error) {
// // // // //           console.error("Error extracting resume text:", error);
// // // // //         } finally {
// // // // //           setResumeLoading(false);
// // // // //         }
// // // // //       } else {
// // // // //         alert("Please upload a PDF file.");
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   // Handler to submit the interview details (using the extracted resume text)
// // // // //   const onSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setLoading(true);

// // // // //     try {
// // // // //       const InputPrompt = `
// // // // //         Job Position: ${jobPosition}, 
// // // // //         Job Description: ${jobDesc}, 
// // // // //         Years of Experience: ${jobExperience}.
// // // // //         Resume Extracted Text: ${resumeText}.
// // // // //         Based on this information, provide 5 interview questions with answers in JSON format.
// // // // //       `;
// // // // //       console.log("Input Prompt:", InputPrompt);

// // // // //       const result = await chatSession.sendMessage(InputPrompt);
// // // // //       const responseText = result.response
// // // // //         .text()
// // // // //         .replace("```json", "")
// // // // //         .replace("```", "")
// // // // //         .trim();

// // // // //       const MockJsonResp = JSON.parse(responseText);
// // // // //       console.log("AI Response:", MockJsonResp);

// // // // //       // Save the interview data in the database
// // // // //       const resp = await db
// // // // //         .insert(MockInterview)
// // // // //         .values({
// // // // //           mockId: uuidv4(),
// // // // //           jsonMockResp: responseText,
// // // // //           jobPosition,
// // // // //           jobDesc,
// // // // //           jobExperience,
// // // // //           createdBy: user?.primaryEmailAddress?.emailAddress,
// // // // //           createdAt: moment().format("YYYY-MM-DD"),
// // // // //         })
// // // // //         .returning({ mockId: MockInterview.mockId });

// // // // //       console.log("Inserted ID:", resp);
// // // // //       if (resp) {
// // // // //         setOpenDialog(false);
// // // // //         router.push("/dashboard/interview/" + resp[0]?.mockId);
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error during submission:", error);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <div
// // // // //         className="p-10 rounded-lg border bg-secondary hover:scale-105 hover:shadow-sm transition-all cursor-pointer"
// // // // //         onClick={() => setOpenDialog(true)}
// // // // //       >
// // // // //         <h2 className="text-lg text-center">+ Add New</h2>
// // // // //       </div>
// // // // //       <Dialog open={openDailog}>
// // // // //         <DialogContent className="max-w-2xl">
// // // // //           <DialogHeader>
// // // // //             <DialogTitle className="text-2xl">Tell us about your interview</DialogTitle>
// // // // //             <DialogDescription>
// // // // //               <form onSubmit={onSubmit}>
// // // // //                 <div className="my-3">
// // // // //                   <h2>Enter job details</h2>
// // // // //                   <div className="mt-7 my-3">
// // // // //                     <label className="text-black">Job Role/Job Position</label>
// // // // //                     <Input
// // // // //                       className="mt-1"
// // // // //                       placeholder="Ex. Full Stack Developer"
// // // // //                       required
// // // // //                       onChange={(e) => setJobPosition(e.target.value)}
// // // // //                     />
// // // // //                   </div>
// // // // //                   <div className="my-5">
// // // // //                     <label className="text-black">Job Description/Tech Stack</label>
// // // // //                     <Textarea
// // // // //                       className="placeholder-opacity-50"
// // // // //                       placeholder="Ex. React, Angular, Node.js, MySQL, NoSQL, Python"
// // // // //                       required
// // // // //                       onChange={(e) => setJobDesc(e.target.value)}
// // // // //                     />
// // // // //                   </div>
// // // // //                   <div className="my-5">
// // // // //                     <label className="text-black">Years of Experience</label>
// // // // //                     <Input
// // // // //                       className="mt-1"
// // // // //                       placeholder="Ex. 5"
// // // // //                       max="50"
// // // // //                       type="number"
// // // // //                       required
// // // // //                       onChange={(e) => setJobExperience(e.target.value)}
// // // // //                     />
// // // // //                   </div>
// // // // //                   <div className="my-5">
// // // // //                     <label className="text-black">Upload Resume (PDF only)</label>
// // // // //                     <Input type="file" accept="application/pdf" onChange={handleFileChange} />
// // // // //                   </div>
// // // // //                   {resumeLoading && (
// // // // //                     <div className="my-5">
// // // // //                       <p className="text-blue-600">Extracting resume text...</p>
// // // // //                     </div>
// // // // //                   )}
// // // // //                   {resumeText && (
// // // // //                     <div className="my-5 p-3 bg-gray-100 rounded-md">
// // // // //                       <h3 className="text-black font-semibold">Extracted Resume Text:</h3>
// // // // //                       <p className="text-sm text-gray-600 overflow-auto max-h-40">
// // // // //                         {resumeText}
// // // // //                       </p>
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </div>
// // // // //                 <div className="flex gap-5 justify-end">
// // // // //                   <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>
// // // // //                     Cancel
// // // // //                   </Button>
// // // // //                   <Button type="submit" disabled={loading}>
// // // // //                     {loading ? (
// // // // //                       <>
// // // // //                         <LoaderCircle className="animate-spin" />
// // // // //                         Generating From AI
// // // // //                       </>
// // // // //                     ) : (
// // // // //                       "Start Interview"
// // // // //                     )}
// // // // //                   </Button>
// // // // //                 </div>
// // // // //               </form>
// // // // //             </DialogDescription>
// // // // //           </DialogHeader>
// // // // //         </DialogContent>
// // // // //       </Dialog>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AddNewInterview;





// // // "use client";
// // // import React, { useState } from "react";
// // // import {
// // //   Dialog,
// // //   DialogContent,
// // //   DialogDescription,
// // //   DialogHeader,
// // //   DialogTitle,
// // // } from "@/components/ui/dialog";
// // // import { Input } from "@/components/ui/input";
// // // import { Button } from "@/components/ui/button";
// // // import { Textarea } from "@/components/ui/textarea";
// // // import { chatSession } from "@/utils/GeminiAIModal";
// // // import { LoaderCircle } from "lucide-react";
// // // import { db } from "@/utils/db";
// // // import { MockInterview } from "@/utils/schema";
// // // import { v4 as uuidv4 } from "uuid";
// // // import { useUser } from "@clerk/nextjs";
// // // import moment from "moment";
// // // import { useRouter } from "next/navigation";

// // // const AddNewInterview = () => {
// // //   const [openDailog, setOpenDialog] = useState(false);
// // //   const [jobPosition, setJobPosition] = useState("");
// // //   const [jobDesc, setJobDesc] = useState("");
// // //   const [jobExperience, setJobExperience] = useState("");
// // //   const [resumeFile, setResumeFile] = useState(null);
// // //   const [resumeText, setResumeText] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const [resumeLoading, setResumeLoading] = useState(false);
// // //   const { user } = useUser();
// // //   const router = useRouter();

// // //   // Handle file selection and send the PDF to the API for text extraction
// // //   const handleFileChange = async (e) => {
// // //     const file = e.target.files[0];
// // //     console.log("Uploaded file:", file);
// // //     if (file) {
// // //       setResumeFile(file);
// // //       if (file.type === "application/pdf") {
// // //         setResumeLoading(true);
// // //         setResumeText("");
// // //         const formData = new FormData();
// // //         formData.append("file", file); // Key must match the API expectation

// // //         try {
// // //           const response = await fetch("/api/uploadResume", {
// // //             method: "POST",
// // //             body: formData,
// // //           });
// // //           if (!response.ok) {
// // //             throw new Error("Failed to upload the file");
// // //           }
// // //           const data = await response.json();
// // //           console.log("Extracted text from API:", data.text);
// // //           setResumeText(data.text);
// // //         } catch (error) {
// // //           console.error("Error extracting resume text:", error);
// // //         } finally {
// // //           setResumeLoading(false);
// // //         }
// // //       } else {
// // //         alert("Please upload a PDF file.");
// // //       }
// // //     }
// // //   };

// // //   // Handler to submit the interview details (using the extracted resume text)
// // //   const onSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);

// // //     try {
// // //       const InputPrompt = `
// // //         Job Position: ${jobPosition}, 
// // //         Job Description: ${jobDesc}, 
// // //         Years of Experience: ${jobExperience}.
// // //         Resume Extracted Text: ${resumeText}.
// // //         Based on this information, provide 5 interview questions with answers in JSON format.
// // //       `;
// // //       console.log("Input Prompt:", InputPrompt);

// // //       const result = await chatSession.sendMessage(InputPrompt);
// // //       const responseText = result.response
// // //         .text()
// // //         .replace("```json", "")
// // //         .replace("```", "")
// // //         .trim();

// // //       const MockJsonResp = JSON.parse(responseText);
// // //       console.log("AI Response:", MockJsonResp);

// // //       // Save the interview data in the database
// // //       const resp = await db
// // //         .insert(MockInterview)
// // //         .values({
// // //           mockId: uuidv4(),
// // //           jsonMockResp: responseText,
// // //           jobPosition,
// // //           jobDesc,
// // //           jobExperience,
// // //           createdBy: user?.primaryEmailAddress?.emailAddress,
// // //           createdAt: moment().format("YYYY-MM-DD"),
// // //         })
// // //         .returning({ mockId: MockInterview.mockId });

// // //       console.log("Inserted ID:", resp);
// // //       if (resp) {
// // //         setOpenDialog(false);
// // //         router.push("/dashboard/interview/" + resp[0]?.mockId);
// // //       }
// // //     } catch (error) {
// // //       console.error("Error during submission:", error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <div
// // //         className="p-10 rounded-lg border bg-secondary hover:scale-105 hover:shadow-sm transition-all cursor-pointer"
// // //         onClick={() => setOpenDialog(true)}
// // //       >
// // //         <h2 className="text-lg text-center">+ Add New</h2>
// // //       </div>
// // //       <Dialog open={openDailog}>
// // //         <DialogContent className="max-w-2xl">
// // //           <DialogHeader>
// // //             <DialogTitle className="text-2xl">Tell us about your interview</DialogTitle>
// // //             <DialogDescription>
// // //               <form onSubmit={onSubmit}>
// // //                 <div className="my-3">
// // //                   <h2>Enter job details</h2>
// // //                   <div className="mt-7 my-3">
// // //                     <label className="text-black">Job Role/Job Position</label>
// // //                     <Input
// // //                       className="mt-1"
// // //                       placeholder="Ex. Full Stack Developer"
// // //                       required
// // //                       onChange={(e) => setJobPosition(e.target.value)}
// // //                     />
// // //                   </div>
// // //                   <div className="my-5">
// // //                     <label className="text-black">Job Description/Tech Stack</label>
// // //                     <Textarea
// // //                       className="placeholder-opacity-50"
// // //                       placeholder="Ex. React, Angular, Node.js, MySQL, NoSQL, Python"
// // //                       required
// // //                       onChange={(e) => setJobDesc(e.target.value)}
// // //                     />
// // //                   </div>
// // //                   <div className="my-5">
// // //                     <label className="text-black">Years of Experience</label>
// // //                     <Input
// // //                       className="mt-1"
// // //                       placeholder="Ex. 5"
// // //                       max="50"
// // //                       type="number"
// // //                       required
// // //                       onChange={(e) => setJobExperience(e.target.value)}
// // //                     />
// // //                   </div>
// // //                   <div className="my-5">
// // //                     <label className="text-black">Upload Resume (PDF only)</label>
// // //                     <Input type="file" accept="application/pdf" onChange={handleFileChange} />
// // //                   </div>
// // //                   {resumeLoading && (
// // //                     <div className="my-5">
// // //                       <p className="text-blue-600">Extracting resume text...</p>
// // //                     </div>
// // //                   )}
// // //                   {resumeText && (
// // //                     <div className="my-5 p-3 bg-gray-100 rounded-md">
// // //                       <h3 className="text-black font-semibold">Extracted Resume Text:</h3>
// // //                       <p className="text-sm text-gray-600 overflow-auto max-h-40">
// // //                         {resumeText}
// // //                       </p>
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //                 <div className="flex gap-5 justify-end">
// // //                   <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>
// // //                     Cancel
// // //                   </Button>
// // //                   <Button type="submit" disabled={loading}>
// // //                     {loading ? (
// // //                       <>
// // //                         <LoaderCircle className="animate-spin" />
// // //                         Generating From AI
// // //                       </>
// // //                     ) : (
// // //                       "Start Interview"
// // //                     )}
// // //                   </Button>
// // //                 </div>
// // //               </form>
// // //             </DialogDescription>
// // //           </DialogHeader>
// // //         </DialogContent>
// // //       </Dialog>
// // //     </div>
// // //   );
// // // };

// // // export default AddNewInterview;






// // "use client";
// // import React, { useState } from "react";

// // import {
// //   Dialog,
// //   DialogClose,
// //   DialogContent,
// //   DialogDescription,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import { Textarea } from "@/components/ui/textarea";
// // import { chatSession } from "@/utils/GeminiAIModal";
// // import { LoaderCircle } from "lucide-react";
// // import { db } from "@/utils/db";
// // import { MockInterview } from "@/utils/schema";
// // import { v4 as uuidv4 } from "uuid";
// // import { useUser } from "@clerk/nextjs";
// // import moment from "moment";
// // import { useRouter } from "next/navigation";

// // const AddNewInterview = () => {
// //   const [openDailog, setOpenDialog] = useState(false);
// //   const [jobPosition, setJobPosition] = useState();
// //   const [jobDesc, setJobDesc] = useState();
// //   const [jobExperience, setJobExperience] = useState();
// //   const [loading, setLoading] = useState(false);
// //   const [jsonResponse, setJsonResponse] = useState([]);
// //   const { user } = useUser();
// //   const router = useRouter();

// //   const onSubmit = async (e) => {
// //     setLoading(true);
// //     e.preventDefault();
// //     console.log(jobPosition, jobDesc, jobExperience);

// //     const InputPrompt = `
// //   Job Positions: ${jobPosition}, 
// //   Job Description: ${jobDesc}, 
// //   Years of Experience: ${jobExperience}. 
// //   Based on this information, please provide 5 interview questions with answers in JSON format, ensuring "Question" and "Answer" are fields in the JSON.
// // `;

// //     const result = await chatSession.sendMessage(InputPrompt);
// //     const MockJsonResp = result.response
// //       .text()
// //       .replace("json", "")
// //       .replace("", "")
// //       .trim();
// //     console.log(JSON.parse(MockJsonResp));
// //     // const parsedResp = MockJsonResp
// //     setJsonResponse(MockJsonResp);

// //     if (MockJsonResp) {
// //       const resp = await db
// //         .insert(MockInterview)
// //         .values({
// //           mockId: uuidv4(),
// //           jsonMockResp: MockJsonResp,
// //           jobPosition: jobPosition,
// //           jobDesc: jobDesc,
// //           jobExperience: jobExperience,
// //           createdBy: user?.primaryEmailAddress?.emailAddress,
// //           createdAt: moment().format("YYYY-MM-DD"),
// //         })
// //         .returning({ mockId: MockInterview.mockId });
        
// //       console.log("Inserted ID:", resp);

// //       if (resp) {
// //         setOpenDialog(false);
// //         router.push("/dashboard/interview/" + resp[0]?.mockId);
// //       }
// //     } else {
// //       console.log("ERROR");
// //     }
// //     setLoading(false);
// //   };

// //   return (
// //     <div>
// //       <div
// //         className="p-10 rounded-lg border bg-secondary hover:scale-105 hover:shadow-sm transition-all cursor-pointer"
// //         onClick={() => setOpenDialog(true)}
// //       >
// //         <h2 className=" text-lg text-center">+ Add New</h2>
// //       </div>
// //       <Dialog open={openDailog}>
// //         <DialogContent className="max-w-2xl">
// //           <DialogHeader>
// //             <DialogTitle className="text-2xl">
// //               Tell us more about your job interviwing
// //             </DialogTitle>
// //             <DialogDescription>
// //               <form onSubmit={onSubmit}>
// //                 <div className="my-3">
// //                   <h2>
// //                     Add Details about your job position, job descritpion and
// //                     years of experience
// //                   </h2>

// //                   <div className="mt-7 my-3">
// //                     <label className="text-black">Job Role/job Position</label>
// //                     <Input
// //                       className="mt-1"
// //                       placeholder="Ex. Full stack Developer"
// //                       required
// //                       onChange={(e) => setJobPosition(e.target.value)}
// //                     />
// //                   </div>
// //                   <div className="my-5">
// //                     <label className="text-black">
// //                       Job Description/ Tech stack (In Short)
// //                     </label>
// //                     <Textarea
// //                       className="placeholder-opacity-50"
// //                       placeholder="Ex. React, Angular, Nodejs, Mysql, Nosql, Python"
// //                       required
// //                       onChange={(e) => setJobDesc(e.target.value)}
// //                     />
// //                   </div>
// //                   <div className="my-5">
// //                     <label className="text-black">Years of Experience</label>
// //                     <Input
// //                       className="mt-1"
// //                       placeholder="Ex. 5"
// //                       max="50"
// //                       type="number"
// //                       required
// //                       onChange={(e) => setJobExperience(e.target.value)}
// //                     />
// //                   </div>
// //                 </div>
// //                 <div className="flex gap-5 justify-end">
// //                   <Button
// //                     type="button"
// //                     variant="goast"
// //                     onClick={() => setOpenDialog(false)}
// //                   >
// //                     Cancel
// //                   </Button>
// //                   <Button type="submit" disabled={loading}>
// //                     {loading ? (
// //                       <>
// //                         <LoaderCircle className="animate-spin" />
// //                         Generating From AI
// //                       </>
// //                     ) : (
// //                       "Start Interview"
// //                     )}
// //                   </Button>
// //                 </div>
// //               </form>
// //             </DialogDescription>
// //           </DialogHeader>
// //         </DialogContent>
// //       </Dialog>
// //     </div>
// //   );
// // };

// // export default AddNewInterview;
// // "use client";
// // import React, { useState } from "react";

// // import {
// //   Dialog,
// //   DialogClose,
// //   DialogContent,
// //   DialogDescription,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import { Textarea } from "@/components/ui/textarea";
// // import { chatSession } from "@/utils/GeminiAIModal";
// // import { LoaderCircle } from "lucide-react";
// // import { db } from "@/utils/db";
// // import { MockInterview } from "@/utils/schema";
// // import { v4 as uuidv4 } from "uuid";
// // import { useUser } from "@clerk/nextjs";
// // import moment from "moment";
// // import { useRouter } from "next/navigation";

// // const AddNewInterview = () => {
// //   const [openDailog, setOpenDialog] = useState(false);
// //   const [jobPosition, setJobPosition] = useState();
// //   const [jobDesc, setJobDesc] = useState();
// //   const [jobExperience, setJobExperience] = useState();
// //   const [loading, setLoading] = useState(false);
// //   const [jsonResponse, setJsonResponse] = useState([]);
// //   const { user } = useUser();
// //   const router = useRouter();


// //   const onSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
  
// //     try {
// //       const InputPrompt = `
// //         Job Positions: ${jobPosition}, 
// //         Job Description: ${jobDesc}, 
// //         Years of Experience: ${jobExperience}. 
// //         Based on this information, please provide 5 interview questions with answers in JSON format, ensuring "Question" and "Answer" are fields in the JSON.
// //       `;
  
// //       const result = await chatSession.sendMessage(InputPrompt);
// //       const responseText = result.response
// //         .text()
// //         .replace("```json", "")
// //         .replace("```", "")
// //         .trim();
  
// //       const MockJsonResp = JSON.parse(responseText);
  
// //       console.log(MockJsonResp);
  
// //       // Proceed to insert into the database
// //       const resp = await db
// //         .insert(MockInterview)
// //         .values({
// //           mockId: uuidv4(),
// //           jsonMockResp: responseText,
// //           jobPosition: jobPosition,
// //           jobDesc: jobDesc,
// //           jobExperience: jobExperience,
// //           createdBy: user?.primaryEmailAddress?.emailAddress,
// //           createdAt: moment().format("YYYY-MM-DD"),
// //         })
// //         .returning({ mockId: MockInterview.mockId });
  
// //       console.log("Inserted ID:", resp);
  
// //       if (resp) {
// //         setOpenDialog(false);
// //         router.push("/dashboard/interview/" + resp[0]?.mockId);
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //       // Optionally, display an error message to the user
// //     } finally {
// //       setLoading(false);
// //     }
// //   };
  



// // STOPPPP






// //   const onSubmit = async (e) => {
// //     setLoading(true);
// //     e.preventDefault();
// //     console.log(jobPosition, jobDesc, jobExperience);

// //     const InputPrompt = `
// //   Job Positions: ${jobPosition}, 
// //   Job Description: ${jobDesc}, 
// //   Years of Experience: ${jobExperience}. 
// //   Based on this information, please provide 5 interview questions with answers in JSON format, ensuring "Question" and "Answer" are fields in the JSON.
// // `;

// //     const result = await chatSession.sendMessage(InputPrompt);
// //     const MockJsonResp = result.response
// //       .text()
// //       .replace("```json", "")
// //       .replace("```", "")
// //       .trim();
// //     console.log(JSON.parse(MockJsonResp));
// //     // const parsedResp = MockJsonResp
// //     setJsonResponse(MockJsonResp);

// //     if (MockJsonResp) {
// //       const resp = await db
// //         .insert(MockInterview)
// //         .values({
// //           mockId: uuidv4(),
// //           jsonMockResp: MockJsonResp,
// //           jobPosition: jobPosition,
// //           jobDesc: jobDesc,
// //           jobExperience: jobExperience,
// //           createdBy: user?.primaryEmailAddress?.emailAddress,
// //           createdAt: moment().format("YYYY-MM-DD"),
// //         })
// //         .returning({ mockId: MockInterview.mockId });
        
// //       console.log("Inserted ID:", resp);

// //       if (resp) {
// //         setOpenDialog(false);
// //         router.push("/dashboard/interview/" + resp[0]?.mockId);
// //       }
// //     } else {
// //       console.log("ERROR");
// //     }
// //     setLoading(false);
// //   };

// //   return (
// //     <div>
// //       <div
// //         className="p-10 rounded-lg border bg-secondary hover:scale-105 hover:shadow-sm transition-all cursor-pointer"
// //         onClick={() => setOpenDialog(true)}
// //       >
// //         <h2 className=" text-lg text-center">+ Add New</h2>
// //       </div>
// //       <Dialog open={openDailog}>
// //         <DialogContent className="max-w-2xl">
// //           <DialogHeader>
// //             <DialogTitle className="text-2xl">
// //               Tell us more about your job interviwing
// //             </DialogTitle>
// //             <DialogDescription>
// //               <form onSubmit={onSubmit}>
// //                 <div className="my-3">
// //                   <h2>
// //                     Add Details about your job position, job descritpion and
// //                     years of experience
// //                   </h2>

// //                   <div className="mt-7 my-3">
// //                     <label className="text-black">Job Role/job Position</label>
// //                     <Input
// //                       className="mt-1"
// //                       placeholder="Ex. Full stack Developer"
// //                       required
// //                       onChange={(e) => setJobPosition(e.target.value)}
// //                     />
// //                   </div>
// //                   <div className="my-5">
// //                     <label className="text-black">
// //                       Job Description/ Tech stack (In Short)
// //                     </label>
// //                     <Textarea
// //                       className="placeholder-opacity-50"
// //                       placeholder="Ex. React, Angular, Nodejs, Mysql, Nosql, Python"
// //                       required
// //                       onChange={(e) => setJobDesc(e.target.value)}
// //                     />
// //                   </div>
// //                   <div className="my-5">
// //                     <label className="text-black">Years of Experience</label>
// //                     <Input
// //                       className="mt-1"
// //                       placeholder="Ex. 5"
// //                       max="50"
// //                       type="number"
// //                       required
// //                       onChange={(e) => setJobExperience(e.target.value)}
// //                     />
// //                   </div>
// //                 </div>
// //                 <div className="flex gap-5 justify-end">
// //                   <Button
// //                     type="button"
// //                     variant="goast"
// //                     onClick={() => setOpenDialog(false)}
// //                   >
// //                     Cancel
// //                   </Button>
// //                   <Button type="submit" disabled={loading}>
// //                     {loading ? (
// //                       <>
// //                         <LoaderCircle className="animate-spin" />
// //                         Generating From AI
// //                       </>
// //                     ) : (
// //                       "Start Interview"
// //                     )}
// //                   </Button>
// //                 </div>
// //               </form>
// //             </DialogDescription>
// //           </DialogHeader>
// //         </DialogContent>
// //       </Dialog>
// //     </div>
// //   );
// // };

// // export default AddNewInterview;


// // "use client";
// // import React, { useState } from "react";

// // import {
// //   Dialog,
// //   DialogClose,
// //   DialogContent,
// //   DialogDescription,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import { Textarea } from "@/components/ui/textarea";
// // import { chatSession } from "@/utils/GeminiAIModal";
// // import { LoaderCircle } from "lucide-react";
// // import { db } from "@/utils/db";
// // import { MockInterview } from "@/utils/schema";
// // import { v4 as uuidv4 } from "uuid";
// // import { useUser } from "@clerk/nextjs";
// // import moment from "moment";
// // import { useRouter } from "next/navigation";

// // const AddNewInterview = () => {
// //   const [openDailog, setOpenDialog] = useState(false);
// //   const [jobPosition, setJobPosition] = useState();
// //   const [jobDesc, setJobDesc] = useState();
// //   const [jobExperience, setJobExperience] = useState();
// //   const [resumeFile, setResumeFile] = useState(null); // State to store the resume file
// //   const [loading, setLoading] = useState(false);
// //   const [jsonResponse, setJsonResponse] = useState([]);
// //   const { user } = useUser();
// //   const router = useRouter();

// //   const onSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
  
// //     try {
// //       const InputPrompt = `
// //         Job Positions: ${jobPosition}, 
// //         Job Description: ${jobDesc}, 
// //         Years of Experience: ${jobExperience}. 
// //         Based on this information, please provide 5 interview questions with answers in JSON format, ensuring "Question" and "Answer" are fields in the JSON.
// //       `;
  
// //       const result = await chatSession.sendMessage(InputPrompt);
// //       const responseText = result.response
// //         .text()
// //         .replace("```json", "")
// //         .replace("```", "")
// //         .trim();
  
// //       const MockJsonResp = JSON.parse(responseText);
  
// //       console.log(MockJsonResp);

// //       // Handle resume file upload if necessary (e.g., to Firebase or any storage)
// //       if (resumeFile) {
// //         console.log("Resume file selected:", resumeFile);
// //         // You can handle resume file upload here using an API or storage service.
// //       }
  
// //       // Proceed to insert into the database
// //       const resp = await db
// //         .insert(MockInterview)
// //         .values({
// //           mockId: uuidv4(),
// //           jsonMockResp: responseText,
// //           jobPosition: jobPosition,
// //           jobDesc: jobDesc,
// //           jobExperience: jobExperience,
// //           createdBy: user?.primaryEmailAddress?.emailAddress,
// //           createdAt: moment().format("YYYY-MM-DD"),
// //         })
// //         .returning({ mockId: MockInterview.mockId });
  
// //       console.log("Inserted ID:", resp);
  
// //       if (resp) {
// //         setOpenDialog(false);
// //         router.push("/dashboard/interview/" + resp[0]?.mockId);
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //       // Optionally, display an error message to the user
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleFileChange = (e) => {
// //     setResumeFile(e.target.files[0]);
// //   };

// //   return (
// //     <div>
// //       <div
// //         className="p-10 rounded-lg border bg-secondary hover:scale-105 hover:shadow-sm transition-all cursor-pointer"
// //         onClick={() => setOpenDialog(true)}
// //       >
// //         <h2 className=" text-lg text-center">+ Add New</h2>
// //       </div>
// //       <Dialog open={openDailog}>
// //         <DialogContent className="max-w-2xl">
// //           <DialogHeader>
// //             <DialogTitle className="text-2xl">
// //               Tell us more about your job interviewing
// //             </DialogTitle>
// //             <DialogDescription>
// //               <form onSubmit={onSubmit}>
// //                 <div className="my-3">
// //                   <h2>
// //                     Add Details about your job position, job description, and
// //                     years of experience
// //                   </h2>

// //                   <div className="mt-7 my-3">
// //                     <label className="text-black">Job Role/Job Position</label>
// //                     <Input
// //                       className="mt-1"
// //                       placeholder="Ex. Full stack Developer"
// //                       required
// //                       onChange={(e) => setJobPosition(e.target.value)}
// //                     />
// //                   </div>
// //                   <div className="my-5">
// //                     <label className="text-black">
// //                       Job Description/ Tech stack (In Short)
// //                     </label>
// //                     <Textarea
// //                       className="placeholder-opacity-50"
// //                       placeholder="Ex. React, Angular, Nodejs, Mysql, Nosql, Python"
// //                       required
// //                       onChange={(e) => setJobDesc(e.target.value)}
// //                     />
// //                   </div>
// //                   <div className="my-5">
// //                     <label className="text-black">Years of Experience</label>
// //                     <Input
// //                       className="mt-1"
// //                       placeholder="Ex. 5"
// //                       max="50"
// //                       type="number"
// //                       required
// //                       onChange={(e) => setJobExperience(e.target.value)}
// //                     />
// //                   </div>

// //                   {/* Resume Upload Section */}
// //                   <div className="my-5">
// //                     <label className="text-black">Upload Resume (Optional)</label>
// //                     <Input
// //                       className="mt-1"
// //                       type="file"
// //                       accept=".pdf,.doc,.docx"
// //                       onChange={handleFileChange}
// //                     />
// //                     {resumeFile && <p>Selected file: {resumeFile.name}</p>}
// //                   </div>
// //                 </div>
// //                 <div className="flex gap-5 justify-end">
// //                   <Button
// //                     type="button"
// //                     variant="goast"
// //                     onClick={() => setOpenDialog(false)}
// //                   >
// //                     Cancel
// //                   </Button>
// //                   <Button type="submit" disabled={loading}>
// //                     {loading ? (
// //                       <>
// //                         <LoaderCircle className="animate-spin" />
// //                         Generating From AI
// //                       </>
// //                     ) : (
// //                       "Start Interview"
// //                     )}
// //                   </Button>
// //                 </div>
// //               </form>
// //             </DialogDescription>
// //           </DialogHeader>
// //         </DialogContent>
// //       </Dialog>
// //     </div>
// //   );
// // };

// // export default AddNewInterview;




// // stop


// "use client";
// import React, { useState } from "react";

// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { chatSession } from "@/utils/GeminiAIModal";
// import { LoaderCircle } from "lucide-react";
// import { db } from "@/utils/db";
// import { MockInterview } from "@/utils/schema";
// import { v4 as uuidv4 } from "uuid";
// import { useUser } from "@clerk/nextjs";
// import moment from "moment";
// import { useRouter } from "next/navigation";

// const AddNewInterview = () => {
//   const [openDailog, setOpenDialog] = useState(false);
//   const [jobPosition, setJobPosition] = useState();
//   const [jobDesc, setJobDesc] = useState();
//   const [jobExperience, setJobExperience] = useState();
//   const [loading, setLoading] = useState(false);
//   const [jsonResponse, setJsonResponse] = useState([]);
//   const { user } = useUser();
//   const router = useRouter();

//   const onSubmit = async (e) => {
//     setLoading(true);
//     e.preventDefault();
//     console.log(jobPosition, jobDesc, jobExperience);

//     const InputPrompt = `
//   Job Positions: ${jobPosition}, 
//   Job Description: ${jobDesc}, 
//   Years of Experience: ${jobExperience}. 
//   Based on this information, please provide 5 interview questions with answers in JSON format, ensuring "Question" and "Answer" are fields in the JSON.
// `;

//     const result = await chatSession.sendMessage(InputPrompt);
//     const MockJsonResp = result.response
//       .text()
//       .replace("```json", "")
//       .replace("```", "")
//       .trim();
//     console.log(JSON.parse(MockJsonResp));
//     // const parsedResp = MockJsonResp
//     setJsonResponse(MockJsonResp);

//     if (MockJsonResp) {
//       const resp = await db
//         .insert(MockInterview)
//         .values({
//           mockId: uuidv4(),
//           jsonMockResp: MockJsonResp,
//           jobPosition: jobPosition,
//           jobDesc: jobDesc,
//           jobExperience: jobExperience,
//           createdBy: user?.primaryEmailAddress?.emailAddress,
//           createdAt: moment().format("YYYY-MM-DD"),
//         })
//         .returning({ mockId: MockInterview.mockId });
        
//       console.log("Inserted ID:", resp);

//       if (resp) {
//         setOpenDialog(false);
//         router.push("/dashboard/interview/" + resp[0]?.mockId);
//       }
//     } else {
//       console.log("ERROR");
//     }
//     setLoading(false);
//   };

//   return (
//     <div>
//       <div
//         className="p-10 rounded-lg border bg-secondary hover:scale-105 hover:shadow-sm transition-all cursor-pointer"
//         onClick={() => setOpenDialog(true)}
//       >
//         <h2 className=" text-lg text-center">+ Add New</h2>
//       </div>
//       <Dialog open={openDailog}>
//         <DialogContent className="max-w-2xl">
//           <DialogHeader>
//             <DialogTitle className="text-2xl">
//               Tell us more about your job interviwing
//             </DialogTitle>
//             <DialogDescription>
//               <form onSubmit={onSubmit}>
//                 <div className="my-3">
//                   <h2>
//                     Add Details about your job position, job descritpion and
//                     years of experience
//                   </h2>

//                   <div className="mt-7 my-3">
//                     <label className="text-black">Job Role/job Position</label>
//                     <Input
//                       className="mt-1"
//                       placeholder="Ex. Full stack Developer"
//                       required
//                       onChange={(e) => setJobPosition(e.target.value)}
//                     />
//                   </div>
//                   <div className="my-5">
//                     <label className="text-black">
//                       Job Description/ Tech stack (In Short)
//                     </label>
//                     <Textarea
//                       className="placeholder-opacity-50"
//                       placeholder="Ex. React, Angular, Nodejs, Mysql, Nosql, Python"
//                       required
//                       onChange={(e) => setJobDesc(e.target.value)}
//                     />
//                   </div>
//                   <div className="my-5">
//                     <label className="text-black">Years of Experience</label>
//                     <Input
//                       className="mt-1"
//                       placeholder="Ex. 5"
//                       max="50"
//                       type="number"
//                       required
//                       onChange={(e) => setJobExperience(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="flex gap-5 justify-end">
//                   <Button
//                     type="button"
//                     variant="goast"
//                     onClick={() => setOpenDialog(false)}
//                   >
//                     Cancel
//                   </Button>
//                   <Button type="submit" disabled={loading}>
//                     {loading ? (
//                       <>
//                         <LoaderCircle className="animate-spin" />
//                         Generating From AI
//                       </>
//                     ) : (
//                       "Start Interview"
//                     )}
//                   </Button>
//                 </div>
//               </form>
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default AddNewInterview;
"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";

const engineeringJobRoles = [
  "Software Developer",
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Java Developer",
  "Python Developer",
  "DevOps Engineer",
  "Data Engineer",
  "Machine Learning Engineer",
  "AI Engineer",
  "Cloud Engineer",
  "Systems Engineer",
  "Embedded Systems Engineer",
  "Network Engineer",
  "Security Engineer",
  "QA Engineer",
  "Mobile Developer (Android/iOS)",
  "Game Developer",
  "Computer Vision Engineer",
  "NLP Engineer",
  "Blockchain Developer",
  "Electrical Engineer",
  "Mechanical Engineer",
  "Civil Engineer",
  "Chemical Engineer",
  "Biomedical Engineer",
  "Aerospace Engineer",
  "Graduate Engineer Trainee",
  "Other (Please Specify)"
];

const AddNewInterview = () => {
  const [openDailog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [customJobPosition, setCustomJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const { user } = useUser();
  const router = useRouter();

  const handleJobPositionChange = (e) => {
    const value = e.target.value;
    setJobPosition(value);
    if (value !== "Other (Please Specify)") {
      setCustomJobPosition("");
    }
  };

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    
    // Use custom job position if "Other" was selected
    const finalJobPosition = jobPosition === "Other (Please Specify)" 
      ? customJobPosition 
      : jobPosition;

    console.log(finalJobPosition, jobDesc, jobExperience);

    const InputPrompt = `
  Job Positions: ${finalJobPosition}, 
  Job Description: ${jobDesc}, 
  Years of Experience: ${jobExperience}. 
  Based on this information, please provide 5 interview questions with answers in JSON format, ensuring "Question" and "Answer" are fields in the JSON.
`;

    const result = await chatSession.sendMessage(InputPrompt);
    const MockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "")
      .trim();
    console.log(JSON.parse(MockJsonResp));
    setJsonResponse(MockJsonResp);

    if (MockJsonResp) {
      const resp = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
          jobPosition: finalJobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("YYYY-MM-DD"),
        })
        .returning({ mockId: MockInterview.mockId });
        
      console.log("Inserted ID:", resp);

      if (resp) {
        setOpenDialog(false);
        router.push("/dashboard/interview/" + resp[0]?.mockId);
      }
    } else {
      console.log("ERROR");
    }
    setLoading(false);
  };

  return (
    <div>
      <div
        className="p-10 rounded-lg border bg-secondary hover:scale-105 hover:shadow-sm transition-all cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className=" text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDailog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job interviewing
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div className="my-3">
                  <h2>
                    Add Details about your job position, job description and
                    years of experience
                  </h2>

                  <div className="mt-7 my-3">
                    <label className="text-black">Job Role/Position</label>
                    <select
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={jobPosition}
                      onChange={handleJobPositionChange}
                      required
                    >
                      <option value="">Select a job role</option>
                      {engineeringJobRoles.map((role, index) => (
                        <option key={index} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                    {jobPosition === "Other (Please Specify)" && (
                      <Input
                        className="mt-2"
                        placeholder="Enter your job role"
                        value={customJobPosition}
                        onChange={(e) => setCustomJobPosition(e.target.value)}
                        required
                      />
                    )}
                  </div>
                  <div className="my-5">
                    <label className="text-black">
                      Job Description/Tech stack (In Short)
                    </label>
                    <Textarea
                      className="placeholder-opacity-50"
                      placeholder="Ex. React, Angular, Nodejs, Mysql, Nosql, Python"
                      required
                      onChange={(e) => setJobDesc(e.target.value)}
                    />
                  </div>
                  <div className="my-5">
                    <label className="text-black">Years of Experience</label>
                    <Input
                      className="mt-1"
                      placeholder="Ex. 5"
                      max="50"
                      type="number"
                      required
                      onChange={(e) => setJobExperience(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <Button
                    type="button"
                    variant="goast"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" />
                        Generating From AI
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;
