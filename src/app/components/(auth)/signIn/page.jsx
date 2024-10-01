"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });

  // Animation variants for staggered items
  const staggerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Start hidden and below
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }, // Animate to visible position
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="z-10 bg-black/50 w-96 py-10 rounded-xl"
    >
      <motion.h1 className="text-stone-400 text-5xl text-center py-4">
        Login
      </motion.h1>

      <motion.div variants={staggerVariants} initial="hidden" animate="show">
        <motion.p
          variants={itemVariants}
          className="text-stone-400 text-xl py-1 px-3"
        >
          Email
        </motion.p>
        <motion.input
          type="text"
          className="mx-4 my-2 py-1.5 px-2 rounded-full w-[90%] z-20"
          onChange={(e) => {
            setlogindata({ ...logindata, email: e.target.value });
          }}
          variants={itemVariants} // Add the animation variant
        />

        <motion.p
          variants={itemVariants}
          className="text-stone-400 text-xl py-1 px-3"
        >
          Password
        </motion.p>
        <motion.input
          type="password"
          className="mx-4 my-2 px-2 py-1.5 rounded-full w-[90%] z-20"
          onChange={(e) => {
            setlogindata({ ...logindata, password: e.target.value });
          }}
          variants={itemVariants} // Add the animation variant
        />

        <motion.button
          variants={itemVariants} // Add the animation variant
          className="bg-lime-900 my-2 text-center w-[90%] mx-3 rounded-full py-1.5 text-xl text-stone-400"
        >
          Login
        </motion.button>
      </motion.div>

      <h1>{logindata.email}</h1>
    </motion.div>
  );
};

export default Login;
