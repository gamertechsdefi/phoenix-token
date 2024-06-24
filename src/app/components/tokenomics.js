import { useState, useEffect } from 'react';

const Tokenomics = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-red-800 text-white py-16 px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">TOKENOMICS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isDesktop ? (
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-center">
            <div className="relative w-64 h-64 rounded-full border-4 border-orange-500">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold">
                10M
              </div>
            </div>
            <p className="text-xl font-medium mt-4">Total Supply</p>
          </div>
        ) : (
          <></>
        )}

        <div className="flex flex-col items-center">
          <div className="flex items-center mt-4">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m7 7v2m4-2v4M5 11V9M9 9l4 4M9 9l-4 4m4-4v4"
                />
              </svg>
            </div>
            <p className="text-lg font-medium ml-4">REWARDS</p>
          </div>

          <ul className="list-none mb-4">
            <li className="flex items-center mb-2">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m7 7v2m4-2v4M5 11V9M9 9l4 4M9 9l-4 4m4-4v4"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium ml-4">Initial Burn - 10%</p>
            </li>

            <li className="flex items-center mb-2">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m7 7v2m4-2v4M5 11V9M9 9l4 4M9 9l-4 4m4-4v4"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium ml-4">Airdrop - 2%</p>
            </li>

            <li className="flex items-center mb-2">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m7 7v2m4-2v4M5 11V9M9 9l4 4M9 9l-4 4m4-4v4"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium ml-4">CEX Listing - 3%</p>
            </li>

            <li className="flex items-center mb-2">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m7 7v2m4-2v4M5 11V9M9 9l4 4M9 9l-4 4m4-4v4"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium ml-4">Charity - 5%</p>
            </li>

            <li className="flex items-center mb-2">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m7 7v2m4-2v4M5 11V9M9 9l4 4M9 9l-4 4m4-4v4"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium ml-4">Marketing & Development - 5%</p>
            </li>

            <li className="flex items-center mb-2">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m7 7v2m4-2v4M5 11V9M9 9l4 4M9 9l-4 4m4-4v4"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium ml-4">Team - 10%</p>
            </li>

            <li className="flex items-center mb-2">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m7 7v2m4-2v4M5 11V9M9 9l4 4M9 9l-4 4m4-4v4"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium ml-4">Foundation - 18%</p>
            </li>

            <li className="flex items-center mb-2">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m7 7v2m4-2v4M5 11V9M9 9l4 4M9 9l-4 4m4-4v4"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium ml-4">Liquidity - 22%</p>
            </li>

            <li className="flex items-center mb-2">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m7 7v2m4-2v4M5 11V9M9 9l4 4M9 9l-4 4m4-4v4"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium ml-4">Treasury - 25%</p>
            </li>

            <li className="flex items-center mb-2">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m7 7v2m4-2v4M5 11V9M9 9l4 4M9 9l-4 4m4-4v4"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium ml-4">2%</p>
            </li>

            <li className="flex items-center mb-2">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m7 7v2m4-2v4M5 11V9M9 9l4 4M9 9l-4 4m4-4v4"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium ml-4">BURN - 1%</p>
            </li>

            <li className="flex items-center mb-2">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m7 7v2m4-2v4M5 11V9M9 9l4 4M9 9l-4 4m4-4v4"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium ml-4">MARKETING</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;