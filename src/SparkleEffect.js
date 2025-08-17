import { useEffect, useRef } from "react";

const SparkleEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    const createParticle = (x, y) => {
      particles.push({
        x,
        y,
        size: Math.random() * 4 + 2, // Yıldız boyutu
        opacity: 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        rotation: Math.random() * 360, // Rastgele dönme açısı
      });
    };

    const drawStar = (x, y, size, rotation, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);

      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        let angle = (Math.PI / 180) * (i * 144); // 144 derece arayla yıldız çiz
        let xPos = Math.cos(angle) * size;
        let yPos = Math.sin(angle) * size;
        ctx.lineTo(xPos, yPos);
      }
      ctx.closePath();

      ctx.fillStyle = `rgba(255, 215, 0,  ${opacity})`; // Açık altın sarısı
      ctx.fill();
      ctx.restore();
    };

    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity -= 0.02;
        p.rotation += 2; // Yıldızların yavaşça dönmesini sağlar

        drawStar(p.x, p.y, p.size, p.rotation, p.opacity);

        if (p.opacity <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      requestAnimationFrame(updateParticles);
    };

    const handleMouseMove = (e) => {
      for (let i = 0; i < 3; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    updateParticles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none"
    ></canvas>
  );
};

export default SparkleEffect;
