import React, { useState, useEffect } from 'react';
import { Gamepad2, Settings, Terminal, Activity, Database } from 'lucide-react';
import MatrixBackground from './MatrixBackground';
import TypewriterText from './TypewriterText';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoaded(true);
          setTimeout(() => setShowButton(true), 800);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 150);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0d0221] flex flex-col items-center justify-center p-6 overflow-hidden select-none">
      <MatrixBackground />
      <div className="crt-overlay" />
      
      {/* 2. HUD Elements */}
      <div className="absolute top-8 left-8 space-y-2 pointer-events-none hidden md:block">
        <div className="flex items-center gap-2 font-mono text-[8px] text-friv-cyan/60">
          <Terminal size={10} />
          <span>SYS_LATENCY: 12ms</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[8px] text-friv-cyan/60">
          <Database size={10} />
          <span>MEM_ALLOC: 4.2GB / 16GB</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[8px] text-friv-cyan/60">
          <Settings size={10} className="animate-spin" />
          <span>KERNEL_INIT: SUCCESS</span>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 font-mono text-[8px] text-friv-cyan/60 text-right pointer-events-none">
        <div>LOC_X: {coords.x}</div>
        <div>LOC_Y: {coords.y}</div>
        <div className="text-friv-pink mt-1">STATUS: {isLoaded ? 'MISSION_READY' : 'UPLOADING_CORE...'}</div>
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-12 max-w-xl w-full">
        {/* 3. The Character (Logo) */}
        <div className="relative group">
          <div className="w-[28rem] h-[28rem] flex items-center justify-center animate-breathing">
            <img 
              src="/logo.png" 
              alt="Manel Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Animated Speech Bubble */}
          <div className={`absolute -right-24 -top-8 transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-10'}`}>
            <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl rounded-bl-none relative border-2 border-friv-cyan shadow-[0_0_20px_rgba(0,245,212,0.3)]">
              <div className="font-arcade text-[10px] text-friv-dark leading-relaxed min-w-[120px]">
                {isLoaded ? (
                  <TypewriterText text="HELLO, ENGINEER! READY TO PLAY?" speed={40} playAudio={false} />
                ) : (
                  "BOOTING..."
                )}
              </div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white border-b-2 border-l-2 border-friv-cyan rotate-45" />
            </div>
          </div>

          {/* Data Accents */}
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="w-8 h-8 rounded-full border border-friv-cyan/30 flex items-center justify-center animate-spin">
              <Activity size={14} className="text-friv-cyan/50" />
            </div>
          </div>
        </div>

        {/* 4. The Loading Bar (Segmented) */}
        <div className="w-full space-y-3">
          <div className="flex justify-between items-end h-4 overflow-hidden">
            <span className={`font-arcade text-[10px] tracking-widest ${isLoaded ? 'text-friv-cyan animate-glitch' : 'text-friv-purple'}`}>
              {isLoaded ? 'SYSTEM_READY' : 'INITIALIZING_MISSION...'}
            </span>
            <div className="friv-card px-2 py-0.5 border-friv-cyan bg-friv-cyan/10">
              <span className="font-mono text-[10px] text-friv-cyan leading-none">{Math.floor(progress)}%</span>
            </div>
          </div>
          
          <div className="h-4 w-full bg-black/60 border-2 border-friv-purple/40 rounded-sm p-0.5 relative overflow-hidden flex gap-1 shadow-[0_0_15px_rgba(155,93,229,0.2)]">
            {/* Segmentation segments */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i}
                className="h-full flex-1 transition-all duration-300"
                style={{ 
                  backgroundColor: progress > (i * 5) ? '#00F5D4' : 'transparent',
                  opacity: progress > (i * 5) ? 1 : 0.1,
                  boxShadow: progress > (i * 5) ? '0 0 8px #00F5D4' : 'none'
                }}
              />
            ))}
            
            {/* Leader Spark */}
            {progress > 0 && progress < 100 && (
              <div 
                className="absolute top-0 bottom-0 w-4 bg-white/40 blur-sm pointer-events-none transition-all duration-150"
                style={{ left: `calc(${progress}% - 8px)` }}
              />
            )}
            
            {/* Full Charge Flare */}
            {isLoaded && (
              <div className="absolute inset-0 bg-friv-cyan/20 animate-pulse pointer-events-none" />
            )}
          </div>
        </div>

        {/* 5. Continue Button */}
        <div className="h-20 flex items-center justify-center">
          {showButton && (
            <button
              onClick={onComplete}
              className="group relative px-16 py-5 bg-friv-pink hover:bg-friv-cyan border-b-4 border-friv-deep active:border-b-0 active:translate-y-1 transition-all animate-fade-in scanline-btn overflow-hidden"
            >
              <div className="relative z-10 flex items-center gap-4">
                <Gamepad2 className="text-white group-hover:text-friv-dark group-hover:rotate-12 transition-transform" size={24} />
                <span className="font-arcade text-white group-hover:text-friv-dark text-sm tracking-[0.2em]">
                  START_MISSION
                </span>
              </div>
              
              {/* Button Glow */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -inset-1 bg-friv-cyan blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-500" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
