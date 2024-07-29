import React from "react";
import { useRef, useState } from "react";
import { motion, useTransform } from "framer-motion";

export default function FAQs() {
  const textTARGET_TEXT = "FAQs";
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
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your Phoenix Token?",
      answer: "A Community Owned project created for the Ordinary Man (everyone), from the ashes of the Phoenix's myth of resilence and transformation.",
    },
    {
      question: "Why Charity?",
      answer:
        "Much like the mythical phoenix that rises from its ashes, we believe in the power of resilience and renewal. Our charity focuses on supporting communities and individuals who face significant challenges, helping them rebuild and thrive despite the odds. We provide not only immediate relief but also long-term support to ensure that those we assist can emerge from difficult situations with renewed strength and optimism.",
    },
    {
        question: "Where to buy $PHT?",
        answer:
          "$PHT can be purchased with BNB, USDT or other BEP20 tokens on PancakeSwap and Poocoin",
      },
      {
        question: "Where to buy $PHT?",
        answer:
          "$PHT can be purchased with BNB, USDT or other BEP20 tokens on PancakeSwap and Poocoin",
      },
  ];

  return (
    <div>
      <section className="p-8 md:p-16 md:mx-32 flex flex-col justify-center">
        <motion.h2
          onViewportEnter={textScramble}
          onViewportLeave={stopTextScramble}
          className="text-3xl pb-8 md:text-5xl font-bold text-[#ff6f00] mb-4"
        >
          {textH1}
        </motion.h2>
        <div className="text-gray-900">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 bg-gray-200 p-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left rounded-lg focus:outline-none"
              >
                <span className="font-semibold">{faq.question}</span>
              </button>
              <div
                className={`mt-2 rounded-lg transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
