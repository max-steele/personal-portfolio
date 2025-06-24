"use client";
import { motion } from "framer-motion";
import React, { CSSProperties, useRef } from "react";
import style from "./MotionDivWrapper.module.css";
import { useMagneticParallax } from "../utils/useMagneticParallax";
import { useGrowParallax } from "../utils/useGrowParallax";
import { useClickScale } from "../utils/useClickScale";
import { cx } from "../utils/joinClassNames";

const MotionDiv = motion.div;

export type MotionDivWrapperProps = React.ComponentProps<typeof MotionDiv> & {
  offsetPx?: number;
  duration?: number;
  classNameBg?: string;
  classNameInside?: string;
  type?: "minimal" | "outline" | "emphasis";
};

export const MotionDivWrapper: React.FC<MotionDivWrapperProps> = ({
  children,
  className,
  offsetPx = 24,
  duration = 0.15,
  classNameBg,
  classNameInside,
  type = "minimal",
  ...props
}) => {
	const elementRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;

  const {
    translateX: magneticTranslateX,
    translateY: magneticTranslateY,
    startMagneticParallax,
    updateMagneticParallax,
    endMagneticParallax,
  } = useMagneticParallax({
    elementRef,
    offsetPx: offsetPx / 2,
    duration,
  });

  const {
    translateX: growTranslateX,
    translateY: growTranslateY,
    transformOrigin: growTransformOrigin,
    scale: growScale,
    opacity: growOpacity,
    startGrowParallax,
    updateGrowParallax,
    endGrowParallax,
  } = useGrowParallax({
    elementRef,
    offsetPx,
    duration,
  });

  const {
    scale: clickScale,
    startClickScale,
    endClickScale,
  } = useClickScale({
    elementRef,
    scalePx: 4,
    duration,
    clickDuration,
  });

  const customVar = {
    "--motion-div-duration": `${duration}s`,
    "--motion-div-click-duration": `${clickDuration}s`,
  } as CSSProperties;

  return (
    <MotionDiv
      className={cx(
        className,
        style.MotionDivWrapper,
        type === "outline"
          ? style.MotionDivOutline
          : type === "emphasis"
          ? style.MotionDivEmphasis
          : undefined
      )}
      style={customVar}
      ref={elementRef as React.RefObject<HTMLDivElement>}
      onHoverStart={() => {
        startMagneticParallax();
        startGrowParallax();
        startClickScale();
      }}
      onHoverEnd={() => {
        endMagneticParallax();
        endGrowParallax();
        endClickScale();
      }}
      onMouseMove={() => {
        updateMagneticParallax();
        updateGrowParallax();
      }}
      {...props}
    >
      <motion.div
        className={cx(classNameBg, style.MotionDivBg)}
        style={{
          x: growTranslateX,
          y: growTranslateY,
          transformOrigin: growTransformOrigin,
          scale: growScale,
          opacity: growOpacity,
        }}
      />
      <motion.div
        className={cx(classNameInside, style.MotionDivInside)}
        style={{
          x: magneticTranslateX,
          y: magneticTranslateY,
          scale: clickScale,
          transformOrigin: "50% 50%",
        }}
      >
        {children}
      </motion.div>
    </MotionDiv>
  );
};

const clickDuration = 0.1;
