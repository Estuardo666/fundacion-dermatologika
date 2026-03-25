import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono, Varela_Round } from "next/font/google";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Header from "@/components/organisms/Header";
import "./globals.css";

const googleSans = localFont({
  variable: "--font-google-sans",
  src: [
    {
      path: "../../public/fonts/GoogleSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GoogleSans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/GoogleSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GoogleSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const varelaRound = Varela_Round({
  variable: "--font-varela-round",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fundación Dermatológika Transformando Vidas",
  description: "Fundación social y dermatológica enfocada en comunidades vulnerables del sur del Ecuador.",
  icons: {
    icon: "/logos/fav2.png",
    shortcut: "/logos/fav2.png",
    apple: "/logos/fav2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${googleSans.variable} ${geistMono.variable} ${varelaRound.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Header />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
