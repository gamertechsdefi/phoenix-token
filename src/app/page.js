"use client";

import { motion, useScroll } from "framer-motion";

import Image from "next/image";
import Header from "./components/header";
import "./css/fire-effect.css";
import Tokenomics from "./components/tokenomics";

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
        <section className="flex flex-col-reverse md:flex-row items-center h-screen md:h-full ">
          <div className="flex md:w-[50%]">
            <Image
              className="justify-center"
              src={webpfp}
              width={600}
              height={200}
            />
          </div>
          <div className="md:w-[50%]">
            <motion.h2
            variants={AboutPopUp}
            initial="hidden"
            animate="visible"
              style={{
                fontFamily: "Zen Dots",
              }}
              className="text-center m-auto md:text-left text-4xl md:text-7xl "
            >
              THE ORDINARY MANS TOKEN
            </motion.h2>
          </div>
        </section>

        {/* About Section */}
        <motion.section className="mt-16 h-screen sm:h-full ">
          <div className="flex flex-col gap-10 justify-between md:flex-row items-center">
            <div className="bg-[#ff6f00]  p-4 rounded-[25px] mb-4 md:w-[50%]">
              <h2 className="font-bold text-3xl pb-4">
                Safeguarding Communities
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="bg-[#ff6f00] p-4 rounded-[25px] mb-4 md:w-[50%]">
              <h2 className="font-bold text-3xl pb-4">
                Safeguarding Communities
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="bg-[#ff6f00] p-4 rounded-[25px] mb-4 ">
            <h2 className="font-bold text-3xl pb-4">
              Safeguarding Communities
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </motion.section>

        {/*Utilities section */}
        <section>
          <div className="mt-16 h-full md:h-screen items-center">
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
        </section>

        {/* Tokenomics Section */}
        <section>
          <div className="mt-16 h-full md:h-screen flex flex-col">
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
        <section>
          <div className="mt-16 h-full md:h-screen items-center">
            <h1 className="text-2xl font-bold mb-4" style={{ color: "orange" }}>
              COMMUNITY REWARDS MECHANISM
            </h1>

            {/*Phoenix Bot */}
            <div className="bg-white bg-opacity-15  p-8  rounded-[20px] mb-4 hover:bg-opacity-25">
              <p className="text-sm text-justify pb-4 z-100 ">
                {" "}
                Phoenix Token is bringing back the era for Community with a lot
                of reward! $PHT is a deflationary token designed to become more
                scarce over time. All holders of Phoenix Token will earn more
                $WKC (WikiCat Coin) and is automatically sent to your wallet by
                simply holding Phoenix Token coins in your wallet. Watch the
                amount of WikiCat Coin grow in your wallet as Phoenix Token coin
                holders automatically receive a 1% fee from every transaction
                that happens on the Phoenix Token network. The community
                receives more $WKC coins from the fees generated on each
                transaction.
              </p>
            </div>
          </div>
        </section>

        {/*Community Reward section */}
        <section>
          <div className="  h-full md:h-screen items-center">
            <h1 className="text-2xl font-bold mb-4">
              COMMUNITY REWARDS MECHANISM
            </h1>

            {/*Phoenix Bot */}
            <div className="bg-[#FF6B00] p-8  rounded-[20px] mb-4">
              <p className="text-sm pb-4">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>
          </div>
        </section>

        {/* <Tokenomics /> */}
      </main>
    </body>
  );
}
