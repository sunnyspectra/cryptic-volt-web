
import React from 'react';
import { Terminal, Shield, Code, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-cobalt/10 via-transparent to-cyber-amethyst/10"></div>
      
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Shield className="w-24 h-24 text-cyber-volt animate-pulse-glow" />
            <div className="absolute inset-0 animate-ping">
              <Shield className="w-24 h-24 text-cyber-volt opacity-20" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-glitch">
          <span className="text-cyber-volt cyber-text-shadow animate-flicker">
            CYBER
          </span>
          <span className="text-cyber-amethyst"> SECURITY </span>
          <span className="text-cyber-cobalt animate-flicker">
            SPECIALIST
          </span>
        </h1>

        <div className="text-lg md:text-xl mb-8 text-cyber-volt/80 animate-flicker">
          <p className="mb-2">
            &gt; Penetrating systems, securing networks, defending digital assets_
          </p>
          <p className="text-cyber-amethyst">
            &gt; Full-stack developer with cybersecurity expertise_
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center space-x-2 bg-cyber-gray/50 px-4 py-2 rounded-lg border border-cyber-volt/30 hover:border-cyber-volt transition-all duration-300">
            <Terminal className="w-5 h-5 text-cyber-volt" />
            <span className="text-cyber-volt animate-flicker">Penetration Testing</span>
          </div>
          <div className="flex items-center space-x-2 bg-cyber-gray/50 px-4 py-2 rounded-lg border border-cyber-cobalt/30 hover:border-cyber-cobalt transition-all duration-300">
            <Code className="w-5 h-5 text-cyber-cobalt" />
            <span className="text-cyber-cobalt animate-flicker">Secure Development</span>
          </div>
          <div className="flex items-center space-x-2 bg-cyber-gray/50 px-4 py-2 rounded-lg border border-cyber-amethyst/30 hover:border-cyber-amethyst transition-all duration-300">
            <Zap className="w-5 h-5 text-cyber-amethyst" />
            <span className="text-cyber-amethyst animate-flicker">Incident Response</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-cyber-volt to-cyber-cobalt text-cyber-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-volt/50 transition-all duration-300 animate-pulse-glow"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-cyber-amethyst text-cyber-amethyst hover:bg-cyber-amethyst hover:text-cyber-black transition-all duration-300 rounded-lg animate-flicker"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyber-volt rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-volt rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
