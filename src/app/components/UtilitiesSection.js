"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Utilities() {
  return (
    <div>
      {/*Utilities section */}
      <motion.section className="px-4">
        <div className="mt-16 ">
          <h1 className="text-2xl font-bold mb-4">PARADIGMS IN DEVELOPMENTS</h1>

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
    </div>
  );
}
