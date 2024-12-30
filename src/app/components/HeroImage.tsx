"use client";

import { cx } from "../utils/joinClassNames";
import style from "./HeroImage.module.css";
import { useMagneticParallax } from "../utils/useMagneticParallax";
import { CSSProperties, useCallback, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { HeroImageLayer, HeroImageLayerProps } from "./HeroImageLayer";
import { useRouter } from "next/navigation";
import { globalMouse } from "../utils/globalMouse";

export type HeroImageProps = React.ComponentProps<typeof HeroImage>;

export const HeroImage: React.FC<
  React.ComponentProps<typeof motion.div> & {
    imageLayers: Omit<HeroImageLayerProps, "motionValues">[];
    href?: string; // LinkProps["href"];
    external?: boolean;
    maxScale?: number;
  }
> = ({ className, imageLayers, href, external, maxScale = 1, ...props }) => {
  const elementRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
  const router = useRouter();

  const {
    translateX,
    translateY,
    updateMagneticParallax,
    endMagneticParallax,
  } = useMagneticParallax({
    elementRef,
    offsetPx: 8,
    duration,
    isScrollUpdated: true,
  });

  const scaleMagnetic = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"],
  });

  const [isRunning, setIsRunning] = useState(false);

  const runAnimation = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      animate(scaleMagnetic, maxScale, { duration, ease: "easeInOut" });
    }
    updateMagneticParallax();
  }, [isRunning, scaleMagnetic, updateMagneticParallax, maxScale]);

  const endAnimation = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
      endMagneticParallax();
      animate(scaleMagnetic, 0, { duration, ease: "easeInOut" });
    }
  }, [isRunning, scaleMagnetic, endMagneticParallax]);

  useMotionValueEvent(scrollYProgress, "change", () => {
    const {
      top = 0,
      right = window.innerWidth,
      bottom = window.innerHeight,
      left = 0,
    } = elementRef.current?.getBoundingClientRect() || {};

    const { x, y } = globalMouse;

    const isHovered =
      y >= 0 && x >= 0 && y > top && y < bottom && x > left && x < right;
    if (isHovered) {
      runAnimation();
    } else {
      endAnimation();
    }
  });

  const customVar = { "--duration": duration + "s" } as CSSProperties;

  return (
    <motion.div
      className={cx(
        className,
        style.ImageLayers,
        href && style.ImageLink // hover cursor if href
      )}
      ref={elementRef as React.RefObject<HTMLDivElement>}
      onClick={() => {
        if (!href) return;
        if (external) window.open(href);
        else router.push(href);
      }}
      onHoverStart={runAnimation}
      onHoverEnd={endAnimation}
      onMouseMove={runAnimation}
      style={customVar}
      {...props}
    >
      {imageLayers.map(
        (
          {
            className: layerClassName,
            style: layerStyle,
            level,
            ...layerProps
          },
          i
        ) => (
          <HeroImageLayer
            key={i}
            className={cx(layerClassName, style.ImageLayer)}
            motionValues={{
              translateX,
              translateY,
              scale0: scaleMagnetic,
            }}
            level={level || i + 1}
            style={{
              position: i == 0 ? "relative" : undefined, // first layer determines size
              ...layerStyle,
            }}
            {...layerProps}
          />
        )
      )}
    </motion.div>
  );
};

const duration = 0.15;
