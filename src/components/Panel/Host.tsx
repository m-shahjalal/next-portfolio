import React from "react";

const Host = () => {
  return (
    <div className="text-yellow-400 flex">
      <p style={{ fontFamily: "Fira Code, monospace" }}>root@shahjalal-$</p>
      <input
        type="text"
        name="command"
        className="fira-code bg-transparent outline-none border-none ml-2 -mt-[2px] text-green-500 w-32"
        style={{ fontFamily: "Fira Code, monospace" }}
      />
    </div>
  );
};

export default Host;
