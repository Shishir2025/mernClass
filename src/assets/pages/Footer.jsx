import React from "react";

const Footer = () => {
  return (
    <div className="bg-black mt-10 flex h-50">

      <div className="text-white flex flex-col gap-5 p-5">

        <h1 className="text-3xl">Footer </h1> <p className="text-2xl"> Powered by w3.css </p>{" "}

        <div className="flex  gap-10">

          <p className="text-2xl">Remember to check out our</p> <button className="bg-white p-3 text-black"> W3.CSS Reference</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
