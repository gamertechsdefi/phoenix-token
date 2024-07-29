"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

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
      <section className="md:h-screen bg-white text-gray-900 text-center pt-16 items-center px-4 md:px-8 my-32 py-8" id="tokenomics">
        <div className="flex flex-col ">
          <motion.h1 
          onViewportEnter={textScramble} onViewportLeave={stopTextScramble}
          className="font-bold text-[#ff6f00] text-3xl md:text-5xl m-0 pb-16 md:pb-0">{textH1}</motion.h1>

          {/*Phoenix Bot */}
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col w-50 h-50 md:w-80 md:h-80 justify-center rounded-full mb-4">
              <p className="text-2xl">TOAL SUPPLY</p>
              <motion.h2 
              
              className="font-bold text-8xl">10M</motion.h2>
            </div>
            <div className="text-white grid md:grid-cols-3 gap-4 m-auto items-center">
              <div className="bg-neutral-800 rounded-[25px] p-4 flex flex-row  justify-between gap-20">
                <p>Airdrop</p>
                <p>2%</p>
              </div>
              <div className="bg-neutral-800 rounded-[25px] p-4 flex flex-row justify-between gap-20">
                <p>CEX Listings</p>
                <p>3%</p>
              </div>
              <div className="bg-neutral-800 rounded-[25px] p-4 flex flex-row justify-between gap-20">
                <p>Charity/Donations</p>
                <p>5%</p>
              </div>{" "}
              <div className="bg-neutral-800 rounded-[25px] p-4 flex flex-row justify-between gap-20">
                <p>Team </p>
                <p>5%</p>
              </div>
              <div className="bg-neutral-800 rounded-[25px] p-4 flex flex-row justify-between gap-20">
                <p>Initial Tokens Burnt</p>
                <p>10%</p>
              </div>
              <div className="bg-neutral-800 rounded-[25px] p-4 flex flex-row justify-between gap-20">
                <p>Foundation</p>
                <p>18%</p>
              </div>
              <div className="bg-neutral-800 rounded-[25px] p-4 flex flex-row justify-between gap-20">
                <p>Reserved Treasury</p>
                <p>25%</p>
              </div>
              <div className="bg-neutral-800 rounded-[25px] p-4 flex flex-row justify-between gap-20">
                <p>Liqudity Pool</p>
                <p>22%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-orange-300  p-4  rounded-[20px] mb-4 hover:bg-gray-200 hover:bg-opacity-25">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            COMMUNITY REWARDS MECHANISM
          </h1>
          <p className="text-sm md:text-lg text-justify pb-4 z-100 ">
            Phoenix Token is bringing back the era for Community with a lot of
            reward! $PHT is a deflationary token designed to become more scarce
            over time. All holders of Phoenix Token will earn more $WKC (WikiCat
            Coin) and is automatically sent to your wallet by simply holding
            Phoenix Token coins in your wallet. Watch the amount of WikiCat Coin
            grow in your wallet as Phoenix Token coin holders automatically
            receive a 1% fee from every transaction that happens on the Phoenix
            Token network. The community receives more $WKC coins from the fees
            generated on each transaction.
          </p>
        </div>
      </section>
    </div>
  );
}
