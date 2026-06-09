import { InputList, OutputType } from "@/enums/outputType";

export interface Command {
  id?: number;
  input: InputList;
  output: (value?: any) => string;
  type: OutputType;
  trigger?: string;
  inputValue?: string;
}

export const defaultText = "";

export const commands: Command[] = [
  {
    input: InputList.home,
    output: () =>
      `👋 Welcome! I'm Md. Shahjalal — Full-Stack AI Engineer.\nType "help" to see available commands.`,
    type: OutputType.SUCCESS,
  },
  {
    input: InputList.about,
    output: () =>
      `Full-Stack AI Engineer · 4+ yrs experience\nBuilding ERP, Inventory, E-Commerce, SaaS & AI platforms.\nStack: TypeScript · Node.js · NestJS · PostgreSQL · React/Next.js\nFocus: multi-tenant RBAC, DB optimization, cloud infra, team lead.`,
    type: OutputType.INFO,
  },
  {
    input: InputList.works,
    output: () =>
      `Notable Projects:\n\n` +
      `1. AI Mapcast — AI geo-news platform\n   https://mapcast.live\n   Next.js · Hono · PostgreSQL · LeafletJS\n\n` +
      `2. FileKit — File-sharing SaaS\n   https://themeforest.net\n   Node.js · Stripe · PostgreSQL · Magic-link OAuth\n\n` +
      `3. HOMY — E-Commerce platform\n   https://e-homy.vercel.app\n   React · Node.js · MongoDB · Stripe\n\n` +
      `GitHub: https://github.com/m-shahjalal`,
    type: OutputType.LINKS,
  },
  {
    input: InputList.experts,
    output: () =>
      `Frontend:  React · Next.js · Tailwind CSS · TanStack Query/Router\n` +
      `Backend:   Node.js · NestJS · Express · Hono · REST API · Laravel\n` +
      `Auth:      JWT · OAuth 2.0 · RBAC\n` +
      `Database:  PostgreSQL · MongoDB · Prisma · Drizzle · TypeORM\n` +
      `DevOps:    Docker · AWS · GitHub Actions · CI/CD · Vercel · Cloudflare\n` +
      `Domain:    ERP · Inventory · E-Commerce · POS · Multi-tenant SaaS`,
    type: OutputType.INFO,
  },
  {
    input: InputList.contacts,
    output: () =>
      `📧  shahjalal.cloud@gmail.com\n` +
      `📞  +880 1989 942856\n` +
      `🌐  https://m-shahjalal.vercel.app\n` +
      `💼  https://linkedin.com/in/m-shahjalal\n` +
      `🐙  https://github.com/m-shahjalal`,
    type: OutputType.LINKS,
  },
  {
    input: InputList.echo,
    output: (value: any) => value,
    type: OutputType.INFO,
  },
  {
    input: InputList.pwd,
    output: () => "/home/m-shahjalal",
    type: OutputType.INFO,
  },
  {
    input: InputList.notFound,
    output: () => `Command not found. Type "help" for available commands.`,
    type: OutputType.ERROR,
  },
  {
    input: InputList.hello,
    output: () => "Hey! 👋 Type \"about\" to know more about me.",
    type: OutputType.INFO,
  },
  {
    input: InputList.hi,
    output: () => "Hello! 👋 Type \"about\" to know more about me.",
    type: OutputType.INFO,
  },
  {
    input: InputList.fuck,
    output: () => "Easy there 😅 — let's keep it professional.",
    type: OutputType.INFO,
  },
  {
    input: InputList.history,
    output: (value) => value,
    type: OutputType.INFO,
  },
  {
    input: InputList.help,
    output: () => {
      const cmds = [
        ["home", "Welcome message"],
        ["about", "Who I am & what I do"],
        ["works", "Projects I've built"],
        ["experts", "Skills & tech stack"],
        ["contacts", "Ways to reach me"],
        ["pwd", "Current directory"],
        ["history", "Command history"],
        ["echo <text>", "Print text"],
        ["clear", "Clear terminal"],
        ["exit", "Close console"],
      ];
      return (
        "Available commands:\n\n" +
        cmds.map(([cmd, desc]) => `  ${cmd.padEnd(16)}${desc}`).join("\n")
      );
    },
    type: OutputType.HELP,
  },
  {
    input: InputList.exit,
    output: () => "Closing console...",
    type: OutputType.WORN,
  },
];
