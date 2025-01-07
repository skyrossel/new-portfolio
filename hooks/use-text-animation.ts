import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function useTextAnimation() {
  const divRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const div = divRef.current;

    if (!div) return;

    const originalContent = div.innerHTML;

    if (!div.querySelector(".char")) {
      const lines = originalContent.split("<br>");

      div.innerHTML = lines
        .map(
          (line) =>
            `<div class="overflow-hidden">
              <div class="line">
                ${line
                  .split("")
                  .map((char) => `<span class="char">${char}</span>`)
                  .join("")}
              </div>
            </div>`,
        )
        .join("");
    }

    gsap.from(div.querySelectorAll(".char"), {
      scrollTrigger: {
        trigger: div,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      y: 100,
      ease: "power2.inOut",
      stagger: {
        each: 0.05,
        from: "start",
      },
      opacity: 0,
    });
  }, []);

  return divRef;
}
