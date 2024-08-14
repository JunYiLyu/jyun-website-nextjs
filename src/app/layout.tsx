import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/nav/navbar";

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
        <div className="my-10 pr-10 w-full flex justify-end">
            <a target="_blank" href="https://icons8.com/icon/4m1WFHgjx88b/j">J</a><span className="mx-1">{' '}icon by{' '}</span><a target="_blank" href="https://icons8.com">Icons8</a>
          </div>
      </body>
    </html>
  );
}
