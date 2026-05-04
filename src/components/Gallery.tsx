import { useState } from 'react';
import { Trophy, Camera, Heart, Star, Code, Plane, Wrench, Share2 } from 'lucide-react';

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    { title: 'Event Lead @ Aerobotix', category: 'Events', color: '#00F5D4', icon: Trophy, media: { type: 'image', url: '/experience/aerobotix+autonomous robot/aeroday_event_organisation.jpg' } },
    { title: 'Fueling Innovation', category: 'Life', color: '#F15BB5', icon: Heart, media: { type: 'image', url: '/experience/me as a profile/typical tea lover.jpg' } },
    { title: 'Hardware Tinkering', category: 'Passion', color: '#9B5DE5', icon: Wrench, media: { type: 'video', url: '/experience/me as a profile/I like hardware.mp4' } },
    { title: 'Handball Mindset', category: 'Sports', color: '#6A0DAD', icon: Star, media: { type: 'video', url: '/experience/handball/hand.mp4' } },
    { title: 'Aerodynamic Research', category: 'Aerospace', color: '#00F5D4', icon: Plane, media: { type: 'image', url: '/experience/RC_aerodynamics/20240225_190745.jpg' } },
    { title: 'Team Synergy', category: 'Team', color: '#F15BB5', icon: Camera, media: { type: 'video', url: '/experience/me as a profile/loved by my collegues.mp4' } },
    { title: 'Competition Contribution', category: 'Competition', color: '#9B5DE5', icon: Trophy, media: { type: 'video', url: '/experience/aerobotix+autonomous robot/robolympix.mp4' } },
    { title: 'Startup Prototyping', category: 'EdTech', color: '#6A0DAD', icon: Code, media: { type: 'image', url: '/experience/recolab/kit.jpg' } },
    { title: 'Resilience Roots', category: 'Life', color: '#F15BB5', icon: Heart, media: { type: 'video', url: '/experience/me as a profile/savage in my hometown.mp4' } },
    { title: 'Precision Soldering', category: 'Skills', color: '#00F5D4', icon: Wrench, media: { type: 'image', url: '/experience/me as a profile/never afraid to solder smth.jpg' } },
    { title: 'Stress Testing', category: 'Dev', color: '#9B5DE5', icon: Code, media: { type: 'image', url: '/experience/me as a profile/I always make my computer suffer .jpg' } },
    { title: 'Community Building', category: 'Team', color: '#6A0DAD', icon: Share2, media: { type: 'video', url: '/experience/aerobotix+autonomous robot/aeroday teambuilding.mp4' } },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl text-glow-pink mb-4 uppercase tracking-tighter">Memory Arcade</h2>
        <p className="font-mono text-friv-cyan italic">"Unlock the past to build the future."</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="friv-card aspect-square relative group overflow-hidden cursor-pointer"
            style={{ 
              borderColor: hoveredIndex === index ? item.color : `${item.color}44`,
              boxShadow: hoveredIndex === index ? `0 0 20px ${item.color}44` : 'none'
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background Media */}
            <div className="absolute inset-0 z-0">
              {item.media.type === 'video' ? (
                <video 
                  src={item.media.url} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className={`w-full h-full object-cover transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-80' : 'opacity-20'}`} 
                />
              ) : (
                <img 
                  src={item.media.url} 
                  alt={item.title} 
                  className={`w-full h-full object-cover transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-80' : 'opacity-20'}`} 
                />
              )}
            </div>

            {/* Retro Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all z-10 ${hoveredIndex === index ? 'bg-black/20' : 'bg-friv-dark/60'}`}>
              <item.icon 
                size={48} 
                style={{ color: item.color }} 
                className={`transition-all duration-300 ${hoveredIndex === index ? 'opacity-0 scale-150' : 'opacity-40 scale-100'}`} 
              />
            </div>
            
            {/* Scanlines Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] z-20 opacity-30" />

            {/* Label */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform z-30">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: item.color }} />
                <span className="font-arcade text-[6px] text-friv-pink uppercase">{item.category}</span>
              </div>
              <h3 className="text-xs uppercase tracking-tighter text-white drop-shadow-lg font-arcade">{item.title}</h3>
            </div>
            
            {/* Corner Deco */}
            <div className="absolute top-2 left-2 opacity-40 group-hover:opacity-100 transition-opacity z-30">
              <div className="text-[6px] font-arcade text-white/50">REC</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-8 border-2 border-dashed border-friv-purple/20 rounded-2xl text-center bg-friv-deep/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-scanlines opacity-5" />
        <p className="text-sm font-mono text-gray-400 relative z-10 tracking-widest">
          [ SYSTEM_ARCHIVE: {items.length} / 99 MEMORIES UNLOCKED ]
        </p>
      </div>
    </div>
  );
}
