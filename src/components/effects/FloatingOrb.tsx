import { motion } from "framer-motion";

type FloatingOrbProps = {
  size: number;
  color: string;
  top: string;
  left: string;
  duration: number;
};

function FloatingOrb({ size, color, top, left, duration }: FloatingOrbProps) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl"
      style={{
        width: size,
        height: size,
        background: color,
        top,
        left,
      }}
      animate={{
        x: [0, 40, -30, 0],
        y: [0, -50, 30, 0],
        scale: [1, 1.15, 0.9, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default FloatingOrb;
