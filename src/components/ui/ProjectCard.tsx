import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import GlowCard from "../common/GlowCard";
import TechBadge from "./TechBadge";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
};

function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
}: ProjectCardProps) {
  return (
    <GlowCard className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h3
            className="
              text-2xl
              font-bold
              gradient-text
              mb-5
            "
          >
            {title}
          </h3>

          <p
            className="
              text-zinc-300
              leading-relaxed
            "
          >
            {description}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {tech.map((item) => (
              <TechBadge key={item} tech={item} />
            ))}
          </div>
        </div>

        <div className="flex gap-5 mt-10">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="
              glass
              p-4
              rounded-xl
              hover:text-cyan-300
              transition-all
              duration-300
            "
          >
            <FaGithub size={20} />
          </a>

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="
                glass
                p-4
                rounded-xl
                hover:text-fuchsia-400
                transition-all
                duration-300
              "
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
    </GlowCard>
  );
}

export default ProjectCard;
