import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, Share2, Terminal, AlertCircle, CheckCircle2 } from 'lucide-react';
import TypewriterText from './TypewriterText';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzLHAobUldcvVhZJzrnBA510P-c6BGzzf6Q0hN-3lXES5W3pXljSmYd0wmjQcB8S7w2/exec'; 

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      setStatus('sent');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Transmission error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl text-glow-cyan mb-4 uppercase">Mission Control</h2>
        <div className="h-6">
          <TypewriterText 
            text="Ready to collaborate on the next big project?" 
            className="text-friv-pink font-arcade text-[10px] md:text-xs"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="friv-card p-6 space-y-4 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 text-friv-purple/10 -rotate-12">
              <Terminal size={120} />
            </div>
            
            <h3 className="font-arcade text-xs text-friv-cyan uppercase">Transmission Details</h3>
            <p className="font-mono text-sm text-gray-400">
              Drop a message to initiate contact. Whether it's about robotics, AI, or just to say hi, my antenna is always up.
            </p>
            
            <div className="flex flex-col gap-4 pt-4">
              <a href="mailto:manel.benhassine@insat.ucar.tn" className="flex items-center gap-3 text-friv-pink hover:text-friv-cyan transition-colors group">
                <div className="p-2 bg-friv-pink/10 rounded border border-friv-pink/20 group-hover:border-friv-cyan group-hover:bg-friv-cyan/10">
                  <Mail size={16} />
                </div>
                <span className="font-mono text-sm">manel.benhassine@insat.ucar.tn</span>
              </a>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: 'https://github.com/manelx2' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/manel-ben-hassine/' },
                  { icon: Share2, href: 'https://www.reddit.com/user/mxxspace001_mission5/' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-friv-deep border-2 border-friv-purple/40 rounded-lg hover:border-friv-cyan hover:shadow-[0_0_10px_#00F5D4] transition-all"
                  >
                    <social.icon size={20} className="text-friv-cyan" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 bg-friv-pink/5 border border-friv-pink/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-friv-pink animate-pulse" />
              <span className="font-arcade text-[8px] text-friv-pink uppercase">Current Location</span>
            </div>
            <p className="font-mono text-xs text-gray-400">Tunis, Tunisia [36.8065° N, 10.1815° E]</p>
          </div>
        </div>

        <div className="space-y-4">
          <form onSubmit={handleSubmit} className="friv-card p-6 space-y-4">
            <div className="space-y-2">
              <label className="font-arcade text-[8px] text-friv-cyan uppercase">Caller Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-black/40 border-2 border-friv-purple/20 rounded-lg p-3 font-mono text-sm focus:border-friv-cyan outline-none transition-all"
                placeholder="ENTER_NAME..."
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-arcade text-[8px] text-friv-cyan uppercase">Return Signal (Email)</label>
              <input 
                type="email" 
                required
                className="w-full bg-black/40 border-2 border-friv-purple/20 rounded-lg p-3 font-mono text-sm focus:border-friv-cyan outline-none transition-all"
                placeholder="EMAIL_ADDRESS..."
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="font-arcade text-[8px] text-friv-cyan uppercase">Frequency Message</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-black/40 border-2 border-friv-purple/20 rounded-lg p-3 font-mono text-sm focus:border-friv-cyan outline-none transition-all resize-none"
                placeholder="YOUR_MESSAGE_HERE..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            <button 
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className={`w-full py-4 rounded-xl font-arcade text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-3 border-b-4 active:border-b-0 active:translate-y-1 ${
                status === 'sent' 
                  ? 'bg-green-500 border-green-700 text-white cursor-default' 
                  : status === 'error'
                  ? 'bg-red-500 border-red-700 text-white'
                  : 'bg-friv-cyan border-friv-deep text-friv-deep hover:bg-white hover:border-gray-300'
              }`}
            >
              {status === 'idle' && <><Send size={16} /> START MISSION</>}
              {status === 'sending' && 'UPLOADING...'}
              {status === 'sent' && <><CheckCircle2 size={16} /> MISSION LAUNCHED!</>}
              {status === 'error' && <><AlertCircle size={16} /> SIGNAL LOST</>}
            </button>
          </form>

          {status === 'sent' && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg animate-fade-in">
              <p className="font-mono text-xs text-green-400 text-center">
                Message successfully uploaded to the central mainframe. I'll get back to you soon!
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg animate-fade-in">
              <p className="font-mono text-xs text-red-400 text-center">
                Signal lost. Please try again.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
