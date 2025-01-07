"use client";

import { useTextAnimation } from "@/hooks/use-text-animation";

import { cn } from "@/lib/utils";

const TextAnimation = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const textAnimation = useTextAnimation();

  return (
    <div
      ref={textAnimation}
      className={cn(
        "font-sans uppercase leading-snug tracking-tight",
        className,
      )}
    >
      {children}
    </div>
  );
};

export { TextAnimation };
