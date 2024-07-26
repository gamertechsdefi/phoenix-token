"use client";

import { motion } from "framer-motion";

export default function Chart() {
  return (
    <div>
      {/*Chart section */}
      <section className="">
        <div className="items-center">
          <div>
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "orange" }}>
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
              @media (max-width: 768px) {
                #dexscreener-embed {
                  width: 100vw;
                  height: 100vh;
                  padding-bottom: 0;
                }
                #dexscreener-embed iframe {
                  height: 100%;
                }
              }
              #dexscreener-embed iframe {
                position: absolute;
                width: 100%;
                height: 70%;
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
    </div>
  );
}