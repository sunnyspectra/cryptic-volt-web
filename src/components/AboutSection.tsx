
import React from 'react';
import { User, Shield, Code, Database, Lock, Terminal } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-glitch">
            <span className="text-cyber-volt animate-flicker">ABOUT.EXE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-volt via-cyber-cobalt to-cyber-amethyst mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="border border-cyber-volt/30 bg-cyber-gray/20 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-cyber-volt mr-2 animate-flicker" />
                <h3 className="text-xl font-semibold text-cyber-volt">Personal Profile</h3>
              </div>
              <p className="text-cyber-volt/80 leading-relaxed animate-flicker">
                Cybersecurity professional with 5+ years of experience in penetration testing, 
                secure application development, and incident response. Passionate about protecting 
                digital infrastructures and developing robust security solutions.
              </p>
            </div>

            <div className="border border-cyber-cobalt/30 bg-cyber-gray/20 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-cyber-cobalt mr-2 animate-pulse" />
                <h3 className="text-xl font-semibold text-cyber-cobalt">Security Focus</h3>
              </div>
              <p className="text-cyber-cobalt/80 leading-relaxed animate-flicker">
                Specialized in web application security, network penetration testing, 
                and secure coding practices. Certified in multiple security frameworks 
                and constantly updating skills with emerging threats.
              </p>
            </div>

            <div className="border border-cyber-amethyst/30 bg-cyber-gray/20 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-cyber-amethyst mr-2 animate-pulse" />
                <h3 className="text-xl font-semibold text-cyber-amethyst">Development Skills</h3>
              </div>
              <p className="text-cyber-amethyst/80 leading-relaxed animate-flicker">
                Full-stack developer proficient in React, Node.js, Python, and Go. 
                Experience building secure applications with proper authentication, 
                encryption, and data protection measures.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="cyber-border p-8 rounded-lg bg-cyber-gray/10 backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyber-volt via-cyber-cobalt to-cyber-amethyst p-1 animate-pulse-glow">
                  <div className="w-full h-full rounded-full bg-cyber-black flex items-center justify-center">
                    <img 
                      src="/me.jpg" 
                      alt="Profile" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 border border-cyber-volt/20 rounded-lg">
                  <Database className="w-8 h-8 text-cyber-volt mx-auto mb-2 animate-pulse" />
                  <h4 className="font-semibold text-cyber-volt animate-flicker">Data Security</h4>
                  <p className="text-sm text-cyber-volt/60">Encryption & Privacy</p>
                </div>
                <div className="p-4 border border-cyber-cobalt/20 rounded-lg">
                  <Lock className="w-8 h-8 text-cyber-cobalt mx-auto mb-2 animate-pulse" />
                  <h4 className="font-semibold text-cyber-cobalt animate-flicker">Access Control</h4>
                  <p className="text-sm text-cyber-cobalt/60">Authentication</p>
                </div>
                <div className="p-4 border border-cyber-amethyst/20 rounded-lg">
                  <Shield className="w-8 h-8 text-cyber-amethyst mx-auto mb-2 animate-pulse" />
                  <h4 className="font-semibold text-cyber-amethyst animate-flicker">Threat Analysis</h4>
                  <p className="text-sm text-cyber-amethyst/60">Risk Assessment</p>
                </div>
                <div className="p-4 border border-cyber-volt/20 rounded-lg">
                  <Terminal className="w-8 h-8 text-cyber-volt mx-auto mb-2 animate-pulse" />
                  <h4 className="font-semibold text-cyber-volt animate-flicker">Pentesting</h4>
                  <p className="text-sm text-cyber-volt/60">Vulnerability Discovery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
