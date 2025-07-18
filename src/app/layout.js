import { Inter, Zen_Dots, Space_Mono, Work_Sans} from "next/font/google";
import "./globals.css";
import Analytics from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const spacemono = Space_Mono({subsets: ["latin"], weight: "400"});
const zenDots = Zen_Dots ({subsets: ["latin"], weight: "400"});
const workSans = Work_Sans ({ subsets: ['latin']});

export const metadata = {
  title: "Phoenix Token",
  description: "The Ordinary Man's Token",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://voltichange.net/css/widget.css" />
      </head>
      <body className={spacemono.className}>{children}</body>
      <Analytics />
    </html>
  );
}
