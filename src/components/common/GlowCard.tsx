import { motion } from "framer-motion";

import { ReactNode, useState } from "react";

type GlowCardProps = {
  children: ReactNode;
};

function GlowCard({ children }: GlowCardProps) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-8
      "
    >
      {/* Dynamic Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          hover:opacity-100
          transition-opacity
          duration-500
        "
        style={{
          background: `
            radial-gradient(
              600px circle at
              ${position.x}px ${position.y}px,
              rgba(0,255,255,0.12),
              transparent 40%
            )
          `,
        }}
      />

      {/* Border Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-3xl
          border
          border-cyan-400/10
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default GlowCard;
