//import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import Container from "../components/layout/Container";

import SocialLinks from "../components/ui/SocialLinks";
import HeroImage from "../components/ui/HeroImage";

function Hero() {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        relative
        pt-32
      "
    >
      <Container>
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-20
            items-center
          "
        >
          {/* LEFT CONTENT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                text-cyan-400
                mb-6
                tracking-widest
                uppercase
              "
            >
              Artificial Intelligence and Machine Learning Student
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="
                text-5xl
                md:text-7xl
                font-black
                leading-tight
                neon-text
              "
            >
              Building modern web applications
              <br />
              and exploring
              <span className="gradient-text"> low-level systems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="
                mt-10
                text-zinc-300
                text-lg
                md:text-xl
                leading-relaxed
                max-w-3xl
              "
            >
              Interested in systems programming, compilers, graphics, and full
              stack development. Currently focused on improving problem solving,
              software engineering fundamentals, and building projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="
                mt-12
                flex
                gap-6
                flex-wrap
              "
            >
              <a
                href="#projects"
                className="
                glass
                neon-border
                px-8
                py-4
                rounded-2xl
                hover:scale-105
                transition-all
                duration-300
              "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  border
                  border-white/10
                  px-8
                  py-4
                  rounded-2xl
                  hover:border-fuchsia-500
                  hover:text-fuchsia-400
                  transition-all
                  duration-300
                "
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-12"
            >
              <SocialLinks />
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="
              flex
              justify-center
              lg:justify-end
            "
          >
            <HeroImage />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
