"use client";

import "next/image";
import { useEffect, useRef, useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

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

      <section className="py-8 md:py-16 px-4 md:px-8" id="aboutSection">
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
            <div className="flex md:items-center md:pb-4 gap-4">
              <svg
                className="w-20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z" />
              </svg>

              <motion.h2
                //   variants={aboutFirstPop}
                initial="hidden"
                animate="visible"
                className="font-bold text-3xl pb-4"
              >
                RENOUNCED OWNERSHIP
              </motion.h2>
            </div>
            <p className="text-justify">
              We have taken the bold step towards true decentralization by
              officially renouncing ownership. This pivotal move is designed to
              empower our community, ensuring that the project remains open,
              transparent, and fully governed by its users.
            </p>
          </div>

          <div className="md:h-[250px] bg-gradient-to-b from-gray-100 to-gray-400 p-4 flex flex-col justify-center md:p-6 rounded-[25px] mb-4">
            <div className="flex place-items-baseline md:items-center md:pb-4 gap-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="lock"
                class="svg-inline--fa fa-lock fa-w-14 w-20  m-auto md:m-0 md:w-10"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M400 224h-24v-72C376 68.5 307.5 0 224 0S72 68.5 72 152v72H48c-26.51 0-48 21.49-48 48v192c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V272c0-26.51-21.49-48-48-48zM224 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm104-160H120v-72c0-57.34 46.66-104 104-104s104 46.66 104 104v72z"
                ></path>
              </svg>

              <motion.h2
                //   variants={aboutFirstPop}
                initial="hidden"
                animate="visible"
                className="font-bold text-3xl pb-4"
              >
                LIQUDITY LOCKED
              </motion.h2>
            </div>
            <p className="text-justify">
              Our token liqudity pool have been successfully locked, marking a
              significant milestone in our commitment to security and
              transparency. This strategic move is designed to enhance trust and
              stability within our community, ensuring that our project remains
              robust and resilient.
            </p>
          </div>

          <div className="md:h-[250px] bg-gradient-to-b from-gray-100 to-gray-400 p-4 flex flex-col justify-center md:p-6 rounded-[25px] mb-4">
            <div className="flex md:items-center md:pb-4 gap-4">
              <svg
                className="w-20 md:w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z" />
              </svg>

              <motion.h2
                //   variants={aboutFirstPop}
                initial="hidden"
                animate="visible"
                className="font-bold text-3xl pb-4"
              >
                BURN MECHANISM
              </motion.h2>
            </div>
            <p className="text-justify">
              Our burn mechanism is simple yet effective. A portion of tokens
              from every transaction is automatically burned, permanently
              removing them from circulation. This process decreases the total
              supply of tokens, which leads to a rise in value due to
              increased scarcity.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
