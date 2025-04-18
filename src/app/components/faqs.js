import React from "react";
import { useRef, useState } from "react";
import { motion, useTransform } from "framer-motion";

const sectionVariants = {
  hidden: {
    opacity: 1,
  },
  inView: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
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
      question: "Why Artifiicial Intelligence?",
      answer:
        "We believe that Artificial Intelligence (AI) has the transformative potential to revolutionize the development and modeling of Blockchain security. By leveraging AI technologies, we can enhance the robustness and efficiency of blockchain systems, ensuring more secure and resilient networks.  .",
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
        question: "How to contribute?",
        answer:
          "Tell family and friends about the Phoenix Token resilence and transformation vision.",
      },
  ];

  return (
    <div>
      <motion.section variants={sectionVariants} initial="hidden" whileInView="inView" className="p-8 md:p-16 md:mx-32 flex flex-col justify-center">
        <motion.h2
          onViewportEnter={textScramble}
          onViewportLeave={stopTextScramble}
          className="text-3xl pb-8 md:text-5xl font-bold text-[#ff6f00] mb-4"
        >
          {textH1}
        </motion.h2>
        <div className="text-gray-900">
          {faqs.map((faq, index) => (
            <motion.div variants={childVariants} key={index} className="mb-4 bg-gray-200 p-4">
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
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
