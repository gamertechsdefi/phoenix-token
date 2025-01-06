"use client";

import { motion } from "framer-motion";
import { inView } from "motion";
import {useRef, useState} from "react";

import CopyToClipboard from "./ClipBoard";


const sectionVariants = {
  hidden: {
    opacity: 1,
  },
  inView: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },
  inView: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
    }
  },
};

export default function Tokenomics() {
  const textTARGET_TEXT = "TOKENOMICS";
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
      {/* Tokenomics Section */}
      <motion.section
        variants={sectionVariants} // Add variants to the section
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true, amount: 0.3 }}
        className="items-center px-4 md:px-16 py-8 md:py-16"
        id="tokenomics"
      >
        <div className="flex flex-col">
          <motion.h1
            onViewportEnter={textScramble}
            onViewportLeave={stopTextScramble}
            className="text-center font-bold text-[#ff6f00] text-3xl md:text-5xl m-0 pb-16 md:pb-0"
          >
            {textH1}
          </motion.h1>

          {/*Phoenix Bot */}
          <div className="flex flex-col md:flex-row">
            <motion.div
              className="flex flex-col w-50 h-50 md:w-80 md:h-80 justify-center rounded-full mb-4"
            >
              <p className="text-2xl text-center">TOTAL SUPPLY</p>
              <motion.h2 className="font-bold text-8xl text-center">
                10M
              </motion.h2>
            </motion.div>
            <div className="text-white grid md:grid-cols-2 gap-4 mx-4 md:m-auto items-center">
              <motion.div
                className="bg-neutral-800 rounded-[25px] p-4 flex flex-row  justify-between gap-20"
              >
                <p>Airdrop</p>
                <p>2%</p>
              </motion.div>
              <motion.div

                className="bg-neutral-800 rounded-[25px] p-4 flex flex-row justify-between gap-20"
              >
                <p>CEX Listings</p>
                <p>3%</p>
              </motion.div>
              <motion.div

                className="bg-neutral-800 rounded-[25px] p-4 flex flex-row justify-between gap-20"
              >
                <p>Charity</p>
                <p>5%</p>
              </motion.div>
              <motion.div

                className="bg-neutral-800 rounded-[25px] p-4 flex flex-row justify-between gap-20"
              >
                <p>Team </p>
                <p>5%</p>
              </motion.div>
              <motion.div

                className="bg-neutral-800 rounded-[25px] p-4 flex flex-row justify-between gap-20"
              >
                <p>Initial Tokens Burnt</p>
                <p>10%</p>
              </motion.div>
              <motion.div
                className="bg-neutral-800 rounded-[25px] p-4 flex flex-row justify-between gap-20"
              >
                <p>Foundation</p>
                <p>18%</p>
              </motion.div>
              <motion.div
 
                className="bg-neutral-800 rounded-[25px] p-4 flex flex-row justify-between gap-20"
              >
                <p>Reserved Treasury</p>
                <p>25%</p>
              </motion.div>
              <motion.div
  
                className="bg-neutral-800 rounded-[25px] p-4 flex flex-row justify-between gap-20"
              >
                <p>Liqudity Pool</p>
                <p>22%</p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-8 items-center">
          <motion.h1  className="text-2xl md:text-3xl pb-8 font-bold">TAX SLIPPAGE</motion.h1>
          <motion.div  className="grid grid-cols-2 md:grid-cols-5 gap-x-16 gap-y-8 md:gap-16">
          <h2 className="flex flex-col">
            <span className="text-3xl">2%</span>
            <span>REWARD</span>
          </h2>

          <h2 className="flex flex-col">
            <span className="text-3xl">1%</span>
            <span>BURN</span>
          </h2>

          <h2 className="flex flex-col">
            <span className="text-3xl">1%</span>
            <span>MARKETING</span>
          </h2>

          <h2 className="flex flex-col">
            <span className="text-3xl">1%</span>
            <span>LIQUIDITY</span>
          </h2>

          <h2 className="flex flex-col">
            <span className="text-3xl">$WKC</span>
            <span>REWARD TOKEN</span>
          </h2>
          </motion.div>
        </div>

        <div className="px-4 py-2 my-8 rounded-lg bg-white text-neutral-900 text-center">
          <h1 className="pb-4">Contract Address</h1>
          <CopyToClipboard text="0x885c99a787BE6b41cbf964174C771A9f7ec48e04" />
        </div>
      </motion.section>
    </div>
  );
}
