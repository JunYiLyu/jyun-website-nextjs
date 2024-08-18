import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/navbar";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jyun's Website",
  description: "Jyun's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <div className="my-10 w-full flex flex-col border-t-4 justify-center items-center">
      <div className="flex mt-5">
        <Link href="https://www.linkedin.com/in/jyun-yi-lyu-127453188/" target="_blank" className="mx-2">
          <LinkedInIcon className="hover:drop-shadow-lg "/>
        </Link>
        <Link href="https://github.com/JunYiLyu" target="_blank" className="">
          <GitHubIcon className="hover:drop-shadow-lg "/>
        </Link>
      </div>
    </div>
  );
}
