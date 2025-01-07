import { useEffect, useRef } from "react";

import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export function useTextMorphEffect(initialText: string, morphText: string) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const text = textRef.current;

    if (!text) return;

    let animation: gsap.Context | null = null;

    const onMouseEnter = () => {
      if (animation) {
        animation.kill();
      }

      animation = gsap.context(() => {
        gsap.to(text, {
          text: morphText,
          ease: "power2.inOut",
          stagger: 0.05,
        });
      });
    };

    const onMouseLeave = () => {
      if (animation) {
        animation.kill();
      }

      animation = gsap.context(() => {
        gsap.to(text, {
          text: initialText,
          ease: "power2.inOut",
          stagger: 0.05,
        });
      });
    };

    text.addEventListener("mouseenter", onMouseEnter);
    text.addEventListener("mouseleave", onMouseLeave);

    return () => {
      text.removeEventListener("mouseenter", onMouseEnter);
      text.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [initialText, morphText]);

  return textRef;
}
