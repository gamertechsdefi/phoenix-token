import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { isMobile, isDesktop } from "react-device-detect";




const Example = () => {


  return (
    <div className="">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {

  const textTARGET_TEXT = "ROADMAP";
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
    <section className="bg-[#120404] py-16 relative px-4" id="roadmap">
      <div className="px-4 md:px-16 flex-col">
        <motion.h2
          onViewportEnter={textScramble} onViewportLeave={stopTextScramble}
          className="text-5xl pb-16 text-[#ff6f00] font-bold">{textH1}</motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>

      </div>

    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div key={card.id} className="border-2 border-orange-500 bg-neutral-800 bg-opacity-50 rounded-lg p-8">
      <h2 className="text-2xl text-white font-bold mb-4">{card.title}</h2>
      {card.detail && (
        <ul className="text-white">
          {card.detail.map((detail, index) => (
            <li className="pb-2" key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Example;

const cards = [
  {
    title: "Q4 2023",
    detail: [
      "Phoenix Token launch formation",
      "Phoenix Token website launch",
      "2,000 Followers on X and Telegram",
      "Marketing Campaigns for $PHT",
      "Partnership",
    ],
    id: 1,
  },
  {
    title: "Q1 2024",
    detail: [
      "Contract audit",
      "1,000 $PHT Holders",
      "4,000 Followers on X & Telegram",
      "Partnerships and Collaborations",
      "Airdrop for Affected Holders",
    ],
    id: 2,
  },
  {
    title: "Q2 2024",
    detail: [
      "YouTube Marketing and Onboarding Campaigns",
      "Tier1 Influencers Marketing Campaign",
      "Sponsorship & Community Partnerships",
      "2,000 $PHT Holders",
      "5,000 Followers on X and Telegram",
    ],
    id: 3,
  },
  {
    title: "Q3 2024",
    detail: [
      "Expansion of Charity Organization",
      "Mini App Game Ideation",
      "Meme Campaign",
      "Reddit & Medium Marketing",
      "Thread Campaign",
    ],
    id: 4,
  },
  {
    title: "Q4 2024",
    detail: [
      "Mini App Game Launch",
      "$PHT CG & CMC Listings",
      "10,000 $PHT Holders",
      "Further Research and Development",
      "50,000 $PHT Transactions",
      "Business Plans Sponsoring Campaign",
    ],
    id: 5,
  },
];


