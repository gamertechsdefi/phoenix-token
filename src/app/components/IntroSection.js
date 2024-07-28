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
  };

  return (
    <div className="">
      {/* Intro section */}
      <section className="flex min-h-screen justify-center items-center ">
        <div className="px-8 text-center">
          <motion.h2
            // initial={{ y: "-100vh", opacity: 0 }}
            // animate={{ y: "0", opacity: 1 }}
            // whileInView={scrollEffects}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            id="header1"
            style={{
              fontFamily: "Zen Dots, cursive",
              textAlign: "center",
            }}
            className="text-center m-auto pb-8 text-5xl md:text-8xl "
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
    </div>
  );
}
