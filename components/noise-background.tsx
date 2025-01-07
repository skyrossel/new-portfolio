"use client";

import { useEffect } from "react";

const NoiseBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById(
      "noise-background",
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    resize();

    function createNoise() {
      const imageData = ctx.createImageData(canvas.width, canvas.height);

      const { data } = imageData;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255;

        data[i] = noise;
        data[i + 1] = noise;
        data[i + 2] = noise;
        data[i + 3] = 15;
      }

      ctx.putImageData(imageData, 0, 0);
    }

    function animate() {
      createNoise();

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      id="noise-background"
      className="pointer-events-none fixed inset-0 z-[-1]"
    />
  );
};

export default NoiseBackground;
