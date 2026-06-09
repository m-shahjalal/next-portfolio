import { Fira_Code, Jost } from "next/font/google";

// Single shared instances — Next.js deduplicates when the same options are used
export const jost = Jost({ subsets: ["latin"], display: "swap" });
export const firaCode = Fira_Code({ weight: "400", subsets: ["latin"], display: "swap", preload: false });
