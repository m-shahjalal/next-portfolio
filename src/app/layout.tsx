import Background from "@/components/Header/Background";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import { jost } from "@/lib/fonts";
import "./globals.css";
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
      <body className={jost.className}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <Background />
      </body>
    </html>
  );
}
