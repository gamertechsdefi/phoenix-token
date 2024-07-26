"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const war = "/images/war_partner.png";
const dtg = "/images/dtg_parner.png";
const smcdao = "/images/smcdao_partner.png";
const wkc = "/images/wkc_partner.png";
const btcdragon = "/images/btcdragon_partner.png";
const yukan = "/images/yukan_partner.png";

export default function Partners() {
  return (
    <div>
      <section className="bg-white text-gray-900 p-8 mb:p-16 md:py-16">
        <div className="flex flex-col">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">OUR PARTNERS</h2>
            <p>
              In our ongoing commitment to excellence and innovation, we have
              forged strategic alliances with some of the most influential and
              groundbreaking projects in the blockchain space.
              Our goal is to harness the collective expertise and cutting-edge
              technology of these projects to deliver unparalleled value and
              opportunities to our community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 justify-center ">
              <Image className="hover:bg-gray-100" src={smcdao} alt="DTG token" width={200} height={200} />
              <Image src={wkc} alt="DTG token" width={200} height={200} />
              <Image src={dtg} alt="DTG token" width={200} height={200} />
              <Image src={war} alt="DTG token" width={200} height={200} />
              <Image src={btcdragon} alt="DTG token" width={200} height={200} />
              <Image src={yukan} alt="DTG token" width={200} height={200} />
          </div>
        </div>
      </section>
    </div>
  );
}
