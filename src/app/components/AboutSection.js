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
            <div className="flex md:items-center md:pb-4 gap-4">
              <svg className="w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
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
            <svg className="w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M218.7 152l74.6 0 13.8 8.8C361.1 195.4 464 277 464 416c0 26.5-21.5 48-48 48L96 464c-26.5 0-48-21.5-48-48c0-139 102.9-220.6 156.9-255.2l13.8-8.8zM286 104l-60 0-7.5-10.8L187.4 48l137.2 0L293.5 93.2 286 104zM150.8 139.9C89.4 185.5 0 274.8 0 416c0 53 43 96 96 96l320 0c53 0 96-43 96-96c0-141.2-89.4-230.5-150.8-276.1c-10.4-7.7-20-14.2-28.2-19.4l27.3-39.5 29.8-43.2C401 21.7 389.6 0 370.3 0L141.7 0C122.4 0 111 21.7 121.9 37.6l29.8 43.2L179 120.4c-8.2 5.3-17.8 11.7-28.2 19.4zM276 216c0-11-9-20-20-20s-20 9-20 20l0 14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1c0 0 0 0 0 0s0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4l0 14.6c0 11 9 20 20 20s20-9 20-20l0-13.8c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15c0 0 0 0 0 0l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7l0-13.9z"/></svg>

              <motion.h2
                //   variants={aboutFirstPop}
                initial="hidden"
                animate="visible"
                className="font-bold text-3xl pb-4"
              >
                LOW TAX, HIGH REWARDS
              </motion.h2>
            </div>
            <p className="text-justify">
              We believe in creating value for our community members. That is
              why we have implemented a modest 5% tax on transactions, designed
              to benefit you directly through a comprehensive rewards system.
              Our goal is to foster a thriving, engaged, and prosperous
              community by giving back more to those who believe in and support
              our project.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
