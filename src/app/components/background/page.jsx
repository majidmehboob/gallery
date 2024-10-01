"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Background = () => {
  const [grid, setGrid] = useState([]);
  const [numBoxes, setNumBoxes] = useState(0);

  // Function to calculate the number of boxes based on screen size
  const calculateNumBoxes = () => {
    const boxSize = 40; // Adjust this value as needed (box size + gap)
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const numCols = Math.floor(screenWidth / boxSize);
    const numRows = Math.floor(screenHeight / boxSize);
    setNumBoxes(numCols * numRows);
  };

  // Function to generate random indices for boxes to show
  const generateRandomIndices = () => {
    let randomIndices = [];
    for (let i = 0; i < Math.floor(Math.random() * (100 - 20 - 1) + 20); i++) {
      randomIndices.push(Math.floor(Math.random() * numBoxes)); // Dynamic number of boxes
    }
    return randomIndices;
  };

  // Animation reset function
  const resetAnimation = () => {
    setTimeout(() => {
      setGrid((previous) => [...previous, ...generateRandomIndices()]);
    }, 500); // Delay before starting the new animation cycle
  };

  useEffect(() => {
    // Calculate number of boxes on initial load and resize
    calculateNumBoxes();
    window.addEventListener("resize", calculateNumBoxes);

    // Start the initial animation
    setGrid(generateRandomIndices());

    // Set interval to reset the animation every 60 seconds
    const interval = setInterval(() => {
      resetAnimation();
    }, 3000); // 60 seconds

    return () => {
      window.removeEventListener("resize", calculateNumBoxes);
      clearInterval(interval); // Clean up interval on unmount
    };
  }, [numBoxes]);

  return (
    <motion.div
      className="absolute inset-0 grid gap-2"
      style={{
        gridTemplateColumns: `repeat(auto-fill, minmax(40px, 1fr))`,
        gridTemplateRows: `repeat(auto-fill, minmax(40px, 1fr))`,
      }}
      initial="hidden"
      animate="show"
      variants={{
        show: {
          transition: {
            staggerChildren: 0.05, // Stagger animation for each box
          },
        },
      }}
    >
      {[...Array(numBoxes)].map((item, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: grid.includes(index) ? 1 : 1,
            rotate: grid.includes(index) ? 45 : 0,
          }}
          transition={{ duration: 1 }}
          className={`${
            grid.includes(index) ? "border-lime-600" : "border-slate-500"
          } border rounded-md h-8 w-8`}
        ></motion.div>
      ))}
    </motion.div>
  );
};

export default Background;
