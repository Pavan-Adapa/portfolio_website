type TechBadgeProps = {
  tech: string;
};

function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span
      className="
        px-3
        py-1
        rounded-lg
        bg-cyan-500/10
        border
        border-cyan-400/20
        text-cyan-300
        text-sm
      "
    >
      {tech}
    </span>
  );
}

export default TechBadge;
