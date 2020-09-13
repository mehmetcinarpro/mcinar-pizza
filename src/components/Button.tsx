import React from "react";
import classNames from "classnames";

interface ButtonProps {
  className?: string;
  outline?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  outline = false,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
