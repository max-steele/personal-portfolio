"use client";

import { cx } from "../utils/joinClassNames";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  useMagneticParallaxLayers,
  useMagneticParallaxLayersProps,
} from "../utils/useMagneticParallaxLayers";

export type HeroImageLayerProps = React.ComponentProps<typeof HeroImageLayer>;

export const HeroImageLayer: React.FC<
  React.ComponentProps<typeof MotionImage> & {
    level?: number;
    motionValues: useMagneticParallaxLayersProps;
  }
> = ({ level = 1, motionValues, className, style: motionStyle, ...props }) => {
  const transform = useMagneticParallaxLayers({
    ...motionValues,
    scaleUp,
    scaleMore: scaleMore * level,
    translateMore: translateMore * level,
  });

  return (
    <MotionImage
      className={cx(className)}
      style={{
        transform,
        ...motionStyle,
      }}
      sizes={"100vw"}
      {...props}
    />
  );
};

const MotionImage = motion(Image);

const scaleUp = 0.005;
const scaleMore = 0.0025;
const translateMore = 2;
