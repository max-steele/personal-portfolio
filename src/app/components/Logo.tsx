"use client";

import Image, { ImageProps } from "next/image";
import { cx } from "../utils/joinClassNames";
import { useTheme } from "../context/ThemeContext";

export const Logo: React.FC<Partial<ImageProps>> = ({
  className,
  ...props
}) => {
  const { theme } = useTheme();
  
  return (
    <Image
      className={cx(className)}
      src={theme === "dark" ? "/media/ms-logo-dark.svg" : "/media/ms-logo.svg"}
      alt={`ms logo`}
      width={16}
      height={16}
      priority
      {...props}
    />
  );
};
