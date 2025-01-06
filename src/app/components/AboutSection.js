"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";


import { motion, useScroll, useTransform } from "framer-motion";
// import burn from "/images/burn-pht.jpg";

export default function AboutSection() {
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

      <section className="py-16" id="aboutSection">
        <div className="px-8 md:px-16 flex flex-col md:flex-row items-center">
          <div className="flex flex-col md:w-[70%]">
            <motion.h2
              onViewportEnter={textScramble}
              onViewportLeave={stopTextScramble}
              whileHover={{
                scale: 1.025,
              }}
              className="relative overflow-hidden font-bold text-3xl md:text-5xl pb-4 uppercase text-[#ff6f00] transition-colors"
            >
              {textH1}
            </motion.h2>
          </div>
          <div>{/* <Image src={webpfp} width={600} height={30} /> */}</div>
        </div>

        <div className="px-8 md:px-16">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="p-4 bg-[#f9f9f9] text-neutral-900 rounded-xl">
              <Image src="/images/burn-pht.jpg" width={400} height={400} alt="beng tax" className="border-2 border-[#AD2515] rounded-xl mb-4" />
              <p className="text-2xl font-bold">BURN</p>
              <p className="">ON EVERY TRANSACTION</p>
            </div>

            <div className="p-4 bg-[#f9f9f9] text-neutral-900 rounded-xl">
              <Image src="/images/renounce-pht.jpg" width={400} height={400} alt="beng tax" className="border-2 border-[#AD2515] rounded-xl mb-4" />
              <p className="text-2xl font-bold">OWNERSHIP</p>
              <p className="">RENOUNCED</p>
            </div>

            <div className="p-4 bg-[#f9f9f9] text-neutral-900 rounded-xl">
              <Image src="/images/locked-pht.jpg" width={400} height={400} alt="beng tax" className="border-2 border-[#AD2515] rounded-xl mb-4" />
              <p className="text-2xl font-bold">LIQUIDITY</p>
              <p className="">LOCKED</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
