import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle";

import ProjectCard from "../components/ui/ProjectCard";

import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-32 relative">
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
            title="Projects"
            subtitle="Some projects and experiments I have worked on while exploring software engineering and development."
          />

          <div
            className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
          "
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={project.github}
                live={project.live}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Projects;
