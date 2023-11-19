import Background from "@/components/Header/Background";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const font = Jost({ subsets: ["latin"] });
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
    <html suppressHydrationWarning={true} lang="en">
      <body className={font.className}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <Background />
      </body>
    </html>
  );
}
