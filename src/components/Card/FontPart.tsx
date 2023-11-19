import logo from "@/images/logo.svg";
import qr from "@/images/frame.svg";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiFacebookLogoDuotone } from "react-icons/pi";

const contacts = [
  {
    id: 1,
    name: "mohammad.sj25@gmail.com",
    url: "mailto:mohammad.sj25@gmail.com",
    icon: MdOutlineAlternateEmail,
    color: "#c71610",
  },
  {
    id: 2,
    name: "github.com/m-shahjalal",
    url: "https://github.com/m-shahjalal",
    icon: FaGithubAlt,
    color: "#636263",
  },
  {
    id: 3,
    name: "linkedin.com/in/m-shahjalal",
    url: "https://linkedin.com/in/m-shahjalal",
    icon: FiLinkedin,
    color: "#0A66C2",
  },
  {
    id: 4,
    name: "01303327356",
    url: "https://wa.link/ng77pn",
    icon: FaWhatsapp,
    color: "#128C7E",
  },
  {
    id: 5,
    name: "facebook.com/lx.shahjalal",
    url: "https://facebook.com/lx.shahjalal",
    icon: PiFacebookLogoDuotone,
    color: "#0165E1",
  },
];

const FontPart = () => {
  return (
    <div className="flex w-full h-full justify-between items-center  p-10">
      <div className="flex-1 flex justify-center items-center flex-col gap-2">
        <Image src={logo} width={50} height={50} alt="logo" />
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="text-3xl uppercase">Md Shahjalal</h1>
          <p>Fullstack Software Engineer</p>
        </div>
      </div>
      <hr className="h-full border-r my-10" />
      <div className="flex-1 flex flex-col justify-between h-full items-end text-lg gap-2">
        <Image
          src={qr}
          alt="logo"
          className="w-24 backdrop-blur-lg border p-0 rounded-lg"
        />
        <div className="flex flex-col justify-end h-full items-end text-base pb-2 gap-3">
          {contacts.map((item) => (
            <div key={item.id} className="flex gap-2 items-center">
              <a target="_blank" href={item.url}>
                {item.name}
              </a>
              <item.icon color={item.color} size="24px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FontPart;
