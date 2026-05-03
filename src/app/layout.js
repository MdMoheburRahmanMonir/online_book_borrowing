import dns from 'node:dns';
dns.setServers(["8.8.8.8", "8.8.4.4"])

import { Geist, Geist_Mono, Josefin_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/Shared/NavBar";
import Footer from '@/Components/Shared/Footer';
import { ToastContainer } from 'react-toastify';
import { NameContext } from '@/Context/ContextProvider';
import { SmoothCursor } from '@/Components/ui/smooth-cursor';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],

});

export const metadata = {
  title: "BookHub",
  description: "Unlock a world of stories! Borrow your favorite books online at affordable rates. Join our community of readers today and enjoy doorstep delivery of bestsellers and classics",
};

export default async function RootLayout({ children }) {
  const data = await fetch(process.env.FETCH_URL)
  const res = await data.json(); 
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${Josefin.variable} h-full antialiased`}
      data-theme='dark'
    >
      <body className="min-h-full flex flex-col !text-white">
        <SmoothCursor />
        <NameContext value={res}>
          <ToastContainer position="top-left" theme="dark" closeOnClick='true' />
          <NavBar />
          {children}
          <Footer />
        </NameContext>
      </body>
    </html>
  );
}
