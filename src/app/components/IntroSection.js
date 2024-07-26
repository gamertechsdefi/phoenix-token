"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";



export default function Intro() {
    const scrollClick = () => {
        document
          .getElementById("aboutSection")
          .scrollIntoView({ behavior: "smooth" });
      };
    
      const TARGET_TEXT = "SCROLL DOWN";
      const CYCLES_PER_LETTER = 2;
      const SHUFFLE_TIME = 50;
      
      const CHARS = "!@#$%^&*():{};|,.<>/?";
        const intervalRef = useRef(null);
      
        const [text, setText] = useState(TARGET_TEXT);
      
        const scramble = () => {
          let pos = 0;
      
          intervalRef.current = setInterval(() => {
            const scrambled = TARGET_TEXT.split("")
              .map((char, index) => {
                if (pos / CYCLES_PER_LETTER > index) {
                  return char;
                }
      
                const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                const randomChar = CHARS[randomCharIndex];
      
                return randomChar;
              })
              .join("");
      
            setText(scrambled);
            pos++;
      
            if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
              stopScramble();
            }
          }, SHUFFLE_TIME);
        };
      
        const stopScramble = () => {
          clearInterval(intervalRef.current || undefined);
      
          setText(TARGET_TEXT);
        }

  return (
    <div className="">
      {/* Intro section */}
      <section className="w-full h-screen flex justify-center items-center ">
        <div className="text-center absolute">
          <motion.h2
            // initial={{ y: "-100vh", opacity: 0 }}
            // animate={{ y: "0", opacity: 1 }}
            // whileInView={scrollEffects}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            id="header1"
            style={{
              fontFamily: "Zen Dots",
              textAlign: "center",
            }}
            className="text-center m-auto text-4xl md:text-8xl "
          >
            THE ORDINARY MAN TOKEN
          </motion.h2>
          <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg border-[1px] border-orange-500 bg-orange-700 px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-orange-300"
    >
      <div className="relative z-10 flex items-center gap-2">
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-red-400/0 from-40% via-red-400/100 to-red-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
        </div>
      </section>
      <section className="px-4" id="aboutSection">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col md:w-[70%]">
            <motion.h2
              whileHover={{
                scale: 1.025,
              }}
              className="relative overflow-hidden font-bold text-4xl uppercase text-neutral-300 transition-colors hover:text-white"
            >ABOUT PHOENIX TOKEN
            </motion.h2>
            <p>
              Phoenix Token is a cutting-edge AI-powered Meme project designed
              to revolutionize decentralized finance and cybersecurity. Our
              mission is to provide advanced security tools, an innovative
              decentralized exchange, and a suite of AI-driven utilities that
              empower users in the rapidly evolving digital landscape. At the
              core of Phoenix Token is our state-of-the-art AI technology, which
              forms the backbone of our ecosystem. Our decentralized AI
              infrastructure, powered by BNBChain & zkTechnology, offers elastic
              computing capabilities that enable the development and deployment
              of sophisticated AI models and applications
            </p>
          </div>
          <div>{/* <Image src={webpfp} width={600} height={30} /> */}</div>
        </div>
      </section>
    </div>
  );
}
