"use client";

import "next/image";
import { useEffect, useRef, useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";


export default function AbourtSection() {

    const textTARGET_TEXT = "ABOUT PHOENIX TOKEN";
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
      {/* About Section */}
      <motion.section className="py-16 px-4 ">
        <motion.div className="flex flex-col gap-10 justify-between md:flex-row items-center">
          <div className="md:h-[250px] bg-[#ff6f00]  p-4 rounded-[25px] mb-4 md:w-[50%]">
            <motion.h2
            //   variants={aboutFirstPop}
              initial="hidden"
              animate="visible"
              className="font-bold text-3xl pb-4"
            >
              SAFEGUARDING COMMUNITIES
            </motion.h2>
            <p className="text-justify">
              The Immortals community is one of the most active and resilient
              groups in the crypto space. Our global network of phoenix
              enthusiasts supports our mission of fostering transformation and
              building a secure ecosystem. With over 10,000 Immortals across
              various social platforms, the Immortals spread a message of
              rebirth and endurance.
            </p>
          </div>

          <div className="md:h-[250px] bg-[#ff6f00] p-4 rounded-[25px] mb-4 md:w-[50%]">
            <h2 className="font-bold text-3xl pb-4">EMPOWERING INDIVIDUALS</h2>
            <p className="text-justify">
              At the heart of our initiative is the belief that empowerment
              comes from within, but can be catalyzed by acts of kindness and
              support. Through our charitable donations, we aim to create a
              ripple effect of positive change, inspiring individuals to embrace
              their inner strength and potential.
            </p>
          </div>
        </motion.div>
        <div className="bg-[#ff6f00] p-4 rounded-[25px] mt-4 ">
          <h2 className="font-bold text-3xl pb-4">BEYOND THE MEME</h2>
          <p className="">
            Memes have become a fundamental unit of cultural transmission,
            analogous to genes in biological evolution. However, we believe
            their potential extends far beyond humor and social commentary. Our
            initiative aims to harness the viral nature of memes to spread
            innovative ideas and inspire resilience.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
