import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";

import Cursor from "@/components/cursor";
import SmoothScroll from "@/components/smooth-scroll";
import NoiseBackground from "@/components/noise-background";
import Header from "@/components/header";
import Main from "@/components/main";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Takumi Honjo - Frontend Developer",
  description:
    "Takumi Honjo is a frontend developer based in Tashkent, Uzbekistan.",
};

const fontSans = localFont({
  display: "swap",
  src: "./fonts/Ogg-Roman/Ogg-Roman.woff2",
  variable: "--font-sans",
});

const fontMono = localFont({
  display: "swap",
  src: "./fonts/CentSchbook-Mono-BT/CentSchbook-Mono-BT.woff2",
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable}`}>
        <div className="flex min-h-dvh flex-col">
          <Cursor />
          <SmoothScroll>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </SmoothScroll>
          <NoiseBackground />
        </div>
      </body>
    </html>
  );
}
