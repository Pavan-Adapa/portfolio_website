import { ReactNode } from "react";

type NeonButtonProps = {
  children: ReactNode;
};

function NeonButton({ children }: NeonButtonProps) {
  return (
    <button
      className="
        glass
        neon-border
        px-8
        py-4
        rounded-2xl
        hover:scale-105
        hover:shadow-[0_0_40px_rgba(255,0,255,0.35)]
        transition-all
        duration-300
      "
    >
      {children}
    </button>
  );
}

export default NeonButton;
