import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astronaut in Space | Scroll-Interactive Storytelling Experience",
  description:
    "An immersive Next.js 16 + GSAP + Lenis scroll-driven 2D layered parallax voyage across deep space, featuring interactive terminals, Web Audio synthesis, and responsive physics.",
  keywords: [
    "Next.js",
    "GSAP",
    "Lenis",
    "ScrollTrigger",
    "Parallax",
    "Space",
    "Astronaut",
    "Web Audio",
    "Interactive UI",
  ],
  authors: [{ name: "Space Mission Team" }],
  openGraph: {
    title: "Astronaut in Space — Interactive Scroll Journey",
    description:
      "Drift through deep space with smooth Lenis scroll physics, GSAP pinned animations, and interactive station terminals.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astronaut in Space | Interactive Scroll Journey",
    description:
      "Drift through deep space with smooth Lenis scroll physics, GSAP pinned animations, and interactive station terminals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
