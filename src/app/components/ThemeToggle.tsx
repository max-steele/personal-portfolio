"use client";

import style from "./ThemeToggle.module.css";
import { cx } from "../utils/joinClassNames";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Txt } from "./Text";

export const ThemeToggle: React.FC<React.ComponentProps<"button">> = ({
  className,
  ...props
}) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={cx(className, style.ThemeToggle)}
      {...props}
    >
      <Txt fg={2}>
        <span>{theme === "light" ? "☀️" : "🌙"}</span>
      </Txt>
    </button>
  );
}; 