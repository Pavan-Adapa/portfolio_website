import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`
        w-full
        max-w-7xl
        mx-auto
        px-6
        md:px-10
        lg:px-16
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Container;
