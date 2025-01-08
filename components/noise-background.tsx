"use client";

import { useEffect } from "react";

const NoiseBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById(
      "noise-background",
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;

    let imageData: ImageData;
    let data: Uint8ClampedArray;
    let bufferLength: number;
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      imageData = ctx.createImageData(canvas.width, canvas.height);
      data = imageData.data;
      bufferLength = data.length;
    };

    window.addEventListener("resize", resize);

    resize();

    let lastTime = 0;

    const FPS = 30;
    const INTERVAL = 1000 / FPS;

    function createNoise(currentTime: number) {
      if (currentTime - lastTime < INTERVAL) {
        animationFrameId = requestAnimationFrame(createNoise);

        return;
      }

      lastTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < bufferLength; i += 4) {
        const noise = Math.random() * 255;

        data[i] = data[i + 1] = data[i + 2] = noise;
        data[i + 3] = 15;
      }

      ctx.putImageData(imageData, 0, 0);

      animationFrameId = requestAnimationFrame(createNoise);
    }

    requestAnimationFrame(createNoise);

    return () => {
      window.removeEventListener("resize", resize);

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="noise-background"
      className="pointer-events-none fixed inset-0 z-[-1] will-change-transform"
    />
  );
};

export default NoiseBackground;
