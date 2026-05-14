import { motion } from "framer-motion";

import profileImage from "../../assets/images/profile.jpg";

function HeroImage() {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
    >
      {/* Outer Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-gradient-to-r
          from-cyan-500
          via-fuchsia-500
          to-purple-500
          blur-3xl
          opacity-30
          scale-110
        "
      />

      {/* Gradient Ring */}
      <div
        className="
          p-[3px]
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          via-fuchsia-500
          to-purple-500
        "
      >
        <div
          className="
            rounded-full
            overflow-hidden
            bg-black
          "
        >
          <img
            src={profileImage}
            alt="Pavan Adapa"
            className="
                w-[280px]
                h-[280px]
                md:w-[360px]
                md:h-[360px]
                object-cover
                object-top
                "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default HeroImage;
