"use client";

import { useEffect, useRef } from "react";

import { gsap } from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const isTouchDevice = "ontouchstart" in window;

    if (isTouchDevice) return;

    const onMouseMove = (event: MouseEvent) => {
      const { target, x, y } = event;

      const isTargetElement =
        target instanceof HTMLAnchorElement ||
        target instanceof HTMLSpanElement;

      gsap.to(cursor, {
        x: x - 5,
        y: y - 5,
        ease: "power2",
        backgroundColor: isTargetElement ? "#efefee" : "#848484",
        scale: isTargetElement ? 1 : 0.5,
        opacity: target instanceof HTMLAnchorElement ? 0.5 : 1,
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, {
        ease: "power2",
        backgroundColor: "#848484",
        scale: 0.5,
        opacity: 0,
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed hidden md:block inset-0 z-50 h-5 w-5 select-none rounded-full opacity-0"
    />
  );
};

export default Cursor;
