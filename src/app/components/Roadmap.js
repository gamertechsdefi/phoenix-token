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
          onViewportEnter={textScramble}
          onViewportLeave={stopTextScramble}
          className="text-5xl pb-16 text-[#ff6f00] font-bold"
        >
          {textH1}
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {roadmapData.map((phase, index) => (
            <Card key={index} quarter={phase.quarter} items={phase.items} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};


export default Example;

const roadmapData = [
  {
    quarter: "Q1 2025",
    items: [
      {
        title: "Token Tracker v1 Release",
        description: "Launch the first version of the Token Tracker for enhanced transparency and analytics.",
      },
      {
        title: "Strategic Partnerships",
        description: "Establish key partnerships to strengthen the ecosystem and drive adoption.",
      },
    ],
  },
  {
    quarter: "Q2 2025",
    items: [
      { title: "Token Tracker v2 Release", description: "Upgrade the Token Tracker with new features and improved user experience." },
      { title: "Agent Pre-Version Release", description: "Introduce the early version of the AI agent for initial testing and feedback." },
      { title: "Charity Donation", description: "Conduct the first charity donation initiative to support community-driven causes." },
      { title: "First Tech Event", description: "Organize a technology-focused event to showcase innovations and connect with industry experts." },
      { title: "Partnership Expansion", description: "Continue building partnerships to enhance the platform’s reach." },
      { title: "Waitlist Upgrade & Release", description: "Improve the waitlist system and launch it to onboard more users efficiently." },
    ],
  },
  {
    quarter: "Q3 2025",
    items: [
      { title: "Agent v1 Release", description: "Launch the full version of the AI-powered agent with advanced functionalities." },
      { title: "DEX Pre-Version Release", description: "Introduce the decentralized exchange (DEX) in its preliminary phase." },
      { title: "Charity Donation", description: "Execute another round of charity donations to further the project's social impact." },
      { title: "DEX Testnet", description: "Deploy the DEX testnet for community testing and feedback." },
    ],
  },
  {
    quarter: "Q4 2025",
    items: [
      { title: "Agent v2 Release", description: "Enhance the AI agent with additional capabilities and refinements." },
      { title: "DEX Mainnet Launch", description: "Officially deploy the decentralized exchange on the mainnet." },
      { title: "Charity Donation", description: "Continue supporting charitable initiatives through strategic donations." },
      { title: "Agent API Release", description: "Make the AI agent API available for developers, communities, and projects to integrate." },
      { title: "New Roadmap Release", description: "Publish the next phase of the project’s roadmap for 2026 and beyond." },
    ],
  },
];

const Card = ({ quarter, items }) => {
  return (
    <div className="flex flex-col bg-neutral-900 bg-opacity-60 border-2 border-orange-500 rounded-lg p-8">
      <h1 className="font-bold text-3xl">{quarter}</h1>
      {items.map((item, index) => (
        <div key={index} className="flex flex-col pb-2">
          <span className="font-semibold">{item.title}</span>
          <span>{item.description}</span>
        </div>
      ))}
    </div>
  );
};

