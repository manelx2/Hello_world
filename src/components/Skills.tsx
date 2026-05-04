import { Terminal, Cpu, Brain, Settings, Zap } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Robotics Core',
      icon: Cpu,
      color: '#00F5D4',
      skills: [
        { name: 'ROS2 Pipeline', level: 95 },
        { name: 'Hardware Integration', level: 90 },
        { name: 'Motion Tracking', level: 85 },
        { name: 'STM32 / ESP32', level: 88 },
      ]
    },
    {
      title: 'AI & Vision',
      icon: Brain,
      color: '#F15BB5',
      skills: [
        { name: 'Computer Vision', level: 92 },
        { name: 'Deep Learning', level: 85 },
        { name: 'Path Planning', level: 80 },
        { name: 'Sensor Fusion', level: 88 },
      ]
    },
    {
      title: 'Software Dev',
      icon: Terminal,
      color: '#9B5DE5',
      skills: [
        { name: 'Python / C++', level: 95 },
        { name: 'React / TS', level: 80 },
        { name: 'Linux / Bash', level: 90 },
        { name: 'Git / CI-CD', level: 85 },
      ]
    },
    {
      title: 'Embedded Systems',
      icon: Settings,
      color: '#6A0DAD',
      skills: [
        { name: 'RTOS', level: 75 },
        { name: 'PCB Design', level: 82 },
        { name: 'I2C/SPI/UART', level: 95 },
        { name: 'IoT Architecture', level: 88 },
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl text-glow-cyan mb-4 uppercase">Upgrade Tree</h2>
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-friv-deep/40 border border-friv-cyan rounded-full">
          <Zap size={14} className="text-friv-cyan animate-pulse" />
          <span className="font-arcade text-[8px] text-friv-cyan uppercase tracking-widest">Skill points available: 0</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="friv-card p-6 space-y-6 group">
            <div className="flex items-center gap-4 border-b border-friv-purple/20 pb-4">
              <div 
                className="p-3 rounded-lg border-2"
                style={{ borderColor: category.color, backgroundColor: `${category.color}22` }}
              >
                <category.icon size={24} style={{ color: category.color }} />
              </div>
              <h3 className="text-lg uppercase tracking-tighter" style={{ color: category.color }}>
                {category.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between font-mono text-xs uppercase text-gray-400 group-hover:text-white transition-colors">
                    <span>{skill.name}</span>
                    <span style={{ color: category.color }}>{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-black/40 rounded border border-friv-purple/10 overflow-hidden relative">
                    <div 
                      className="h-full transition-all duration-1000 ease-out flex"
                      style={{ width: `${skill.level}%`, backgroundColor: category.color }}
                    >
                      {/* Grid overlay for the progress bar */}
                      <div className="absolute inset-0 flex">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className="flex-1 border-r border-black/20 last:border-0" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-2 text-right">
              <span className="font-arcade text-[6px] text-friv-pink uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                MAX_LEVEL_REACHED
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
