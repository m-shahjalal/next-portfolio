import { Fira_Code } from "next/font/google";
import { FormEvent, LegacyRef, forwardRef, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const firaCode = Fira_Code({
  weight: "400",
  preload: false,
});

const Host = forwardRef(function Host(
  _,
  ref: LegacyRef<HTMLInputElement> | undefined
) {
  const [value, setValue] = useState("Type something cool🥶!");

  const handleTrigger = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div className={`text-yellow-400 flex ${firaCode.className}`}>
      <p
        className="flex justify-center items-center"
        style={{ fontFamily: "Fira Code, monospace" }}
      >
        root <FaLongArrowAltRight size="20px" />
      </p>
      <form onSubmit={handleTrigger}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={ref}
          type="text"
          name="command"
          className="bg-transparent outline-none ml-1 -mt-[2px] text-green-500 w-full"
        />
      </form>
    </div>
  );
});

export default Host;
