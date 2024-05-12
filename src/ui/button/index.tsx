import React from "react";
import "./index.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "ghost";
}

export default function Button({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`custom-button custom-button--${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
