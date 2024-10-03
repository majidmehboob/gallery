"use client"
import React from "react";
import { motion } from "framer-motion";

const BackGroundMain = () => {
  const shapes = [
    // Add more shape morphing paths
    {
      initialPath:
        "M29.1,3C29.1,32.9,14.6,65.9,-6.9,65.9C-28.4,65.9,-56.9,32.9,-56.9,3C-56.9,-26.9,-28.4,-53.9,-6.9,-53.9C14.6,-53.9,29.1,-26.9,29.1,3Z",
      morphedPaths: [
        "M29.1,-10C29.1,40,0,70,-20,60C-40,50,-55,35,-55,5C-55,-25,-40,-55,-20,-45C0,-35,29.1,-30,29.1,-10Z",
        "M10,0C25,15,40,50,20,60C-10,70,-35,50,-50,30C-65,10,-75,-10,-60,-30C-45,-50,-25,-65,0,-55C25,-45,10,0Z",
      ],
    },
    {
      initialPath:
        "M64.8,-19.6C73.4,5.6,62.7,38.6,39.6,55.7C16.5,72.8,-19,74,-40.4,57.9C-61.7,41.8,-68.9,8.6,-59.8,-17.3C-50.7,-43.2,-25.3,-61.6,1.4,-62.1C28,-62.5,56.1,-44.9,64.8,-19.6Z",
      morphedPaths: [
        "M50,-20C60,15,45,50,20,60C-5,70,-30,60,-50,40C-70,20,-75,-10,-60,-30C-45,-50,-20,-65,10,-55C40,-45,50,-20Z",
        "M30,-10C40,20,20,50,10,60C-10,70,-30,50,-40,30C-50,10,-60,-20,-50,-40C-40,-60,-20,-65,0,-55C20,-45,30,-10Z",
      ],
    },
    {
      initialPath:
        "M40,-30C50,-15,30,30,10,45C-10,60,-35,45,-50,25C-65,5,-75,-20,-65,-40C-55,-60,-30,-65,-10,-55C10,-45,30,-60,40,-30Z",
      morphedPaths: [
        "M50,-20C70,15,40,45,15,55C-5,65,-35,60,-50,40C-70,20,-80,-10,-65,-35C-50,-60,-25,-65,5,-55C35,-45,50,-20Z",
        "M30,-15C45,25,25,60,5,65C-15,70,-40,55,-55,30C-70,5,-70,-20,-55,-45C-40,-70,-15,-80,10,-65C35,-50,30,-15Z",
      ],
    },
    {
      initialPath:
        "M20,-20C40,-10,50,20,30,40C10,60,-20,50,-40,30C-60,10,-70,-20,-55,-40C-40,-60,-10,-70,20,-50C50,-30,20,-20Z",
      morphedPaths: [
        "M25,-25C50,10,45,45,20,55C-5,65,-35,55,-50,35C-65,15,-70,-10,-55,-35C-40,-60,-10,-65,15,-50C40,-35,25,-25Z",
        "M15,-10C30,20,20,55,0,60C-20,65,-40,50,-50,25C-60,0,-65,-25,-50,-50C-35,-75,-15,-80,10,-60C35,-40,15,-10Z",
      ],
    },
  ];

  return (
    <div className="bg-black w-screen h-screen overflow-hidden relative flex justify-center items-center">
      {shapes.map((shape, index) => (
        <motion.svg
          key={index}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          initial={{
            x: (Math.random() * window.innerWidth) / 2 - window.innerWidth / 4, // Random starting x position
            y:
              (Math.random() * window.innerHeight) / 2 - window.innerHeight / 4, // Random starting y position
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, Math.random() * -200 + 100, 0], // Move gradually
            y: [0, Math.random() * -200 + 100, Math.random() * 200 - 100, 0], // Move gradually
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          width="25vw"
          height="25vh"
        >
          <motion.path
            fill="black"
            stroke="#84CC16"
            strokeWidth={2}
            d={shape.initialPath}
            animate={{
              d: shape.morphedPaths, // Path changes for contraction/relaxation effect
            }}
            transition={{
              duration: 4, // Faster shape morphing
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </motion.svg>
      ))}
    </div>
  );
};

export default BackGroundMain;
