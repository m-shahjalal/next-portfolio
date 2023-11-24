import { InputList, OutputType } from "@/enums/outputType";

export interface Command {
  id?: number;
  input: InputList;
  output: (value?: any) => string;
  type: OutputType;
  trigger?: string;
  inputValue?: string;
}
export const defaultText: string = "type something cool!🥶";
export const commands: Command[] = [
  {
    input: InputList.home,
    output: () => "🔥Welcome to Nerd World!",
    type: OutputType.SUCCESS,
  },
  {
    input: InputList.about,
    output: () =>
      "Once, I learned HTML to hack NASA 🚀, but I failed, since than, trying to hack myself.",
    type: OutputType.INFO,
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
    output: () => "/shahjalal",
    type: OutputType.INFO,
  },
  {
    input: InputList.notFound,
    output: () =>
      "Sad, Command not found!, Actually, I'm not myself today! I need a party.🥶",
    type: OutputType.ERROR,
  },
  {
    input: InputList.hello,
    output: (value) => "Hi",
    type: OutputType.INFO,
  },
  {
    input: InputList.hi,
    output: (value) => "Hello",
    type: OutputType.INFO,
  },
  {
    input: InputList.fuck,
    output: (value) => "I see your vocabulary's working out at the gym.",
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
      const list = Object.values(InputList)
        .map((item, index) => `${index + 1}. ${item}`)
        .join("\n");
      return `Those are valid commands, Try them\n ${list}`;
    },
    type: OutputType.HELP,
  },
  {
    input: InputList.exit,
    output: () => "exit!",
    type: OutputType.WORN,
  }
];
