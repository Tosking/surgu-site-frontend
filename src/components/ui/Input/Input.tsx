import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = (props: InputProps) => {
  return <input {...props} />;
};

export default Input;
