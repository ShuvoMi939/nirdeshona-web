import type { Metadata } from "next";
import { Geist, Geist_Mono, Anek_Bangla } from "next/font/google";
import "./globals.css";

import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anekBangla = Anek_Bangla({
  variable: "--font-anek-bangla",
  weight: ["400", "700"],
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "Nirdeshona",
  description: "Empowering students with guidance",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anekBangla.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1 container mx-auto p-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
