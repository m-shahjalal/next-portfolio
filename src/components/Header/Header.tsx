import Image from "next/image";
import React from "react";
import logo from "@/images/logo.svg";

const Header = () => {
  return (
    <div className="z-50 fixed top-4 right-10 left-10">
      <div className="flex justify-between items-center">
        <div className="h-12"></div>
      </div>
    </div>
  );
};

export default Header;
