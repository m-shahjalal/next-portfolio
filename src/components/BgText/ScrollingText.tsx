"use client";

import Image from "next/image";
import logo from "@/images/logo.svg";
import { useEffect, useRef } from "react";

const text =
  "JavaScript NodeJS TypeScript PHP Laravel VueJS NextJS Linux SQL Git Docker";
const quotes = [
  "Code is like humor. When you have to explain it, it's bad. - Cory House",
  "Of course, bad code can be cleaned up. But it's very expensive.” — Robert C. Martin",
  "Software is like sex: it's better when it's free. - Linus Torvalds",
  "There is always one more bug to fix.  - Ellen Ullman",
  "Talk is cheap. Show me the code. ― Linus Torvalds",
  "If, at first, you do not succeed, call it version 1.0. ― Khayri R.R. Woulfe",
  "Computers are fast; developers keep them slow. - Anonymous",
  "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
  "Programming is the art of algorithm design and the craft of debugging errant code. - Ellen Ullman",
  "Confusion is part of programming. ― Felienne Hermans",
];

const selectedQuote = quotes[Math.floor(Math.random() * 10)];

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
