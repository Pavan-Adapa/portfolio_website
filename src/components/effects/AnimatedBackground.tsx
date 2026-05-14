import { motion } from "framer-motion";

import FloatingOrb from "./FloatingOrb";

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* ANIMATED BASE BACKGROUND */}
      <motion.div
        animate={{
          background: [
            `
            radial-gradient(circle at top left,
            rgba(0,255,255,0.15),
            transparent 30%),

            radial-gradient(circle at bottom right,
            rgba(255,0,255,0.12),
            transparent 35%),

            #050816
            `,

            `
            radial-gradient(circle at top right,
            rgba(139,92,246,0.18),
            transparent 35%),

            radial-gradient(circle at bottom left,
            rgba(0,255,255,0.10),
            transparent 40%),

            #070B1A
            `,

            `
            radial-gradient(circle at center,
            rgba(255,0,255,0.14),
            transparent 40%),

            radial-gradient(circle at top left,
            rgba(0,255,255,0.08),
            transparent 35%),

            #040814
            `,
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      />

      {/* GRID */}
      <div className="absolute inset-0 animated-grid opacity-20" />

      {/* CYAN GLOW */}
      <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          -left-40
          h-[700px]
          w-[700px]
          rounded-full
          bg-cyan-500/20
          blur-[140px]
        "
      />

      {/* PINK GLOW */}
      <motion.div
        animate={{
          opacity: [0.15, 0.4, 0.15],
          scale: [1.1, 0.95, 1.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-20
          right-[-200px]
          h-[800px]
          w-[800px]
          rounded-full
          bg-fuchsia-500/20
          blur-[160px]
        "
      />

      {/* PURPLE GLOW */}
      <motion.div
        animate={{
          opacity: [0.1, 0.35, 0.1],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-300px]
          left-1/2
          -translate-x-1/2
          h-[900px]
          w-[900px]
          rounded-full
          bg-violet-500/20
          blur-[180px]
        "
      />

      {/* FLOATING ORBS */}
      <FloatingOrb
        size={320}
        color="rgba(0,255,255,0.12)"
        top="10%"
        left="8%"
        duration={18}
      />

      <FloatingOrb
        size={280}
        color="rgba(255,0,255,0.10)"
        top="60%"
        left="75%"
        duration={22}
      />

      <FloatingOrb
        size={260}
        color="rgba(139,92,246,0.12)"
        top="75%"
        left="20%"
        duration={20}
      />
    </div>
  );
}

export default AnimatedBackground;
