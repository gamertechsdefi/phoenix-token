import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-255%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["1%", "-255%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex-col h-screen items-center overflow-hidden">
        <h2 className="text-5xl pb-16 mx-8">ROADMAP</h2>
        <motion.div style={{x}} className="flex gap-8 w-full flex-nowrap">
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
    <div
      key={card.id}
      className="group relative overflow-hidden flex-shrink-0 min-w-[80%] md:min-w-[40%] lg:min-w-[30%]"
    >
      <div className="shadow-md overflow-hidden p-6 m-4">
        <h2 className="text-2xl text-white font-bold mb-4">{card.title}</h2>
        {card.detail && (
          <ul className="list-disc list-inside text-white">
            {card.detail.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    title: "PHASE 1",
    detail: [
      "Social Media Handles Creation",
      "Website Launch",
      "Launch A Public Sale",
      "500 Asset Holders",
      "1000 Twitter Followers",
      "500 Telegram Members",
      "500 TikTok Followers",
    ],
    id: 1,
  },
  {
    title: "PHASE 2",
    detail: [
      "First Airdrop Campaign",
      "Contract Audit",
      "1500 Asset Holders",
      "Whitepaper Release",
      "Meme Contest",
      "5000 Twitter Followers",
      "5000 Telegram Members",
      "1500 TikTok Followers",
      "CG & CMC Listing",
    ],
    id: 2,
  },
  {
    title: "PHASE 3",
    detail: [
      "Phoenix Token Bot Release",
      "First Ressurection Campaign",
      "5,000 Asset Holders",
      "10,000 Telegram Members",
      "10,000 Twitter Followers",
      "5000 TikTok Followers",
      "Medium Influencer Marketing",
      "Billboard Marketing in Africa",
    ],
    id: 3,
  },
  {
    title: "PHASE 4",
    detail: [
      "10,000 Asset Holders",
      "20,000 Telegram Members",
      "20,000 Twitter Followers",
      "10,000 TikTok Followers",
      "Large Influencer Marketing",
      "Phoenix Bot Launch",
      "Billboard Marketing in Asia & Europe",
      "Second Resurrection Campaign",
    ],
    id: 4,
  },
  {
    title: "PHASE 5",
    detail: [
      '10,000 Asset Holders',
'20,000 Telegram Members',
'20,000 Twitter Followers',
'10,000 TikTok Followers',
'Large Influencer Marketing',
'Phoenix Bot Launch',
'Billboard Marketing in Asia & Europe',
'Second Resurrection Campaign',
    ],
    id: 5,
  },
];
