"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Utilities() {
  const textTARGET_TEXT = "PRODUCTS IN DEVELOPMENTS";
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
      <motion.section className="pt-16 text-gray-900 px-4" id="utilities">
        <div className="mt-16 ">
          <motion.h1
            onViewportEnter={textScramble}
            onViewportLeave={stopTextScramble}
            className="text-3xl pb-8 md:text-5xl text-[#ff6f00] font-bold mb-4"
          >
            {textH1}
          </motion.h1>

          {/*Phoenix Bot */}
          <div className="bg-[white] p-8  rounded-[20px] mb-4">
            <h1 className="font-bold text-xl pb-4">Phoenix Bot</h1>
            <p className="text-sm pb-4">
              Phoenix Bot stands as a robust and essential tool for anyone
              involved in the blockchain space. By leveraging advanced AI
              technologies, it ensures that the blockchain ecosystem remains
              secure, transparent, and reliable. Whether you are an investor,
              developer, or enthusiast, Phoenix Bot is your go-to guardian for
              navigating the complexities of the blockchain world with
              confidence.
            </p>
            <button className="bg-gray-900 p-2 text-white rounded-[12.5px]">
              Coming Soon
            </button>
          </div>

          {/*Phoenix Bot */}
          <div className="bg-gray-100 p-8  rounded-[20px] mb-4">
            <h1 className="font-bold text-xl pb-4">Phoenix DEX</h1>
            <p className="text-sm pb-4">
              Phoenix DEX is revolutionizing the decentralized exchange
              landscape by integrating advanced AI technologies and cross-chain
              capabilities. Experience faster, more secure, and highly flexible
              trading with Phoenix DEX. Whether you are an experienced trader or
              just starting, Phoenix DEX offers the tools and features you need
              to succeed in the world of decentralized finance.
            </p>
            <button className="bg-gray-900 text-white p-2 rounded-[12.5px]">
              Coming Soon
            </button>
          </div>

          {/*Phoenix Bot */}
          <div className="bg-gray-200 p-8  rounded-[20px]">
            <h1 className="font-bold text-xl pb-4">Phoenix Foundation</h1>
            <p className="pb-4 text-sm">
              At Phoenix Foundation, our mission is to empower individuals by
              providing them with the resources, opportunities, and support they
              need to thrive. We are committed to making meaningful charity
              donations to organizations that create positive change in
              communities worldwide. By focusing on empowerment and
              philanthropy, we aim to build a brighter, more equitable future
              for all.
            </p>
            <button className="bg-gray-900 text-white p-2 rounded-[12.5px]">
              Coming Soon
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
