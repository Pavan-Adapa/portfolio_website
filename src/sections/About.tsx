import { motion } from "framer-motion";

import Container from "../components/layout/Container";

import GlowCard from "../components/common/GlowCard";
import SectionTitle from "../components/common/SectionTitle";

function About() {
  return (
    <section id="about" className="py-32 relative">
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 120,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="space-y-12"
        >
          <SectionTitle
            title="About Me"
            subtitle="Passionate about building modern applications, exploring software systems, and continuously improving as a developer."
          />

          <GlowCard>
            <div
              className="
                space-y-8
                text-zinc-300
                leading-relaxed
                text-lg
              "
            >
              <p>
                I am a B.Tech student in Artificial Intelligence and Machine
                Learning with strong interest in software engineering, full
                stack development, and systems-level programming.
              </p>

              <p>
                I enjoy building responsive web applications, experimenting with
                machine learning models, and creating interactive user
                experiences using modern frontend technologies.
              </p>

              <p>
                My current focus areas include React, JavaScript, Python,
                backend development, data structures and algorithms, and
                performance-oriented application design.
              </p>

              <p>
                I am also interested in low-level systems, compilers, graphics
                programming, and understanding how software works internally.
              </p>
            </div>
          </GlowCard>
        </motion.div>
      </Container>
    </section>
  );
}

export default About;
