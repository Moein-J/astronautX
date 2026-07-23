"use client";

import { useEffect, useRef } from "react";

type TStarfieldBackgroundProps = {
  className?: string;
};

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  baseOpacity: number;
  twinkleOffset: number;
  twinkleSpeed: number;
  color: string;
}

export function StarfieldBackground({ className }: TStarfieldBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Create rich starfield density
    const count = Math.min(Math.floor((width * height) / 2500), 350);
    const stars: Star[] = [];
    const colors = ["#ffffff", "#67e8f9", "#c084fc", "#fde047", "#38bdf8", "#e0e7ff"];

    for (let i = 0; i < count; i++) {
      const baseOpacity = Math.random() * 0.75 + 0.25;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2.5 + 0.5,
        size: Math.random() * 1.8 + 0.4,
        baseOpacity,
        twinkleOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetX = mouseX;
    let targetY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.016;
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Deep space void gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#02040a");
      gradient.addColorStop(0.4, "#060919");
      gradient.addColorStop(0.8, "#040612");
      gradient.addColorStop(1, "#020308");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle ambient cosmic nebula glow in canvas
      const nebulaGrad = ctx.createRadialGradient(
        width * 0.7,
        height * 0.3,
        50,
        width * 0.7,
        height * 0.3,
        width * 0.5
      );
      nebulaGrad.addColorStop(0, "rgba(168, 85, 247, 0.08)");
      nebulaGrad.addColorStop(0.5, "rgba(34, 211, 238, 0.05)");
      nebulaGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = nebulaGrad;
      ctx.fillRect(0, 0, width, height);

      // Parallax mouse offsets
      const offsetX = (mouseX - width / 2) * 0.015;
      const offsetY = (mouseY - height / 2) * 0.015;

      // Render stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const twinkle = Math.sin(time * 3 + star.twinkleOffset) * 0.3;
        const opacity = Math.max(0.1, Math.min(1, star.baseOpacity + twinkle));

        const renderX = (star.x + offsetX * star.z + width) % width;
        const renderY = (star.y + offsetY * star.z + height) % height;

        ctx.save();
        ctx.beginPath();
        ctx.arc(renderX, renderY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = opacity;

        if (star.size > 1.4) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = star.color;
        }

        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className || ""}`}
    />
  );
}
