type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-16">
      <h2
        className="
          text-4xl
          md:text-5xl
          font-black
          gradient-text
          neon-text
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            mt-5
            text-zinc-400
            text-lg
            max-w-2xl
            leading-relaxed
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
