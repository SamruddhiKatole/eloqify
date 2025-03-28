// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { UserButton } from "@clerk/nextjs";
// import { usePathname } from "next/navigation";
// import { ModeToggle } from "@/components/ModeToggle";
// import Link from "next/link";
// const Header = ({ logo }) => {
//   const [isUserButtonLoaded, setUserButtonLoaded] = useState(false);
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleMenu = ()=>{
//     setIsOpen(!isOpen)
//   }

//   const SkeletonLoader = () => (
//     <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
//   );

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setUserButtonLoaded(true);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   const path = usePathname();

//   useEffect(() => {
//     console.log(path);
//   }, []);
//   return (
//     <div className=" bg-secondary shadow-sm ">
//       <div className="w-[80%] m-auto flex gap-4 items-center justify-between">
//         <Link className="hidden md:block"  href="/dashboard">
//           <Image src={logo} width={80} height={80} alt="logo" />
//         </Link>
//         <ul className="hidden md:flex gap-6">
//           <Link href="/dashboard">
//             <li
//               className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
//                 path == "/dashboard" && "text-black font-bold"
//               }`}
//             >
//               Dashboard
//             </li>
//           </Link>
//           <Link href="/dashboard/question">
//           <li
//             className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
//               path == "/dashboard/question" && "text-black font-bold"
//             }`}
//           >
//             Questions
//           </li>
//           </Link>
          
//           <Link href="/dashboard/upgrade">
//             <li
//               className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
//                 path == "/dashboard/upgrade" && "text-black font-bold"
//               }`}
//             >
//               Upgrade
//             </li>
//           </Link>

//           <Link href="/dashboard/howit">
//             <li
//               className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
//                 path == "/dashboard/howit" && "text-black font-bold"
//               }`}
//             >
//               How it works?
//             </li>
//           </Link>
//         </ul>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//             <span className="sr-only">Open main menu</span>
//             {isOpen ? (
//               <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             )}
//           </button>
//         </div>
//         <div className="flex gap-10" >
//           <ModeToggle  />
//           {isUserButtonLoaded ? <UserButton /> : <SkeletonLoader />}
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-5">
//           <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3" >
//           <Link href="/dashboard">
//             <li
//               className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
//                 path == "/dashboard" && "text-black font-bold"
//               }`}
//             >
//               Dashboard
//             </li>
//           </Link>
//           <Link href="/dashboard/question">
//           <li
//             className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
//               path == "/dashboard/question" && "text-black font-bold"
//             }`}
//           >
//             Questions
//           </li>
//           </Link>
//           <Link href="/dashboard/upgrade">
//             <li
//               className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
//                 path == "/dashboard/upgrade" && "text-black font-bold"
//               }`}
//             >
//               Upgrade
//             </li>
//           </Link>
//           <Link href="/dashboard/howit">
//             <li
//               className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
//                 path == "/dashboard/howit" && "text-black font-bold"
//               }`}
//             >
//               How it works?
//             </li>
//           </Link>
//           </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;
// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { UserButton } from "@clerk/nextjs";
// import { usePathname } from "next/navigation";
// import { ModeToggle } from "@/components/ModeToggle";
// import Link from "next/link";
// const Header = ({ logo }) => {
//   const [isUserButtonLoaded, setUserButtonLoaded] = useState(false);
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleMenu = ()=>{
//     setIsOpen(!isOpen)
//   }

//   const SkeletonLoader = () => (
//     <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
//   );

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setUserButtonLoaded(true);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   const path = usePathname();

//   useEffect(() => {
//     console.log(path);
//   }, []);
//   return (
//     <div className=" bg-secondary shadow-sm ">
//       <div className="w-[80%] m-auto flex gap-4 items-center justify-between">
//         <Link className="hidden md:block"  href="/dashboard">
//           <Image src={logo} width={80} height={80} alt="logo" />
//         </Link>
//         <ul className="hidden md:flex gap-6">
//           <Link href="/dashboard">
//             <li
//               className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
//                 path == "/dashboard" && "text-black font-bold"
//               }`}
//             >
//               Dashboard
//             </li>
//           </Link>
//           <Link href="/dashboard/question">
//           <li
//             className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
//               path == "/dashboard/question" && "text-black font-bold"
//             }`}
//           >
//             Questions
//           </li>
//           </Link>
          
//           <Link href="/dashboard/upgrade">
//             <li
//               className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
//                 path == "/dashboard/upgrade" && "text-black font-bold"
//               }`}
//             >
//               Upgrade
//             </li>
//           </Link>

//           <Link href="/dashboard/howit">
//             <li
//               className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
//                 path == "/dashboard/howit" && "text-black font-bold"
//               }`}
//             >
//               How it works?
//             </li>
//           </Link>
//         </ul>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//             <span className="sr-only">Open main menu</span>
//             {isOpen ? (
//               <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             )}
//           </button>
//         </div>
//         <div className="flex gap-10" >
//           <ModeToggle  />
//           {isUserButtonLoaded ? <UserButton /> : <SkeletonLoader />}
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-5">
//           <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3" >
//           <Link href="/dashboard">
//             <li
//               className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
//                 path == "/dashboard" && "text-black font-bold"
//               }`}
//             >
//               Dashboard
//             </li>
//           </Link>
//           <Link href="/dashboard/question">
//           <li
//             className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
//               path == "/dashboard/question" && "text-black font-bold"
//             }`}
//           >
//             Questions
//           </li>
//           </Link>
//           <Link href="/dashboard/upgrade">
//             <li
//               className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
//                 path == "/dashboard/upgrade" && "text-black font-bold"
//               }`}
//             >
//               Upgrade
//             </li>
//           </Link>
//           <Link href="/dashboard/howit">
//             <li
//               className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
//                 path == "/dashboard/howit" && "text-black font-bold"
//               }`}
//             >
//               How it works?
//             </li>
//           </Link>
//           </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = ({ logo }) => {
  const [isUserButtonLoaded, setUserButtonLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const SkeletonLoader = () => (
    <div className="w-8 h-8 bg-gray-700 rounded-full animate-pulse"></div>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setUserButtonLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const path = usePathname();

  return (
    <div className="bg-black shadow-lg sticky top-0 z-50">
      <div className="w-[80%] m-auto flex items-center justify-between py-3">
        {/* Left-aligned Logo and Brand Name */}
        <Link href="/dashboard" className="flex items-center gap-3 group">
          {/* <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image 
              src={logo} 
              width={45} 
              height={45} 
              alt="logo" 
              className="transition-all duration-300"
            />
          </motion.div> */}
          
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Eloqify
            </span>
            <span className="text-xs text-gray-400">AI Interview Coach</span>
          </motion.div>
        </Link>

        {/* Center Navigation (Desktop only) - Reduced font size */}
        <ul className="hidden md:flex gap-1 absolute left-1/2 transform -translate-x-1/2">
          {[
            { path: "/dashboard", name: "Dashboard" },
            { path: "/dashboard/question", name: "Questions" },
            { path: "/dashboard/upgrade", name: "Upgrade" },
            { path: "/dashboard/howit", name: "How it works?" }
          ].map((item) => (
            <Link key={item.path} href={item.path}>
              <motion.li 
                whileHover={{ scale: 1.05 }}
                className="relative px-4 py-2" // Reduced padding slightly
              >
                <span className={`relative z-10 text-base font-medium transition-colors duration-500 ${
                  path === item.path ? "text-white font-semibold" : "text-gray-400 hover:text-white"
                }`}>
                  {item.name}
                </span>
                {path === item.path && (
                  <motion.span 
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-4 right-4 h-1 bg-white rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </motion.li>
            </Link>
          ))}
        </ul>

        {/* Right-aligned Controls */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <motion.button 
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            className="md:hidden relative p-2 rounded-full group focus:outline-none"
          >
            <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            {isOpen ? (
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>

          {/* Theme Toggle and User Button */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <ModeToggle />
            <span className="absolute -inset-1 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </motion.div>
          
          {isUserButtonLoaded ? (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <UserButton appearance={{
                elements: {
                  userButtonAvatarBox: "w-8 h-8",
                  userButtonOuterIdentifier: "text-white text-sm"
                }
              }} />
            </motion.div>
          ) : (
            <SkeletonLoader />
          )}
        </div>
      </div>

      {/* Mobile Menu - Also reduced font size */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900 overflow-hidden"
        >
          <div className="px-5 py-3">
            <ul className="space-y-2"> {/* Reduced spacing */}
              {[
                { path: "/dashboard", name: "Dashboard" },
                { path: "/dashboard/question", name: "Questions" },
                { path: "/dashboard/upgrade", name: "Upgrade" },
                { path: "/dashboard/howit", name: "How it works?" }
              ].map((item) => (
                <Link key={item.path} href={item.path}>
                  <motion.li
                    whileHover={{ x: 5 }}
                    className={`px-4 py-2 rounded-lg text-base transition-colors duration-500 ${
                      path === item.path ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-800"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    {path === item.path && (
                      <motion.div 
                        className="h-0.5 bg-white mt-1 w-full" // Reduced margin-top
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.li>
                </Link>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;

















