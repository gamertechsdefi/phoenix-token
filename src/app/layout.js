import { Inter, Zen_Dots, Space_Mono} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({subsets: ["latin"], weight: "400"});
const zenDots = Zen_Dots ({subsets: ["latin"], weight: "400"});

export const metadata = {
  title: "Phoenix Token",
  description: "The Ordinary Man's Token",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>{children}</body>
    </html>
  );
}
