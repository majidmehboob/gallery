"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Login from "./components/(auth)/signIn/page";
import Background from "./components/background/page";
import SignUp from "./components/(auth)/signUp/page";

const Page = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeForm, setActiveForm] = useState(null); // Track the active form (null, "login", or "signup")

  // Animation variants for menu
  const menuVariants = {
    hidden: { scaleX: 0.1, opacity: 0 }, // Initially narrow and invisible
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
    exit: { scaleX: 0.1, opacity: 0, transition: { duration: 0.3 } }, // Animate exit back to folded
  };

  // Animation variants for the title text
  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="overflow-hidden relative bg-[#1A1A1A] min-h-screen w-full flex md:flex-row flex-col-reverse gap-4  justify-center items-center">
      <div className="absolute top-5 right-20 cursor-pointer">
        <Image
          className="relative z-10"
          src="/avatar.png"
          alt="avatar"
          width={50}
          height={200}
          onClick={() => setShowMenu((prev) => !prev)}
        />
        <AnimatePresence>
          {showMenu && (
            <motion.div
              key="menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="z-10 absolute top-20 -right-[30%] bg-neutral-300 py-4 origin-top"
            >
              <h1
                onClick={() => {
                  setActiveForm("login");
                  setShowMenu(false);
                }}
                className="text-stone-900 border-b border-stone-900 pb-1 text-md text-left px-2 min-w-48 cursor-pointer"
              >
                Login
              </h1>
              <h1
                onClick={() => {
                  setActiveForm("signup");
                  setShowMenu(false);
                }}
                className="text-stone-900 py-2 text-md text-left px-2 min-w-48 cursor-pointer"
              >
                Sign Up
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Wrap Login and SignUp with AnimatePresence for exit animations */}
      <AnimatePresence>
        {activeForm === "login" && <Login />}
        {activeForm === "signup" && <SignUp />}
      </AnimatePresence>

      {/* Title Animation */}
      <motion.h1
        className="z-10 md:text-7xl text-4xl font-bold text-stone-400"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        transition={{ duration: 0.5 }}
      >
        Gallery Storage App
      </motion.h1>

      {/* Grid of boxes with staggered animations */}
      <Background />
    </div>
  );
};

export default Page;
