/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface buttonProps {
  style: string;
  text: string;
  children?: any;
  onClick?: () => void;
}

const Button: React.FC<buttonProps> = ({ style, text, onClick, children }) => {
  return (
    <button className={`${style}`} type="button" onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;
