import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Background from "@/components/Header/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shahjalal -Portfolio",
  description: "A creation of shahjalal's works",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <Background />
      </body>
    </html>
  );
}
