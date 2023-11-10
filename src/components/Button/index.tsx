import React from "react";
import "./styles.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "white" | "black" | "transparent";
  size?: "normal" | "large";
};

function Button({ children, variant, className, size }: ButtonProps) {
  return (
    <button
      className={
        `button button--${variant ? variant : "transparent"}` +
        ` button--size--${size ? size : "normal"}` +
        (className ? ` ${className}` : "") 
      }
    >
      {children}
    </button>
  );
}

export default Button;
