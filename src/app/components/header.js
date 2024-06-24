"use client";
import {useState } from "react";
import "next/image";
import { AnimatePresence, motion } from "framer-motion";

const logoImage = "/images/logo_blank.png";

const navVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: "300",
      delay: -0.2,
      duration: 2,
    },
  },
};

const popupButtonVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: "-100vh",
    transition: {
      duration: 2,
    },
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white sticky top-0 z-100 items-center">
      <motion.div
        // variants={navVariants}
        // initial="hidden"
        // animate="visible"
        className="flex mx-4 items-center md:mx-8"
      >
        <div className="my-2 flex items-center">
          <img src={logoImage} width="50px" className="mr-2" />
          <span className="font-bold">Phoenix</span>
        </div>
        <div className="justify-end flex flex-grow">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className=" font-bold hover:text-[white] relative flex"
          >
            <span className="">Menu</span>
          </motion.button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={popupButtonVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-8 flex flex-col absolute p-4 px-8 rounded-sm "
              >
                <motion.ul
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col cursor-pointer"
                >
                  <a
                    target="blank"
                    href="https://phoenixtoken.community"
                    className="hover:text-gray-500 mb-1"
                  >
                    Home
                  </a>
                  <a
                  target="blank"
                    href="https://t.me/PhoenixToken0"
                    className="hover:text-gray-500 mb-1"
                  >
                    Telegram
                  </a>
                  <a
                  target="blank"
                    href="https://x.com/PhoenixToken0"
                    className="hover:text-gray-500 mb-1"
                  >
                    Twitter
                  </a>
                  <a
                  target="blank"
                    href="https://medium.com/@phoenixtoken"
                    className="hover:text-gray-500 mb-1"
                  >
                    Medium
                  </a>
                  <a
                  target="blank"
                    href="https://warpcast.com/phoenixtoken"
                    className="hover:text-gray-500 mb-1"
                  >
                    Warpcaster
                  </a>
                  <a target="blank" href="https://pancakeswap.finance/swap?outputCurrency=0x885c99a787BE6b41cbf964174C771A9f7ec48e04">
                    <button className="bg-gray-500 text-white font-bold rounded-[5px] p-1 hover:bg-gray-100 hover:text-[red]">
                      Buy now
                    </button>{" "}
                  </a>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </nav>
  );
}
