"use client"

import React, { useRef } from "react";
import { Txt, TxtProps } from "../components/Text";
import { motion } from "framer-motion";
import { useMagneticParallax } from "../utils/useMagneticParallax";

interface MagneticTxtProps extends TxtProps {
  /**
   * offsetPx is passed to each MagneticLetter.
   */
  offsetPx?: number;
  /**
   * duration is passed to each MagneticLetter.
   */
  duration?: number;
}

export const MagneticTxt: React.FC<MagneticTxtProps> = ({
  children,
  offsetPx = 30,
  duration = 0.3,
  ...props
}) => {
  const text = typeof children === "string" ? children : "";

  return (
    <Txt {...props}>
      {text.split("").map((char, index) =>
        char === " " ? (
          <span key={`space-${index}`}>&nbsp;</span>
        ) : (
          <MagneticLetter
            key={index}
            letter={char}
            offsetPx={offsetPx}
            duration={duration}
          />
        )
      )}
    </Txt>
  );
};


interface MagneticLetterProps {
  letter: string;
  /**
   * offsetPx determines the maximum pixel displacement
   * when the mouse is close. Increase to make the effect stronger.
   */
  offsetPx?: number;
  /**
   * duration controls how fast the animation plays.
   */
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const MagneticLetter: React.FC<MagneticLetterProps> = ({
  letter,
  offsetPx = 10,
  duration = 0.7,
  className,
  style,
}) => {
  const elementRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;

  const {
    translateX,
    translateY,
    startMagneticParallax,
    updateMagneticParallax,
    endMagneticParallax,
  } = useMagneticParallax({
    elementRef,
    offsetPx,
    duration,
    isScrollUpdated: false,
  });

  return (
    <motion.span
      ref={elementRef}
      onMouseEnter={startMagneticParallax}
      onMouseMove={updateMagneticParallax}
      onMouseLeave={endMagneticParallax}
      style={{
        x: translateX,
        y: translateY,
        display: "inline-block",
        ...style,
      }}
      className={className}
    >
      {letter}
    </motion.span>
  );
};
