"use client";

import "next/image";
import { useEffect, useRef, useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

export default function AbourtSection() {
  const textTARGET_TEXT = "THE FIRST TRUE AI-MEME TOKEN";
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

      <section className="px-4 md:px-8" id="aboutSection">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col md:w-[70%]">
            <motion.h2
              onViewportEnter={textScramble}
              onViewportLeave={stopTextScramble}
              whileHover={{
                scale: 1.025,
              }}
              className="relative overflow-hidden font-bold text-3xl md:text-5xl pb-4 uppercase text-[#ff6f00] transition-colors"
            >
              {textH1}{" "}
            </motion.h2>
            <p>
              Phoenix Token is a cutting-edge AI-powered Meme project designed
              to revolutionize decentralized finance and cybersecurity. Our
              mission is to provide advanced security tools, an innovative
              decentralized exchange, and a suite of AI-driven utilities that
              empower users in the rapidly evolving digital landscape.
            </p>
          </div>
          <div>{/* <Image src={webpfp} width={600} height={30} /> */}</div>
        </div>
      </section>
      <motion.section className="py-16 px-4 md:px-8 text-gray-900 ">
        <motion.div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-b from-gray-100 to-gray-400 p-4 flex flex-col justify-center md:p-6 rounded-[25px] mb-4">
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

          <div className="md:h-[250px] bg-gradient-to-b from-gray-100 to-gray-400 p-4 flex flex-col justify-center md:p-6 rounded-[25px] mb-4">
            <motion.h2
              //   variants={aboutFirstPop}
              initial="hidden"
              animate="visible"
              className="font-bold text-3xl pb-4"
            >
              EMPOWRING INDIVIDUALS
            </motion.h2>
            <p className="text-justify">
            At the heart of our initiative is the belief that empowerment
              comes from within, but can be catalyzed by acts of kindness and
              support. Through our charitable donations, we aim to create a
              ripple effect of positive change, inspiring individuals to embrace
              their inner strength and potential.
            </p>
          </div>

          <div className="md:h-[250px] bg-gradient-to-b from-gray-100 to-gray-400 p-4 flex flex-col justify-center md:p-6 rounded-[25px] mb-4">
            <motion.h2
              //   variants={aboutFirstPop}
              initial="hidden"
              animate="visible"
              className="font-bold text-3xl pb-4"
            >
              BEYOND THE MEME
            </motion.h2>
            <p className="text-justify">
            Memes have become a fundamental unit of cultural transmission,
            analogous to genes in biological evolution. However, we believe
            their potential extends far beyond humor and social commentary. Our
            initiative aims to harness the viral nature of memes to spread
            innovative ideas and inspire resilience.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
