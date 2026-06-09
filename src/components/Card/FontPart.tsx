import qr from "@/images/frame.svg";
import Image from "next/image";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGithubAlt } from "react-icons/fa";
import { FiLinkedin, FiExternalLink } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const contacts = [
  {
    id: 1,
    name: "shahjalal.cloud@gmail.com",
    url: "mailto:shahjalal.cloud@gmail.com",
    icon: MdOutlineAlternateEmail,
    color: "#f87171",
  },
  {
    id: 2,
    name: "github.com/m-shahjalal",
    url: "https://github.com/m-shahjalal",
    icon: FaGithubAlt,
    color: "#94a3b8",
  },
  {
    id: 3,
    name: "linkedin.com/in/m-shahjalal",
    url: "https://linkedin.com/in/m-shahjalal",
    icon: FiLinkedin,
    color: "#38bdf8",
  },
  {
    id: 4,
    name: "m-shahjalal.vercel.app",
    url: "https://m-shahjalal.vercel.app",
    icon: FiExternalLink,
    color: "#34d399",
  },
];

const skills = [
  "TypeScript", "Next.js", "NestJS", "Node.js", "PostgreSQL", "Docker", "AWS",
];

const FontPart = () => {
  return (
    <div className="relative flex flex-col md:flex-row w-full h-full p-6 md:p-7 gap-5 md:gap-6 text-[#e2e8f0] md:overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-emerald-500/5 blur-[50px] pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-cyan-500/5 blur-[50px] pointer-events-none" />

      {/* Left — Identity */}
      <div className="flex-1 flex flex-col justify-between z-10 gap-4 md:gap-0">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-cyan-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.08)] hover:border-emerald-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all duration-500 group">
            {/* Pulsing indicator dot */}
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-[#03030d] animate-pulse" />
            <span className="text-sm font-black tracking-wider bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-mono select-none">
              MS
            </span>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wide text-white leading-tight hover:text-emerald-300 transition-colors duration-300 cursor-default">
              Md. Shahjalal
            </h1>
            <p className="text-[10px] text-emerald-400/90 font-mono tracking-widest uppercase mt-0.5">
              Full-Stack AI Engineer
            </p>
            <p className="text-[10px] text-slate-500 font-mono flex items-center gap-1 mt-0.5">
              <HiOutlineLocationMarker size={11} className="text-emerald-500/50" />
              Dhaka, Bangladesh · 4+ yrs
            </p>
          </div>
        </div>

        {/* Summary */}
        <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-3 select-none">
          Full-Stack AI Engineer building ERP, Inventory, SaaS & AI platforms.
          TypeScript · Node.js · NestJS · PostgreSQL. Technical ownership
          from HLD/LLD to production.
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {skills.map((s) => (
            <span
              key={s}
              className="text-[9px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 text-slate-400 hover:text-emerald-300 font-mono transition-all duration-300 shadow-[0_2px_5px_rgba(0,0,0,0.2)] cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent self-stretch z-10" />

      {/* Right — Contact + QR */}
      <div className="flex flex-col justify-end md:justify-between items-stretch md:items-end gap-3 z-10 w-full md:w-auto md:min-w-[170px] shrink-0">
        {/* QR Code Wrapper with subtle glowing effect (hidden on mobile) */}
        <div className="hidden md:block relative group shrink-0">
          <div className="absolute inset-0 bg-cyan-500/10 blur-md rounded-lg opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
          <Image
            src={qr}
            alt="qr code"
            width={76}
            height={76}
            className="relative rounded-lg border border-white/10 bg-[#03030d]/80 p-1.5 transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Links */}
        <div className="flex flex-col gap-1.5 w-full items-stretch md:items-end">
          {contacts.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2.5 items-center px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 hover:bg-emerald-500/5 transition-all duration-300 group w-full justify-between md:justify-end shadow-sm"
            >
              <span className="text-[10px] text-slate-400 group-hover:text-emerald-300 transition-colors duration-300 font-mono truncate max-w-[200px] md:max-w-[130px]">
                {item.name}
              </span>
              <item.icon
                size={14}
                color={item.color}
                className="shrink-0 group-hover:scale-110 group-hover:drop-shadow-[0_0_4px_rgba(16,185,129,0.3)] transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FontPart;
