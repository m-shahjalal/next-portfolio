import { InputList, OutputType } from "@/enums/outputType";

export const commands = [
  {
    input: InputList.home,
    output: () => "🔥Welcome to Nerd World!",
    type: OutputType.SUCCESS,
  },
  {
    input: InputList.about,
    output: () =>
      "Once, I learned HTML to hack NASA 🚀, but I failed, since than, I started learning technologies to hack myself.",
    type: OutputType.INFO,
  },
  {
    input: InputList.notFound,
    output: () =>
      "Sad, Command not found!, Actually, I'm not myself today! I need a party.🥶",
    type: OutputType.ERROR,
  },
  {
    input: InputList.works,
    output: () => "https://github.com/m-shahjalal",
    type: OutputType.LINKS,
    trigger: "project_list",
  },
  {
    input: InputList.experts,
    output: () => "NextJS, VueJS, NodeJS, Laravel, Docker, AWS",
    type: OutputType.INFO,
  },
  {
    input: InputList.contacts,
    output: () => "https://linkedin.com/in/m-shahjalal",
    type: OutputType.LINKS,
  },
  {
    input: InputList.echo,
    output: (value: any) => value,
    type: OutputType.INFO,
  },
  {
    input: InputList.pwd,
    output: (value: any) => value,
    type: OutputType.INFO
  },
  {
    input: InputList.
  }
];
