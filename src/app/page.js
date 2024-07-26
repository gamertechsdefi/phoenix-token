"use client";
import { useEffect, useRef, useState } from "react";

import { motion, useAnimate, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import Header from "./components/header";
import Intro from "./components/IntroSection";
import AbourtSection from "./components/AboutSection";
import Partners from "./components/Partners";
import Utilities from "./components/UtilitiesSection";
import Tokenomics from "./components/tokenomics";
import Roadmap from "./components/Roadmap";
import Chart from "./components/Chart";
import { Footer } from "./components/Footer";

export default function Home() {
  
  return (
    <div>
      <Header/>
      <Intro />
      <AbourtSection />
      <Chart />
      <Partners />
      <Utilities />
      <Tokenomics />
      <Roadmap />
      <Footer />

    </div>
  );
}
