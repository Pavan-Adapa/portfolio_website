import { motion } from "framer-motion";

import { useEffect, useState } from "react";

function MouseSpotlight() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 200,
        y: position.y - 200,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      }}
      className="
        fixed
        top-0
        left-0
        w-[400px]
        h-[400px]
        rounded-full
        pointer-events-none
        z-0
        bg-cyan-400/10
        blur-[120px]
      "
    />
  );
}

export default MouseSpotlight;
