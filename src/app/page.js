"use client";
import { useEffect, useRef, useState } from "react";

import { motion, useAnimate, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import Header from "./components/header";
import Intro from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import Partners from "./components/Partners";
import Utilities from "./components/UtilitiesSection";
import Tokenomics from "./components/tokenomics";
import Roadmap from "./components/Roadmap";
import Chart from "./components/Chart";
import { Footer } from "./components/Footer";
import FAQs from "./components/faqs";
import BrandAsset from "./components/BrandAsset";
import AuditPage from "./components/Audit";

export default function Home() {
  
  return (
    <div>
      <Header/>
      <Intro />
      <AboutSection />
      <Chart />
      <Partners />
      <Utilities />
      <Tokenomics />
      <AuditPage />
      <Roadmap />
      <BrandAsset />
      <FAQs />
      <Footer />

    </div>
  );
}
