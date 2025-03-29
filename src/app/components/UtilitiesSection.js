"use client";

import { motion } from "framer-motion";
import { inView } from "motion";
import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";

const rflogo = "/images/rflogo.png";

const sectionVariants = {
  hidden: {
    opacity: 1,
  },
  inView: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 1,
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
      <motion.section variants={sectionVariants} initial="hidden" whileInView="inView" 
      className="py-16 text-neutral-900 bg-gradient-to-b from-neutral-100 to-neutral-300 px-4 md:px-16"  id="utilities">
        <div className="">
          <motion.h1
            onViewportEnter={textScramble}
            onViewportLeave={stopTextScramble}
            className="text-3xl pb-8 md:text-5xl text-[#ff6f00] font-bold mb-4"
          >
            {textH1}
          </motion.h1>

          {/*Phoenix Bot */}
          <div className="grid md:grid-cols-3 gap-8 md:grid-rows-1 md:auto-rows-fr">
          <motion.div variants={childVariants}  className="bg-[white] p-8  rounded-[20px] ">
            <h1 className="font-bold text-xl pb-4">PHOENIX AGENT</h1>
            <p className="text-sm pb-8">
              Phoenix Agent stands as a robust and essential tool for anyone
              involved in the blockchain space. By leveraging advanced AI
              technologies, it ensures that the blockchain ecosystem remains
              secure, transparent, and reliable. Whether you are an investor,
              developer, or enthusiast, Phoenix Bot is your go-to guardian for
              navigating the complexities of the blockchain world with
              confidence.
            </p>
            <div className="flex flex-col gap-2">
            <Link href="https://www.waitlist.phoenixtoken.community" className="font-bold bg-orange-600 text-white p-4 rounded-[12.5px]">
              Join waitlist
            </Link>
            <Link href="https://tracker.phoenixtoken.community/agent-chat" target="_blank" className="font-bold bg-orange-600 text-white p-4 rounded-[12.5px]">
             Check out
            </Link>
            </div>
          </motion.div>

           {/*Token Tracker */}
           <motion.div variants={childVariants} className="bg-gray-200 p-8 rounded-[20px]">
            <div className="flex flex-row gap-4 justify-center pb-2">
              <div className="relative w-[80px] h-[60px] bg-white border-2 border-neutral-900 rounded-lg">
                <Image className="absolute" src={rflogo} layout="fill" objectFit="cover" alt="resurgence foundation logo" />
              </div>
              <h1 className="font-bold text-xl pb-4">TOKEN TRACKER</h1>
              </div>
            <p className="pb-4 text-sm">
            Our tracker platform designed to monitor and analyze tokens (partners & tokens coming out of Africa) as a 
            culture to building and advancing the tokens from our demograph. 
            It provides real-time data on token price, supply, holders, and transactions. Built for the SMC DAO Community, 
            partnered projects and support to the African builders, it fosters transparency and engagement with this 
            the Africa developments ecosystem. 
            <span className="font-semibold"> Currently available for BNBChain and Solana</span>
            </p>
            <button className="font-bold bg-orange-600 text-white p-4 rounded-[12.5px]">
              <a href="https://www.tracker.phoenixtoken.community" target="_blank">Try now</a>
            </button>
          </motion.div>

          {/*Phoenix Bot */}
          <motion.div variants={childVariants} className="bg-gray-100 p-8  rounded-[20px]">
            <h1 className="font-bold text-xl pb-4">PHOENIX SWAP</h1>
            <p className="text-sm pb-4">
              Phoenix SWAP is revolutionizing the decentralized exchange
              landscape by integrating advanced AI technologies and cross-chain
              capabilities. Experience faster, more secure, and highly flexible
              trading with Phoenix DEX. Whether you are an experienced trader or
              just starting, Phoenix DEX offers the tools and features you need
              to succeed in the world of decentralized finance.
            </p>
            <button onClick={()=> alert("coming soon")} className="font-bold bg-orange-600 text-white p-4 rounded-[12.5px]">
              Swap now
            </button>
          </motion.div>

          {/*Resurgence Foundation */}
          <motion.div variants={childVariants} className="bg-gray-200 p-8 rounded-[20px]">
            <div className="flex flex-row gap-4 justify-center pb-2">
              <div className="relative w-[80px] h-[60px] bg-white border-2 border-neutral-900 rounded-lg">
                <Image className="absolute" src={rflogo} layout="fill" objectFit="cover" alt="resurgence foundation logo" />
              </div>
              <h1 className="font-bold text-xl pb-4">RESURGENCE FOUNDATION</h1>
              </div>
            <p className="pb-4 text-sm">
              Our mission is to empower individuals by
              providing them with the resources, opportunities, and support they
              need to thrive. We are committed to making meaningful charity
              donations to organizations that create positive change in
              communities worldwide. By focusing on empowerment and
              philanthropy, we aim to build a more equitable future
              for all.
            </p>
            <button className="font-bold bg-orange-600 text-white p-4 rounded-[12.5px]">
              <a href="https://www.resurgencefoundation.org" target="_blank">Learn more</a>
            </button>
          </motion.div>

          
        </div>
        </div>
      </motion.section>
    </div>
  );
}
