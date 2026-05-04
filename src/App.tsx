import React, { useState } from 'react';
import { 
  Gamepad2, 
  User, 
  Cpu, 
  BarChart3, 
  Image as ImageIcon, 
  Mail, 
  ArrowLeft 
} from 'lucide-react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import MatrixBackground from './components/MatrixBackground';
import TypewriterText from './components/TypewriterText';

type Level = 'about' | 'projects' | 'skills' | 'gallery' | 'contact' | null;

interface GridItemProps {
  id: Level;
  icon: React.ElementType;
  label: string;
  color: string;
  onClick: (id: Level) => void;
}

const GridItem: React.FC<GridItemProps> = ({ id, icon: Icon, label, color, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`group relative flex flex-col items-center justify-center p-6 aspect-square friv-card border-b-4 active:border-b-0 active:translate-y-1 transition-all`}
    style={{ borderColor: color }}
  >
    <div 
      className="p-4 rounded-xl mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3"
      style={{ backgroundColor: `${color}22` }}
    >
      <Icon size={48} style={{ color }} />
    </div>
    <span className="font-arcade text-[10px] md:text-xs text-center tracking-tighter uppercase group-hover:text-friv-cyan transition-colors">
      {label}
    </span>
    <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
  </button>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeLevel, setActiveLevel] = useState<Level>(null);

  const levels = [
    { id: 'about', icon: User, label: 'Avatar', color: '#9B5DE5' },
    { id: 'projects', icon: Cpu, label: 'Robot', color: '#00F5D4' },
    { id: 'skills', icon: BarChart3, label: 'Stats', color: '#F15BB5' },
    { id: 'gallery', icon: ImageIcon, label: 'Memory', color: '#6A0DAD' },
    { id: 'contact', icon: Mail, label: 'Antenna', color: '#00F5D4' },
  ] as const;

  const renderLevel = () => {
    switch (activeLevel) {
      case 'about': return <About />;
      case 'projects': return <Projects />;
      case 'skills': return <Skills />;
      case 'gallery': return <Gallery />;
      case 'contact': return <Contact />;
      default: return null;
    }
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0d0221]">
      <MatrixBackground />
      <div className="crt-overlay" />
      
      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center border-b-2 border-friv-purple/20 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-lg bg-friv-deep flex items-center justify-center border-2 border-friv-cyan shadow-[0_0_15px_rgba(0,245,212,0.4)] overflow-hidden">
            <div className="w-full h-full scale-[3.2] translate-y-[70%]">
              <img src="/logo.png" alt="Character" className="w-full h-full object-contain animate-breathing" />
            </div>
          </div>
          <div>
            <h1 className="text-sm md:text-xl text-glow-cyan tracking-widest uppercase">
              MANEL_OS v2.3
            </h1>
            <p className="text-[10px] font-mono text-friv-pink">STATUS: ONLINE / READY_TO_PLAY</p>
          </div>
        </div>
        
        {activeLevel && (
          <button
            onClick={() => setActiveLevel(null)}
            className="flex items-center gap-2 px-4 py-2 bg-friv-deep hover:bg-friv-purple border-2 border-friv-cyan rounded-lg transition-all active:scale-95"
          >
            <ArrowLeft size={16} />
            <span className="font-arcade text-[10px]">MENU</span>
          </button>
        )}
      </header>

      <main className="relative z-10 max-w-7xl mx-auto p-6 md:p-12">
        {!activeLevel ? (
          <div className="flex flex-col items-center justify-center min-h-[70vh]">
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-4xl mb-4 text-glow-pink">SELECT MISSION</h2>
              <div className="h-6">
                <TypewriterText 
                  text="Welcome, Engineer. Choose your destination..." 
                  className="text-friv-cyan text-sm md:text-lg"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-5xl">
              {levels.map((level) => (
                <GridItem
                  key={level.id}
                  id={level.id}
                  icon={level.icon}
                  label={level.label}
                  color={level.color}
                  onClick={setActiveLevel}
                />
              ))}
            </div>
            
            <div className="mt-16 p-4 border-2 border-dashed border-friv-purple/40 rounded-xl text-center">
              <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                Insert Coin to Continue • Created with <span className="text-friv-pink">♥</span> by Manel
              </p>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in pb-20">
            {renderLevel()}
          </div>
        )}
      </main>

      {/* Decorative elements */}
      <div className="fixed bottom-4 right-4 z-20 font-mono text-[10px] text-friv-cyan/40">
        CPU_TEMP: 42°C | MEM_USE: 64% | FPS: 60
      </div>
    </div>
  );
}

export default App;
