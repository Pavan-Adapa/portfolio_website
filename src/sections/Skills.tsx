import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle";
import SkillCard from "../components/ui/SkillCard";

import { skillCategories } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-32 relative">
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
        >
          <SectionTitle
            title="Skills"
            subtitle="Technologies, tools, and computer science fundamentals I am currently working with."
          />

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
          "
          >
            {skillCategories.map((category) => (
              <SkillCard
                key={category.title}
                title={category.title}
                skills={category.skills}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Skills;
