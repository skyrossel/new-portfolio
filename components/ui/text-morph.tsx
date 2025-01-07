"use client";

import { useTextMorphEffect } from "@/hooks/use-text-morph-effect";

interface TextMorphProps {
  initialText: string;
  morphText: string;
}

const TextMorph = ({ initialText, morphText }: TextMorphProps) => {
  const textRef = useTextMorphEffect(initialText, morphText);

  return <span ref={textRef}>{initialText}</span>;
};

export { TextMorph };
