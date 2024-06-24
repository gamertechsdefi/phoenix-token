"use client";

import Image from "next/image";
import Header from "./components/header";
import "./css/fire-effect.css";
import Tokenomics from "./components/tokenomics";


const bot2 = "/images/bot2.png";

export default function Home() {
  return (
    <body>
      <header>
      <Header />
      </header>

      <main className="px-8 md:px-16">
        {/* Intro section */}
        <section
          className="px-8 md:px-16 flex items-center justify-center h-screen md:h-screen text-2xl sm:text-3xl md:text-7xl text-center"
        >
          <div 
            style={{
              fontFamily: "Zen Dots",
            }}
          >
            <h2>THE ORDINARY MAN'S TOKEN</h2>
          </div>
        </section>

        {/* About Section */}
        <section className="h-auto sm:h-screen ">
          <div className="flex flex-col justify-between md:flex-row items-center">
            <div className="flex-col w-full md:w-[50%]">
              <div className="mb-4">
                <h2 className="font-bold text-3xl pb-4">
                  Safeguarding Communities
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div className="mb-8 sm:mb-16">
                <h2 className="font-bold text-3xl pb-4">
                  Empowering Individuals
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>

            <div className="flex md:width-[50%]">
              <img className="align-center" src={bot2} width="300px" />
            </div>
          </div>
        </section>

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
