import {
  Caveat,
  Hanken_Grotesk,
  Inria_Serif,
  Kiwi_Maru,
} from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Toaster, toast } from "sonner";

import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";

const CaveatFont = Caveat({
  weight: ["400", "700"],
  variable: "--font-caveat",
  subsets: ["latin"],
});

const InriaSerif = Inria_Serif({
  weight: ["300", "400", "700"],
  variable: "--font-inria-serif",
  subsets: ["latin"],
});

const HankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

const KiwiMaru = Kiwi_Maru({
  weight: ["300", "400", "500"],
  variable: "--font-kiwi-maru",
  subsets: ["latin"],
});

export const metadata = {
  title: "XTrade Markets – Trade Smarter, Earn Better.",
  description: "Trade Smarter, Earn Better.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${InriaSerif.variable} ${CaveatFont.variable} ${HankenGrotesk.variable} ${KiwiMaru.variable} min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
