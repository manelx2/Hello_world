import { useState } from 'react';
import { 
  ExternalLink, Terminal, Cpu, Camera, PlayCircle, 
  Car, BookOpen, BrainCircuit, FileText, 
  X, ChevronRight, Share2, Award, Zap,
  Activity, Layout, Layers, Settings,
  Plane
} from 'lucide-react';

interface MediaItem {
  type: 'image' | 'video' | 'pdf' | 'docx' | 'pptx' | 'external_link';
  url: string;
  label?: string;
}

interface Project {
  title: string;
  category: string;
  tags: string[];
  shortDescription: string;
  fullDescription: string;
  role?: string;
  achievements?: string[];
  link?: string;
  icon?: any;
  mainMedia?: MediaItem;
  gallery: MediaItem[];
  trustedLogos?: string[];
}

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'AAFO Project',
      category: 'AI & Robotics',
      tags: ['ROS2', 'Gazebo', 'URDF', 'Biomechanics', 'AI'],
      shortDescription: 'Active Ankle-Foot Orthosis with AI-driven motion analysis.',
      fullDescription: 'Modeling and integrating an Active Ankle-Foot Orthosis. I developed a kinematic model from CAD to URDF/xacro, and migrated the Technaid H3 exoskeleton software pipeline to ROS2.',
      role: 'AI & Robotics Engineer Intern',
      achievements: [
        'Developed kinematic model from CAD to URDF/xacro',
        'Built simulation environment using RViz and Gazebo',
        'Designed IMU and biomechanical sensor integration pipeline',
        'Led migration of Technaid H3 pipeline to ROS2'
      ],
      icon: Cpu,
      mainMedia: { type: 'video', url: '/experience/AFFO/imu_single_ankle_pipline.mp4' },
      gallery: [
        { type: 'video', url: '/experience/AFFO/imu_single_ankle_pipline.mp4', label: 'IMU Single Ankle Pipeline' },
        { type: 'video', url: '/experience/AFFO/IMU_gazebo.mp4', label: 'IMU Gazebo Simulation' },
        { type: 'pptx', url: '/experience/AFFO/2404_demo_fri(1).pptx', label: 'Project Presentation (PPTX)' }
      ]
    },
    {
      title: 'RecoLab Technologies',
      category: 'EdTech Startup',
      tags: ['Leadership', 'CTO', 'AI', '3D Printing'],
      shortDescription: 'Co-founded edtech startup creating interactive learning kits.',
      fullDescription: 'As Co-Founder & CTO, leading innovation in educational technology. Building MVPs and creating custom prototypes using 3D printing and CNC machining. Ranked TOP 100 in TotalEnergies Startupper 2024.',
      role: 'Co-Founder & CTO',
      achievements: [
        'Ranked among TOP 100 Startups in TotalEnergies Startupper 2024',
        'Customized learning kit prototypes via 3D printing and CNC',
        'Strategized product design using SolidWorks',
        'Navigated SMU, WSH, DoHe, and Coworky incubators'
      ],
      link: 'https://recolab.tn/',
      icon: BookOpen,
      mainMedia: { type: 'video', url: '/experience/recolab/prototyping.mp4' },
      gallery: [
        { type: 'video', url: '/experience/recolab/prototyping.mp4', label: 'Prototyping Session' },
        { type: 'video', url: '/experience/recolab/recolab_explore.mp4', label: 'RecoLab Explore' },
        { type: 'video', url: '/experience/recolab/VID_20240913_202242.mp4', label: 'Showcase' },
        { type: 'image', url: '/experience/recolab/kit.jpg', label: 'Educational Kit' },
        { type: 'external_link', url: 'https://drive.google.com/drive/folders/1lYUfJRYVSSedFwqUWbMra9pLBqne842v?usp=sharing', label: 'Product Drive' },
        { type: 'image', url: '/experience/recolab/TotalEnergies_l.png', label: 'TotalEnergies Recognition' }
      ],
      trustedLogos: [
        '/experience/recolab/smu_l.png',
        '/experience/recolab/dohe_l.png',
        '/experience/recolab/coworky_l.png',
        '/experience/recolab/TotalEnergies_l.png'
      ]
    },
    {
      title: 'Advanced Autonomous Mobile Robot',
      category: 'Robotics',
      tags: ['ROS', 'C++', 'STM32', 'LiDAR', 'KiCad'],
      shortDescription: 'Full-stack autonomous robot built from scratch (ROS, PCB, Mechanics).',
      fullDescription: 'Designed a full-stack autonomous robot including custom PCB design (KiCad) and mechanical structure (SolidWorks). Implemented ROS navigation stack with LiDAR, and a robust odometry pipeline.',
      role: 'Lead Engineer',
      achievements: [
        'Custom PCB design (KiCad) and mechanical structure (SolidWorks)',
        'ROS navigation stack with LiDAR obstacle avoidance',
        'Sensor fusion for odometry (IMU + Encoders)',
        'Low-level STM32 embedded control with PID'
      ],
      icon: Car,
      mainMedia: { type: 'video', url: '/experience/aerobotix+autonomous robot/aerobotix.mp4' },
      gallery: [
        { type: 'video', url: '/experience/aerobotix+autonomous robot/aerobotix.mp4', label: 'Robot Navigation' },
        { type: 'video', url: '/experience/aerobotix+autonomous robot/robolympix.mp4', label: 'Robolympix Competition' },
        { type: 'video', url: '/experience/aerobotix+autonomous robot/eniso.mp4', label: 'ENISO Presentation' },
        { type: 'image', url: '/experience/aerobotix+autonomous robot/aeroday_event_organisation.jpg', label: 'Event Organisation' }
      ]
    },
    {
      title: 'RC Aircraft & Glider Design',
      category: 'Aerospace',
      tags: ['Aerodynamics', 'Flight Control', 'CAD'],
      shortDescription: 'Designed and built RC aircraft with custom flight control systems.',
      fullDescription: 'Designed and built RC aircraft and gliders, focusing on aerodynamic efficiency and flight stability. Developed flight control systems with telemetry for real-time data monitoring.',
      role: 'Aerospace Engineer',
      achievements: [
        'Aerodynamic modeling and CAD design',
        'Flight control systems integration with telemetry',
        'Wind tunnel validation and flight testing'
      ],
      icon: Plane,
      mainMedia: { type: 'video', url: '/experience/RC_aerodynamics/VID_20231211_170206.mp4' },
      gallery: [
        { type: 'video', url: '/experience/RC_aerodynamics/VID_20231211_170206.mp4', label: 'Flight Test' },
        { type: 'video', url: '/experience/RC_aerodynamics/VID_20231222_142418.mp4', label: 'Glider Performance' },
        { type: 'image', url: '/experience/RC_aerodynamics/aerodynamic.JPG', label: 'Aerodynamic Analysis' },
        { type: 'image', url: '/experience/RC_aerodynamics/aeroday 2025.jpg', label: 'Aeroday 2025' }
      ]
    },
    {
      title: 'EEG Patient Data Classifier',
      category: 'AI & Healthcare',
      tags: ['Python', 'Machine Learning', 'Signal Processing', 'EEG'],
      shortDescription: 'Classifier for monitoring concentration in ADHD youth using EEG signals.',
      fullDescription: 'Built a system to process and classify EEG patient data to detect signal patterns related to concentration levels. Improved accuracy using advanced ML techniques.',
      role: 'ML Engineer',
      achievements: [
        'Developed signal processing pipeline for raw EEG data',
        'Trained classifiers for concentration level detection',
        'Validated results on ADHD patient datasets'
      ],
      icon: BrainCircuit,
      mainMedia: { type: 'video', url: '/experience/EEG/Monitoring Concentration in ADHD Youth.mp4' },
      gallery: [
        { type: 'video', url: '/experience/EEG/Monitoring Concentration in ADHD Youth.mp4', label: 'System Demo' },
        { type: 'pdf', url: '/experience/EEG/Rapport_PPP_3P24-IIA3-02 (1).pdf', label: 'Project Report (PDF)' }
      ]
    },
    {
      title: 'Wearable Thyroid Device',
      category: 'Biomedical Engineering',
      tags: ['ESP32', 'ECG', 'ML', 'PCB Design'],
      shortDescription: 'Modular wearable for early thyroid anomaly detection.',
      fullDescription: 'Built a modular PCB integrating ESP32 and biomedical sensors for real-time acquisition of physiological data, using ML models for early anomaly detection.',
      role: 'Embedded & ML Engineer',
      achievements: [
        'Designed modular PCB for biomedical sensing',
        'Integrated ESP32 with ECG and thermal sensors',
        'Trained Scikit-learn models for anomaly classification'
      ],
      icon: Activity,
      mainMedia: { type: 'video', url: '/experience/thyroid/Copie de Monitoring Concentration in ADHD Youth.mp4' },
      gallery: [
        { type: 'video', url: '/experience/thyroid/Copie de Monitoring Concentration in ADHD Youth.mp4', label: 'Acquisition Demo' },
        { type: 'pdf', url: '/experience/thyroid/PFA Rapport.pdf', label: 'Technical Report (PDF)' }
      ]
    },
    {
      title: 'IoT Sorting Disk System',
      category: 'IoT & Vision',
      tags: ['OpenCV', 'ESP32', 'Python', 'Real-time'],
      shortDescription: 'Smart disk sorting system with real-time OpenCV detection.',
      fullDescription: 'Designed a smart disk sorting system with embedded motor control and HTTP-based IoT communication. Uses color-based detection for classification.',
      role: 'System Architect',
      achievements: [
        'Implemented real-time OpenCV color classification',
        'Developed HTTP-based control interface',
        'Optimized mechanical sorting mechanism reliability'
      ],
      icon: Settings,
      mainMedia: { type: 'video', url: '/experience/IOT_sorting_system/VID-20250515-WA0028.mp4' },
      gallery: [
        { type: 'video', url: '/experience/IOT_sorting_system/VID-20250515-WA0028.mp4', label: 'Sorting in Action' },
        { type: 'external_link', url: 'https://drive.google.com/file/d/1NL1hPAkS3cCpfoBZMKPtzNhSlpcmYGqW/view?usp=sharing', label: 'Project Demo Link' }
      ]
    },
    {
      title: 'TNOs Classification (BNN)',
      category: 'Machine Learning',
      tags: ['Python', 'PyTorch', 'BNN', 'Astrodynamics'],
      shortDescription: 'Bayesian Neural Network for Trans-Neptunian Objects classification.',
      fullDescription: 'Developed a BNN classifier to quantify uncertainty in the identification of TNOs, simulating complex datasets using Rebound integrator.',
      role: 'Research Intern @ Latis-ENISo',
      achievements: [
        'Built BNN classifier for astronomical objects',
        'Quantified prediction uncertainty for low-data scenarios',
        'Simulated astrodynamic datasets with Rebound'
      ],
      icon: Layers,
      mainMedia: { type: 'video', url: '/experience/latis_eniso/Design sans titre (1).mp4' },
      gallery: [
        { type: 'video', url: '/experience/latis_eniso/Design sans titre (1).mp4', label: 'Visualization' },
        { type: 'pdf', url: '/experience/latis_eniso/rapport.pdf', label: 'Research Rapport (PDF)' },
        { type: 'external_link', url: 'https://drive.google.com/file/d/16mGJheHIJnDA5SkeJYQi56G9neCkt8ni/view?usp=sharing', label: 'Additional Video' }
      ]
    },
    {
      title: 'SAP & Industrial ERP',
      category: 'Industrial IT',
      tags: ['SAP', 'ERP', 'GPAO', 'Industry 4.0'],
      shortDescription: 'Configuration of SAP modules for simulated industrial workflows.',
      fullDescription: 'Modeled BOMs, production cycles, and financial tracking within SAP to simulate complex industrial environments.',
      role: 'Industrial Engineer',
      achievements: [
        'Configured SAP MM, PP, and FI modules',
        'Modeled end-to-end production cycles',
        'Validated industrial workflow simulations'
      ],
      icon: Layout,
      mainMedia: { type: 'image', url: '/experience/sap/SAP_2011_logo.svg.png' },
      gallery: [
        { type: 'pdf', url: '/experience/sap/Livrable3 GPAO B28.pdf', label: 'Industrial Project (PDF)' },
        { type: 'external_link', url: 'https://drive.google.com/file/d/1W-Qpl58BfUMqbPuYrzd78czevbNp6BYD/view?usp=sharing', label: 'Industrial Project Drive' },
        { type: 'external_link', url: 'https://drive.google.com/drive/u/4/folders/14JX7XaZo4neWGpaCrHDbH58zL9R19MwN', label: 'Anylogic Models' }
      ]
    },
    {
      title: 'Quarter-Car Control',
      category: 'Control Theory',
      tags: ['MATLAB', 'Simulink', 'LabVIEW', 'Arduino'],
      shortDescription: 'Newtonian dynamics and vibration analysis for suspension systems.',
      fullDescription: 'Designed closed-loop control strategies for optimal ride comfort using MATLAB/Simulink and hardware-in-the-loop with Arduino.',
      role: 'Control Engineer',
      achievements: [
        'Derived Newtonian models for suspension systems',
        'Designed PID and LQR control strategies',
        'Built real-time LabVIEW monitoring interface'
      ],
      icon: Settings,
      mainMedia: { type: 'video', url: '/experience/quarter_car_system/DAMPER SPRING.mp4' },
      gallery: [
        { type: 'video', url: '/experience/quarter_car_system/DAMPER SPRING.mp4', label: 'Simulation Response' }
      ]
    }
  ];

  const getMediaIcon = (type: string) => {
    switch (type) {
      case 'video': return <PlayCircle size={16} />;
      case 'pdf': return <FileText size={16} />;
      case 'pptx': return <Layers size={16} />;
      case 'docx': return <FileText size={16} />;
      case 'external_link': return <ExternalLink size={16} />;
      default: return <Camera size={16} />;
    }
  };

  return (
    <div className="space-y-12 pb-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl text-glow-cyan mb-4 uppercase">Project Levels</h2>
        <p className="font-mono text-friv-purple italic">"Click any tile to enter the level."</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const Icon = project.icon || Terminal;
          return (
            <div 
              key={index}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredId(index)}
              onMouseLeave={() => setHoveredId(null)}
              className="friv-card p-4 flex flex-col gap-4 group hover:border-friv-pink transition-all cursor-pointer relative"
            >
              <div className="aspect-video w-full bg-friv-dark border border-friv-purple/40 rounded-lg overflow-hidden group-hover:border-friv-cyan group-hover:shadow-[0_0_15px_rgba(0,245,212,0.2)] transition-all">
                {project.mainMedia?.type === 'video' ? (
                  <video src={project.mainMedia.url} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                ) : project.mainMedia?.type === 'image' ? (
                  <img src={project.mainMedia.url} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Icon size={48} className="text-friv-purple/40" />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm text-friv-cyan uppercase tracking-tighter">
                      {project.title}
                    </h3>
                    <p className="text-[8px] font-arcade text-friv-pink">{project.category}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="px-1.5 py-0.5 bg-friv-purple/10 text-friv-purple text-[6px] font-arcade border border-friv-purple/20 rounded uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-[10px] text-gray-400 font-mono line-clamp-2">
                  {project.shortDescription}
                </p>
              </div>

              {hoveredId === index && (
                <div className="absolute inset-0 bg-friv-cyan/10 pointer-events-none animate-pulse border-2 border-friv-cyan rounded-xl" />
              )}
            </div>
          );
        })}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-fade-in">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setSelectedProject(null)} 
          />
          
          <div className="friv-card w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col relative z-10 border-friv-cyan shadow-[0_0_40px_rgba(0,245,212,0.3)]">
            {/* Header */}
            <div className="p-4 border-b border-friv-purple/20 flex justify-between items-center bg-friv-dark">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-friv-cyan/20 rounded border border-friv-cyan/40">
                  <selectedProject.icon className="text-friv-cyan" size={20} />
                </div>
                <div>
                  <h3 className="text-lg text-white uppercase tracking-tighter leading-tight">{selectedProject.title}</h3>
                  <p className="text-[10px] font-arcade text-friv-pink">{selectedProject.category}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-friv-pink/20 text-gray-400 hover:text-friv-pink transition-colors rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-friv-deep/95">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side: Media & Details */}
                <div className="space-y-6">
                  <div className="friv-card p-2 bg-black/40">
                    {selectedProject.mainMedia?.type === 'video' ? (
                      <video src={selectedProject.mainMedia.url} controls className="w-full rounded border border-friv-purple/20" />
                    ) : (
                      <img src={selectedProject.mainMedia?.url} alt={selectedProject.title} className="w-full rounded border border-friv-purple/20" />
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-friv-cyan">
                      <Zap size={16} />
                      <h4 className="font-arcade text-[10px] uppercase">Mission Brief</h4>
                    </div>
                    <p className="text-sm text-gray-300 font-mono leading-relaxed bg-white/5 p-4 rounded-lg border border-friv-purple/10">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-friv-pink/5 border border-friv-pink/20 rounded-lg">
                      <span className="text-[8px] font-arcade text-friv-pink block mb-1">Role</span>
                      <span className="text-xs text-white font-mono uppercase">{selectedProject.role}</span>
                    </div>
                    <div className="p-3 bg-friv-cyan/5 border border-friv-cyan/20 rounded-lg">
                      <span className="text-[8px] font-arcade text-friv-cyan block mb-1">Status</span>
                      <span className="text-xs text-white font-mono uppercase">Completed</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Achievements & Resources */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-friv-cyan">
                      <Award size={16} />
                      <h4 className="font-arcade text-[10px] uppercase">Achievements</h4>
                    </div>
                    <ul className="space-y-3">
                      {selectedProject.achievements?.map((achievement, i) => (
                        <li key={i} className="flex gap-3 text-sm text-gray-300 font-mono">
                          <ChevronRight size={16} className="text-friv-pink shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-friv-cyan">
                      <Layers size={16} />
                      <h4 className="font-arcade text-[10px] uppercase">Inventory & Resources</h4>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedProject.gallery.map((item, i) => (
                        <a 
                          key={i}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-white/5 border border-friv-purple/20 rounded hover:border-friv-cyan hover:bg-friv-cyan/5 transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-friv-cyan group-hover:scale-110 transition-transform">
                              {getMediaIcon(item.type)}
                            </span>
                            <span className="text-[10px] text-gray-300 font-mono group-hover:text-white">{item.label}</span>
                          </div>
                          <Share2 size={12} className="text-gray-500 group-hover:text-friv-cyan" />
                        </a>
                      ))}
                      {selectedProject.link && (
                        <a 
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-friv-cyan/10 border border-friv-cyan/40 rounded hover:bg-friv-cyan/20 transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <ExternalLink size={16} className="text-friv-cyan" />
                            <span className="text-[10px] text-white font-arcade uppercase">Official Site</span>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>

                  {selectedProject.trustedLogos && (
                    <div className="pt-4 mt-auto">
                      <h4 className="font-arcade text-[8px] text-friv-cyan uppercase mb-3 opacity-60">Organisations that trusted us</h4>
                      <div className="flex flex-wrap gap-4 items-center justify-start">
                        {selectedProject.trustedLogos.map((logo, i) => (
                          <div key={i} className="h-12 w-24 bg-white/5 rounded p-2 border border-friv-purple/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:bg-white/10">
                            <img src={logo} alt="Partner Logo" className="max-h-full max-w-full object-contain" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-friv-purple/20 bg-friv-dark text-center">
              <span className="text-[8px] font-arcade text-friv-purple opacity-50 uppercase tracking-[0.2em]">
                System Interface v2.0 - End of Level
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
