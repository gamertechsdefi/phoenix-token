import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const phtlogo = "/images/logo_blank.png";

export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-20 bg-gradient-to-b from-orange-200 to-orange-400 px-8 py-24 text-black md:items-top">
      <div className="md:w-[40%]">
        <div className="">
          <div className="flex gap-2 pb-2 items-center">
            <Image src={phtlogo} alt="Phoenix logo" width={50} height={50} />
            <h2 className="font-bold text-2xl">Phoenix Token</h2>
          </div>
          <p className="text-sm md:text-l">
            Safeguarding Communities through the best AI technology and
            Empowering Individuals through the Phoenix nature of resilence and
            transformation.
          </p>
        </div>
      </div>
      <div className="">
        <h2 className="uppercase text-xl md:text-2xl font-bold pb-4">
          Utilities
        </h2>
        <FlipLink href="#">phoenix bot</FlipLink>
        <FlipLink href="#">phoenix dex </FlipLink>
        <FlipLink href="#">phoenix foundation</FlipLink>
      </div>

      <div className="">
        <h2 className="uppercase text-xl md:text-2xl font-bold pb-4">
          Follow us
        </h2>
        <FlipLink href="https://t.me/PhoenixToken0">Telegram</FlipLink>
        <FlipLink href="https://x.com/PhoenixToken0">Twitter </FlipLink>
        <FlipLink href="https://">Medium</FlipLink>
        <FlipLink href="#">Warpcaster</FlipLink>
      </div>

      <div className="">
        <h2 className="uppercase text-xl md:text-2xl font-bold pb-4">Others</h2>
        <FlipLink href="#">Brand</FlipLink>
        <FlipLink href="https://pancakeswap.finance/swap?outputCurrency=0x885c99a787BE6b41cbf964174C771A9f7ec48e04">
          PancakeSwap
        </FlipLink>
        <FlipLink href="https://flooz.xyz/swap?tokenAddress=0x885c99a787be6b41cbf964174c771a9f7ec48e04&network=bsc&utm_source=Telegram&utm_medium=swap-CTA&utm_campaign=BuyWizardBot">
          Flooz
        </FlipLink>
        {/* <FlipLink href="#">Instagram</FlipLink> */}
      </div>
    </div>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block mb-2 overflow-hidden whitespace-nowrap text-sm md:text-xl  uppercase"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
