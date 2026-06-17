import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import NavigationSection from "@/components/NavigationSection";
import FooterSection from "@/components/FooterSection";
import heroImage1 from "../assets/opengraph-home.jpeg";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const url = heroImage1 as unknown as string;

export const metadata: Metadata = {
    openGraph: {
    images: [
      {
        width: 1200,
        height: 627,
        url,
      },
    ],
  },
  title: "Powering Dreams",
  description: "Potential is distributed equally, but opportunity is not. At Powering Dreams, we bridge the gap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased","scroll-smooth", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <NavigationSection/>
        {children}
        <FooterSection/>
        <Toaster/>
      </body>
    </html>
  );
}
