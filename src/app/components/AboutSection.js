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
              RENOUNCED OWNERSHIP
            </motion.h2>
            <p className="text-justify">
              We have taken the bold step towards true decentralization by
              officially renouncing ownership. This pivotal move is designed to
              empower our community, ensuring that the project remains open,
              transparent, and fully governed by its users.
            </p>
          </div>

          <div className="md:h-[250px] bg-gradient-to-b from-gray-100 to-gray-400 p-4 flex flex-col justify-center md:p-6 rounded-[25px] mb-4">
            <motion.h2
              //   variants={aboutFirstPop}
              initial="hidden"
              animate="visible"
              className="font-bold text-3xl pb-4"
            >
              LIQUDITY LOCKED
            </motion.h2>
            <p className="text-justify">
              Our token liqudity pool have been successfully locked, marking a
              significant milestone in our commitment to security and
              transparency. This strategic move is designed to enhance trust and
              stability within our community, ensuring that our project remains
              robust and resilient.
            </p>
          </div>

          <div className="md:h-[250px] bg-gradient-to-b from-gray-100 to-gray-400 p-4 flex flex-col justify-center md:p-6 rounded-[25px] mb-4">
            <motion.h2
              //   variants={aboutFirstPop}
              initial="hidden"
              animate="visible"
              className="font-bold text-3xl pb-4"
            >
              LOW TAXES, HIGH REWARDS
            </motion.h2>
            <p className="text-justify">
              We believe in creating value for our community
              members. That's why we've implemented a modest 5% tax on
              transactions, designed to benefit you directly through a
              comprehensive rewards system. Our goal is to foster a thriving,
              engaged, and prosperous community by giving back more to those who
              believe in and support our project.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
