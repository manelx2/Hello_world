import { Cpu, Rocket, Users, Heart, Star, Trophy, X } from 'lucide-react';
import { useState } from 'react';
import TypewriterText from './TypewriterText';

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHandballModal, setShowHandballModal] = useState(false);

  const stats = [
    { label: 'INTEL', value: 95, color: '#00F5D4' },
    { label: 'STR', value: 80, color: '#F15BB5' },
    { label: 'AGI', value: 90, color: '#9B5DE5' },
    { label: 'LCK', value: 75, color: '#6A0DAD' },
  ];

  const handballMedia = [
    { type: 'image', url: '/experience/handball/manzah_sport.jpg' },
    { type: 'video', url: '/experience/handball/hand.mp4' },
    { type: 'image', url: '/experience/handball/FB_IMG_1672598760245.jpg' },
    { type: 'image', url: '/experience/handball/FB_IMG_1667766755361.jpg' },
    { type: 'image', url: '/experience/handball/a kid of handball.jpg' },
    { type: 'video', url: '/experience/handball/received_670542277509642.mp4' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl text-glow-pink uppercase">Character Profile</h2>
        <div className="flex items-center justify-center gap-2 font-arcade text-friv-cyan text-xs">
          <Star size={14} fill="currentColor" />
          <span>PLAYER: MANEL</span>
          <Star size={14} fill="currentColor" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Stats & Level */}
        <div className="friv-card p-6 space-y-6">
          <div className="text-center pb-4 border-b border-friv-purple/20">
            <span className="font-arcade text-friv-pink text-sm uppercase block mb-2">Level</span>
            <span className="text-5xl font-arcade text-white">23</span>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-arcade text-[10px] text-friv-cyan uppercase">Attributes</h3>
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="flex justify-between font-mono text-xs uppercase">
                  <span>{stat.label}</span>
                  <span style={{ color: stat.color }}>{stat.value}</span>
                </div>
                <div className="h-2 bg-black/40 rounded-full overflow-hidden border border-friv-purple/20">
                  <div 
                    className="h-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${stat.value}%`, 
                      backgroundColor: stat.color,
                      boxShadow: `0 0 10px ${stat.color}`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-4 border-t border-friv-purple/20">
            <h3 className="font-arcade text-[10px] text-friv-cyan uppercase mb-2">Class</h3>
            <p className="font-arcade text-[8px] text-friv-pink">ROBOTIC_SOFTWARE_ENGINEER</p>
          </div>
        </div>

        {/* Center: Flip Card & Bio */}
        <div className="md:col-span-2 space-y-8">
          <div 
            className="relative h-[400px] w-full [perspective:1000px] group"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setShowHandballModal(true)}
          >
            <div className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] cursor-pointer ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
              {/* Front Side: Engineer */}
              <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
                <div className="friv-card p-8 h-full flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4">
                    <span className="font-arcade text-[8px] text-friv-cyan opacity-40 animate-pulse">FRONT_PROFILE...</span>
                  </div>
                  
                  <div className="w-48 h-48 shrink-0 bg-friv-deep border-4 border-friv-cyan rounded-2xl rotate-3 group-hover:rotate-0 transition-transform overflow-hidden shadow-[0_0_20px_rgba(0,245,212,0.3)]">
                    <img 
                      src="/experience/me as a profile/me.jpg" 
                      alt="Manel Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <div className="h-32">
                      <TypewriterText 
                        text="Engineer in training + Fearless Founder. I run on the unwavering belief that everything is figure-out-able. Whether it's migrating robotics pipelines to ROS2 or pitching on zero sleep—I build my way through it."
                        className="text-gray-300 font-mono text-sm leading-relaxed"
                        speed={20}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="p-3 bg-white/5 rounded-lg border border-friv-purple/20">
                        <span className="font-arcade text-[8px] text-friv-pink block mb-1">Special Ability</span>
                        <span className="font-mono text-xs text-friv-cyan uppercase">Build from Scratch</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-lg border border-friv-purple/20">
                        <span className="font-arcade text-[8px] text-friv-pink block mb-1">Passive Skill</span>
                        <span className="font-mono text-xs text-friv-cyan uppercase">Continuous Learning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back Side: Handball Side */}
              <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="friv-card p-8 h-full flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden border-friv-pink bg-gradient-to-br from-friv-deep to-friv-pink/10">
                  <div className="absolute top-0 left-0 p-4">
                    <span className="font-arcade text-[8px] text-friv-pink opacity-40 animate-pulse">BACK_PROFILE...</span>
                  </div>
                  
                  <div className="w-48 h-48 shrink-0 bg-friv-deep border-4 border-friv-pink rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform overflow-hidden shadow-[0_0_20px_rgba(241,91,181,0.3)]">
                    <img 
                      src="/experience/handball/manzah_sport.jpg" 
                      alt="Manel Handball" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <div className="h-32">
                      <p className="text-gray-300 font-mono text-sm leading-relaxed">
                        Handball is my foundation. It taught me leadership, resilience, and how to adapt quickly to new teams and challenges. Before I was an engineer, I was a player.
                      </p>
                      <p className="text-friv-pink font-arcade text-[10px] mt-2 animate-bounce">CLICK TO VIEW GALLERY</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="p-3 bg-friv-pink/5 rounded-lg border border-friv-pink/20">
                        <span className="font-arcade text-[8px] text-friv-cyan block mb-1">Position</span>
                        <span className="font-mono text-xs text-friv-pink uppercase">Leader / Player</span>
                      </div>
                      <div className="p-3 bg-friv-pink/5 rounded-lg border border-friv-pink/20">
                        <span className="font-arcade text-[8px] text-friv-cyan block mb-1">Active Buff</span>
                        <span className="font-mono text-xs text-friv-pink uppercase">Peak Resilience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Cpu, label: 'AI' },
              { icon: Rocket, label: 'Launch' },
              { icon: Users, label: 'Team' },
              { icon: Heart, label: 'Vision' }
            ].map((item, i) => (
              <div key={i} className="friv-card p-4 flex flex-col items-center gap-2 hover:bg-friv-purple/20 transition-colors">
                <item.icon className="text-friv-cyan" size={20} />
                <span className="font-arcade text-[8px] text-friv-pink uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Handball Modal */}
      {showHandballModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowHandballModal(false)} />
          <div className="friv-card w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col relative z-10 border-friv-pink">
            <div className="p-4 border-b border-friv-pink/20 flex justify-between items-center bg-friv-dark">
              <div className="flex items-center gap-2">
                <Trophy className="text-friv-pink" size={20} />
                <span className="font-arcade text-xs text-white">HANDBALL ARCHIVE</span>
              </div>
              <button onClick={() => setShowHandballModal(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {handballMedia.map((media, index) => (
                <div key={index} className="friv-card p-1 border-friv-purple/20 bg-black/40 aspect-square overflow-hidden group">
                  {media.type === 'video' ? (
                    <video src={media.url} controls className="w-full h-full object-cover rounded opacity-80 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <img src={media.url} className="w-full h-full object-cover rounded opacity-80 group-hover:opacity-100 transition-opacity" alt="Handball moment" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
