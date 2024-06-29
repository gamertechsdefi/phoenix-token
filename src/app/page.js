"use client";

import { motion, useScroll } from "framer-motion";

import Image from "next/image";
import Header from "./components/header";
import ReactDOM from "react-dom";
import { SiPhoenixframework } from "react-icons/si";
// import "./css/fire-effect.css";import AboutDetails from "./components/AboutDetails";
``;
const webpfp = "/images/website_pfp.png";

export default function Home() {
  const AboutPopUp = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <body>
      <header>
        <Header />
      </header>

      <main className="px-8 md:px-16">
        {/* Intro section */}
        <section className="w-full h-screen flex justify-center items-center ">
          <div className="">
            <h2
              style={{
                fontFamily: "Zen Dots",
                textAlign: "center",
              }}
              className="text-center m-auto text-4xl md:text-8xl "
            >
              THE ORDINARY
            </h2>
            <h2
              style={{
                fontFamily: "Zen Dots",
                textAlign: "center",
              }}
              className="text-center m-auto text-4xl md:text-8xl "
            >
              MAN'S TOKEN
            </h2>
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex flex-col md:w-[70%]">
              <h1 className="font-bold text-3xl pb-4">ABOUT PHOENIX TOKEN</h1>
              <p>
                Phoenix Token is a cutting-edge AI-powered blockchain project
                designed to revolutionize decentralized finance and
                cybersecurity. Our mission is to provide advanced security
                tools, an innovative decentralized exchange, and a suite of
                AI-driven utilities that empower users in the rapidly evolving
                digital landscape. At the core of Phoenix Token is our
                state-of-the-art AI technology, which forms the backbone of our
                ecosystem. Our decentralized AI infrastructure, powered by
                SkyNet, offers elastic computing capabilities that enable the
                development and deployment of sophisticated AI models and
                applications
              </p>
            </div>
            <div>
              {/* <Image src={webpfp} width={600} height={30} /> */}
            </div>
          </div>
        </section>

        {/* About Section */}
        <motion.section className="mt-16 ">
          <motion.div className="flex flex-col gap-10 justify-between md:flex-row items-center">
            <div className="md:h-[250px] bg-[#ff6f00]  p-4 rounded-[25px] mb-4 md:w-[50%]">
              <h2 className="font-bold text-3xl pb-4">
                SAFEGUARDING COMMUNITIES
              </h2>
              <p className="text-justify">
                The Immortals community is one of the most active and resilient
                groups in the crypto space. Our global network of phoenix
                enthusiasts supports our mission of fostering transformation and
                building a secure ecosystem. With over 10,000 Immortals across
                various social platforms, the Immortals spread a message of
                rebirth and endurance.
              </p>
            </div>

            <div className="md:h-[250px] bg-[#ff6f00] p-4 rounded-[25px] mb-4 md:w-[50%]">
              <h2 className="font-bold text-3xl pb-4">
                EMPOWERING INDIVIDUALS
              </h2>
              <p className="text-justify">
                At the heart of our initiative is the belief that empowerment
                comes from within, but can be catalyzed by acts of kindness and
                support. Through our charitable donations, we aim to create a
                ripple effect of positive change, inspiring individuals to
                embrace their inner strength and potential.
              </p>
            </div>
          </motion.div>
          <div className="bg-[#ff6f00] p-4 rounded-[25px] mt-4 ">
            <h2 className="font-bold text-3xl pb-4">BEYOND THE MEME</h2>
            <p className="text-justify">
              Memes have become a fundamental unit of cultural transmission,
              analogous to genes in biological evolution. However, we believe
              their potential extends far beyond humor and social commentary.
              Our initiative aims to harness the viral nature of memes to spread
              innovative ideas and inspire resilience.
            </p>
          </div>

          <div>
            <div>
              <h2>RENOUNCED OWNERSHIP</h2>
            </div>
          </div>
        </motion.section>

        {/* <AboutDetails /> */}

        {/*Utilities section */}
        <motion.section className="">
          <div className="mt-16 ">
            <h1 className="text-2xl font-bold mb-4">
              PARADIGMS IN DEVELOPMENTS
            </h1>

            {/*Phoenix Bot */}
            <div className="bg-[#FF6B00] p-8  rounded-[20px] mb-4">
              <h1 className="font-bold text-xl pb-4">Phoenix Bot</h1>
              <p className="text-sm pb-4">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
              <button className="bg-[red] p-2 rounded-[12.5px]">
                Learn More
              </button>
            </div>

            {/*Phoenix Bot */}
            <div className="bg-[#FF6B00] p-8  rounded-[20px] mb-4">
              <h1 className="font-bold text-xl pb-4">Phoenix DEX</h1>
              <p className="text-sm pb-4">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
              <button className="bg-[red] p-2 rounded-[12.5px]">
                Learn More
              </button>
            </div>

            {/*Phoenix Bot */}
            <div className="bg-[#FF6B00] p-8  rounded-[20px]">
              <h1 className="font-bold text-xl pb-4">Phoenix Foundation</h1>
              <p className="pb-4 text-sm">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
              <button className="bg-[red] p-2 rounded-[12.5px]">
                Learn More
              </button>
            </div>
          </div>
        </motion.section>

        {/* Tokenomics Section */}
        <section className="">
          <div className="mt-16 flex flex-col">
            <h1 className="text-2xl font-bold mb-4">TOKENOMICS</h1>

            {/*Phoenix Bot */}
            <div className="flex flex-col md:flex-row">
              <div className="mr-16 bg-[#FF6B00] flex flex-col w-50 h-50 md:w-80 md:h-80 justify-center text-center rounded-full mb-4">
                <p>TOAL SUPPLY</p>
                <h2 className="font-bold">100M</h2>
              </div>
              <div>
                <div className="bg-[red] w- rounded-[25px] p-4 flex flex-row justify-between gap-20">
                  <p>Foundation</p>
                  <p>20%</p>
                </div>

                <div className="bg-[red] rounded-[25px] p-4 flex flex-row justify-between gap-20">
                  <p>Marketing & Development</p>
                  <p>20%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Community Reward section */}
        <section className="">
          <div className="bg-white bg-opacity-15  p-8  rounded-[20px] mb-4 hover:bg-opacity-25">
            <h1 className="text-3xl font-bold mb-4" style={{ color: "orange" }}>
              COMMUNITY REWARDS MECHANISM
            </h1>
            <p className="text-sm text-justify pb-4 z-100 ">
              {" "}
              Phoenix Token is bringing back the era for Community with a lot of
              reward! $PHT is a deflationary token designed to become more
              scarce over time. All holders of Phoenix Token will earn more $WKC
              (WikiCat Coin) and is automatically sent to your wallet by simply
              holding Phoenix Token coins in your wallet. Watch the amount of
              WikiCat Coin grow in your wallet as Phoenix Token coin holders
              automatically receive a 1% fee from every transaction that happens
              on the Phoenix Token network. The community receives more $WKC
              coins from the fees generated on each transaction.
            </p>
          </div>
        </section>

        {/*Chart section */}
        <section className="bg-orange-500 w-full h-full">
          <div className="items-center w-full h-full">
            <div>
              <div>
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{ color: "orange" }}
                >
                  LIVE CHART
                </h2>
              </div>
              <style jsx>{`
                #dexscreener-embed {
                  position: relative;
                  width: 100%;
                  padding-bottom: 125%;
                }
                @media (min-width: 1400px) {
                  #dexscreener-embed {
                    padding-bottom: 65%;
                  }
                }
                #dexscreener-embed iframe {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  border: 0;
                }
              `}</style>
              <div className="" id="dexscreener-embed">
                <iframe src="https://dexscreener.com/bsc/0x8a2328B2C8E6a6f56668a0e26081Efc250A8D6c0?embed=1&theme=dark&trades=0&info=0"></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}

        <section className="">
          <div className="">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "orange" }}>
              ROADMAP
            </h2>
            <div className="flex flex-col md:flex-row gap-x-20">
              <div className="flex-col">
                <h3>PHASE 1</h3>
                <p>Social Media Handles Creation</p>
                <p> Website Launch</p>
                <p>Launch A Public Sale </p>
                <p>500 Asset Holders</p>
                <p>1000 Twitter Followers</p>
                <p>500 Telegram Members </p>
                <p>500 TikTok Followers </p>
              </div>

              <div className="flex-col">
                <h3>PHASE 1</h3>
                <p>Social Media Handles Creation</p>
                <p> Website Launch</p>
                <p>Launch A Public Sale </p>
                <p>500 Asset Holders</p>
                <p>1000 Twitter Followers</p>
                <p>500 Telegram Members </p>
                <p>500 TikTok Followers </p>
              </div>

              <div className="flex-col">
                <h3>PHASE 1</h3>
                <p>Social Media Handles Creation</p>
                <p> Website Launch</p>
                <p>Launch A Public Sale </p>
                <p>500 Asset Holders</p>
                <p>1000 Twitter Followers</p>
                <p>500 Telegram Members </p>
                <p>500 TikTok Followers </p>
              </div>

              <div className="flex-col">
                <h3>PHASE 1</h3>
                <p>Social Media Handles Creation</p>
                <p> Website Launch</p>
                <p>Launch A Public Sale </p>
                <p>500 Asset Holders</p>
                <p>1000 Twitter Followers</p>
                <p>500 Telegram Members </p>
                <p>500 TikTok Followers </p>
              </div>
            </div>

            <div className="flex-col">
              <h3>PHASE 1</h3>
              <p>Social Media Handles Creation</p>
              <p> Website Launch</p>
              <p>Launch A Public Sale </p>
              <p>500 Asset Holders</p>
              <p>1000 Twitter Followers</p>
              <p>500 Telegram Members </p>
              <p>500 TikTok Followers </p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2>HOW TO BUY</h2>\<div></div>
          </div>
        </section>
      </main>
    </body>
  );
}
