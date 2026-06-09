"use client";

import Image from "next/image";
import logo from "@/images/logo.svg";
import { useEffect, useRef } from "react";

const text =
  "TypeScript Node.js NestJS PostgreSQL React Next.js TailwindCSS Docker AWS GitHub Prisma Drizzle REST API CI/CD Vercel Cloudflare RBAC OAuth JWT MongoDB";

const quotes = [
  "First, solve the problem. Then, write the code. - John Johnson",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
  "The best code is no code at all. - Jeff Atwood",
  "Make it work, make it right, make it fast. - Kent Beck",
  "Simplicity is the soul of efficiency. - Austin Freeman",
  "The function of good software is to make the complex appear simple. - Grady Booch",
  "Talk is cheap. Show me the code. - Linus Torvalds",
  "An API that isn't comprehensible isn't usable. - James Gosling",
  "Clean code always looks like it was written by someone who cares. - Robert C. Martin",
  "In programming, the hard part isn't solving problems, but deciding what problems to solve. - Paul Graham",
];

const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];

const ScrollingText = () => {
  const mouseRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      if (!mouseRef.current) return;
      mouseRef.current.style.left = e.pageX + "px";
      mouseRef.current.style.top = e.pageY + "px";
    });
  });

  return (
    <>
      <div className="mouse-effect" ref={mouseRef} />
      <div className="overflow-hidden inline-block whitespace-nowrap fixed -left-full animate-scroll -top-10 text-[200px] opacity-[.02] font-bold">
        {text}
      </div>
      <Image
        className="absolute opacity-[.2]"
        src={logo}
        height={250}
        width={250}
        alt="logo"
      />
      <div className="overflow-hidden inline-block whitespace-nowrap fixed  left-full opacity-[.02] animate-scrollReverse -bottom-10 text-[200px] font-bold">
        {selectedQuote}
      </div>
    </>
  );
};

export default ScrollingText;
