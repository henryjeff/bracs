import React, { useMemo } from "react";
import { motion, MotionProps } from "framer-motion";
import { Easing, AnimationEasing } from "../../constants/Animation";

export interface AnimatedMountViewProps {
  containerStyles?: React.CSSProperties;
  easing?: AnimationEasing;
  duration?: number;
  motionProps?: MotionProps;
  mountDirection?: "x" | "y" | "none";
  mountInitialOffset?: number;
  delay?: number;
  className?: string;
}

const AnimatedMountView: React.FC<AnimatedMountViewProps> = ({
  containerStyles,
  easing,
  duration,
  motionProps,
  children,
  mountDirection,
  mountInitialOffset,
  delay,
  className,
}) => {
  const positionFinal = useMemo(() => {
    return mountDirection === "x"
      ? { x: 0 }
      : mountDirection === "none"
      ? {}
      : { y: 0 };
  }, [mountDirection]);

  const initialOffset = useMemo(() => {
    return mountInitialOffset || 16;
  }, [mountInitialOffset]);

  const positionInitial = useMemo(() => {
    return mountDirection === "x"
      ? { x: initialOffset }
      : mountDirection === "none"
      ? {}
      : { y: initialOffset };
  }, [initialOffset, mountDirection]);

  const divProps = useMemo(() => {
    return {
      animate: { ...positionFinal, opacity: 1 },
      initial: { ...positionInitial, opacity: 0 },
      transition: {
        ease: Easing[easing || "expOut"],
        duration: duration || 0.4,
        delay,
      },
    };
  }, [positionFinal, positionInitial, duration, easing, delay]);

  return (
    <motion.div
      {...divProps}
      {...motionProps}
      className={className}
      style={containerStyles}
    >
      {children}
    </motion.div>
  );
};

const FadeAnimatedMountView: React.FC<AnimatedMountViewProps> = (props) => {
  return <AnimatedMountView {...props} mountDirection="none" />;
};

export default Object.assign(AnimatedMountView, {
  Fade: FadeAnimatedMountView,
});
