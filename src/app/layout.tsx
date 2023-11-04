import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { promises as fs } from "fs";
import Particles from "@/components/Particles/Particles";

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
  const file = await fs.readFile(
    process.cwd() + "/src/app/particles.json",
    "utf8"
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Particles options={JSON.parse(file)} />
      </body>
    </html>
  );
}
