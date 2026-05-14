import GlowCard from "../common/GlowCard";

type SkillCardProps = {
  title: string;
  skills: string[];
};

function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <GlowCard>
      <h3
        className="
          text-2xl
          font-bold
          gradient-text
          mb-6
        "
      >
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-4
              py-2
              rounded-xl
              bg-white/5
              border
              border-white/10
              text-zinc-300
              hover:border-cyan-400
              hover:text-cyan-300
              transition-all
              duration-300
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </GlowCard>
  );
}

export default SkillCard;
