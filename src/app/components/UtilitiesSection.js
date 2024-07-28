"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Utilities() {

  const textTARGET_TEXT = "UTILITIES IN DEVELOPMENTS";
  const textCYCLES_PER_LETTER = 2;
  const textSHUFFLE_TIME = 50;

  const textCHARS = "!@#$%^&*():{};|,.<>/?";

  const textIntervalRef = useRef(null);

  const [textH1, setTextH1] = useState(textTARGET_TEXT);

  const textScramble = () => {
    let posTEXT = 0;

    textIntervalRef.current = setInterval(() => {
      const textScrambled = textTARGET_TEXT
        .split("")
        .map((char, index) => {
          if (posTEXT / textCYCLES_PER_LETTER > index) {
            return char;
          }

          const textRandomCharIndex = Math.floor(
            Math.random() * textCHARS.length
          );
          const textRandomChar = textCHARS[textRandomCharIndex];

          return textRandomChar;
        })
        .join("");

      setTextH1(textScrambled);
      posTEXT++;

      if (posTEXT >= textTARGET_TEXT.length * textCYCLES_PER_LETTER) {
        stopTextScramble();
      }
    }, textSHUFFLE_TIME);
  };

  const stopTextScramble = () => {
    clearInterval(textIntervalRef.current || undefined);

    setTextH1(textTARGET_TEXT);
  };

  return (
    <div>
      {/*Utilities section */}
      <motion.section className="px-4">
        <div className="mt-16 ">
          <motion.h1
          onViewportEnter={textScramble} 
          onViewportLeave={stopTextScramble}
          className="text-3xl md:text-5xl text-[#ff6f00] font-bold mb-4">{textH1}</motion.h1>

          {/*Phoenix Bot */}
          <div className="bg-[#FF6B00] p-8  rounded-[20px] mb-4">
            <h1 className="font-bold text-xl pb-4">Phoenix Bot</h1>
            <p className="text-sm pb-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <button className="bg-[red] p-2 rounded-[12.5px]">
              Learn More
            </button>
          </div>

          {/*Phoenix Bot */}
          <div className="bg-[#FF6B00] p-8  rounded-[20px] mb-4">
            <h1 className="font-bold text-xl pb-4">Phoenix DEX</h1>
            <p className="text-sm pb-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <button className="bg-[red] p-2 rounded-[12.5px]">
              Learn More
            </button>
          </div>

          {/*Phoenix Bot */}
          <div className="bg-[#FF6B00] p-8  rounded-[20px]">
            <h1 className="font-bold text-xl pb-4">Phoenix Foundation</h1>
            <p className="pb-4 text-sm">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <button className="bg-[red] p-2 rounded-[12.5px]">
              Learn More
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
