"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../components/AboutSection";
import styles from "../components/IntroSection.module.css";

export default function Intro() {

  const TARGET_TEXT = "BUY NOW";
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
  };

  return (
    <div className="h-screen flex items-center justify-center">
      {/* Intro section */}
      <section className="w-full px-8 text-center ">
        <div className={styles.customFontText}>
        <motion.h2
          // initial={{ y: "-100vh", opacity: 0 }}
          // animate={{ y: "0", opacity: 1 }}
          // whileInView={scrollEffects}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          id="header1"
          className="pb-8 text-5xl md:text-8xl "
        >
          THE ORDINARY MAN TOKEN
        </motion.h2>
        </div>
        <p className="pb-4">
          We believe that everyone deserves a chance to benefit from the
          advancements in digital finance and blockchain technology. Our vision
          is to create a level playing field where every individual, regardless
          of their background or experience, can participate in and benefit from
          the growth of the digital economy.
        </p>
        <div className="flex justify-center gap-8">
        <a href="https://pancakeswap.finance/swap?outputCurrency=0x885c99a787BE6b41cbf964174C771A9f7ec48e04">
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
        </motion.button> </a>

        <a href="https://pancakeswap.finance/swap?outputCurrency=0x885c99a787BE6b41cbf964174C771A9f7ec48e04">
        <motion.button

          whileHover={{
            scale: 1.025,
          }}
          whileTap={{
            scale: 0.975,
          }}
          onMouseEnter={scramble}
          onMouseLeave={stopScramble}
          className="group relative overflow-hidden rounded-lg border-[1px] border-gray-500 bg-gray-200 px-4 py-2 font-mono font-medium uppercase text-gray-900 transition-colors hover:text-gray-200 hover:bg-gray-900"
        >
          <div className="relative z-10 flex items-center gap-2">
            <span>Chart</span>
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
            className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-red-400/0 from-40% via-gray-400/100 to-gray-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
          />
        </motion.button> </a>
        </div>
      </section>
    </div>
  );
}
