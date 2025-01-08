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

    const imageData = ctx.createImageData(canvas.width, canvas.height);

    const { data } = imageData;

    const bufferLength = data.length;

    let lastTime = 0;

    const fps = 30;
    const interval = 1000 / fps;

    function createNoise(currentTime: number) {
      if (currentTime - lastTime < interval) {
        requestAnimationFrame(createNoise);

        return;
      }

      lastTime = currentTime;

      for (let i = 0; i < bufferLength; i += 4) {
        const noise = Math.random() * 255;

        data[i] = data[i + 1] = data[i + 2] = noise;
        data[i + 3] = 15;
      }

      ctx.putImageData(imageData, 0, 0);

      requestAnimationFrame(createNoise);
    }

    requestAnimationFrame(createNoise);

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
