import React from "react";

const Test = ({ text }) => {
  console.log(text);
  return <div className="max-w-none text-black">{text}</div>;
};

export default Test;
