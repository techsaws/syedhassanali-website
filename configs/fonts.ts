import { Manrope, Space_Grotesk } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal"],
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});
