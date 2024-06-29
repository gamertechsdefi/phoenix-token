import "../css/aboutdetails.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function AboutDetails() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref}>
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

      </ul>
    </>
  );
}
