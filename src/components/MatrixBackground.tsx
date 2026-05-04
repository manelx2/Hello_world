import React, { useEffect, useRef, useState } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Matrix Rain Effect
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}/\\|';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    const draw = () => {
      // Semi-transparent black to create trailing effect
      ctx.fillStyle = 'rgba(13, 2, 33, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Color transition based on drop position
        const opacity = Math.random() * 0.5 + 0.2;
        ctx.fillStyle = i % 5 === 0 ? `rgba(0, 245, 212, ${opacity})` : `rgba(155, 93, 229, ${opacity})`;

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-[#0d0221] overflow-hidden pointer-events-none">
      {/* 1. Digital Rain Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-20" />

      {/* 2. Parallax Grid Floor */}
      <div 
        className="absolute inset-0 opacity-10 animate-grid-parallax"
        style={{
          backgroundImage: `linear-gradient(#6A0DAD 1px, transparent 1px), linear-gradient(90deg, #6A0DAD 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: `perspective(800px) rotateX(60deg) translateY(${(coords.y / 80)}px) translateX(${(coords.x / 80)}px)`
        }}
      />

      {/* 3. Ambient Glows */}
      <div 
        className="absolute w-[800px] h-[800px] bg-friv-purple/10 blur-[150px] rounded-full transition-transform duration-1000 ease-out"
        style={{
          top: '50%',
          left: '50%',
          transform: `translate(calc(-50% + ${(coords.x - window.innerWidth / 2) / 20}px), calc(-50% + ${(coords.y - window.innerHeight / 2) / 20}px))`
        }}
      />
      
      {/* Scanline pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none" />
    </div>
  );
}
