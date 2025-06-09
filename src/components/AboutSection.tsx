
import React from 'react';
import { User, Shield, Code, Database, Lock, Terminal } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-cyber-chateau">ABOUT.TXT</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-volt via-cyber-chateau to-cyber-volt mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="border border-cyber-volt/30 bg-cyber-gray/20 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-cyber-volt mr-2 animate-flicker" />
                <h3 className="text-xl font-semibold text-cyber-chateau">About Me</h3>
              </div>
              <p className="text-cyber-volt/80 leading-relaxed animate-flicker">
                Hi! My name is Sunheng, but I am also known as Sunny to some people. I just graduated recently with a Bachelor's Degree 
                in computer science at Cal State LA. I have a passion for cybersecurity and am looking for a career in this specific branch.
                I am currently in the process of earning certificates as well as coding. Feel free to contact me!
              </p>
            </div>

            <div className="border border-cyber-cobalt/30 bg-cyber-gray/20 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-cyber-volt mr-2 animate-pulse" />
                <h3 className="text-xl font-semibold text-cyber-chateau">Experience</h3>
              </div>
              <p className="text-cyber-volt/80 leading-relaxed animate-flicker">
                My experience has ranged in various branches of computer science from my time as
                a student. This varies from doing work in virtual reality, data science, and robotics.
                My most promiment experience was being a student researcher from the summer of 2024 to late
                spring 2025, working in the intersection of virtual reality and drug discovery under Dr. Negin 
                Forouzesh.
                
              </p>
            </div>

            <div className="border border-cyber-amethyst/30 bg-cyber-gray/20 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-cyber-volt mr-2 animate-pulse" />
                <h3 className="text-xl font-semibold text-cyber-chateau">Development Skills</h3>
              </div>
              <p className="text-cyber-volt/80 leading-relaxed animate-flicker">
                I am proficient in the programming languages Python, Java, and C++.
                Additionally, I have familiarity with VSCode, PyCharm, CLion, IntelliJ, Eclipse,
                Git, and web development. Robotics is my speciality, and I have coded with
                Arduinos.
              </p>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-volt via-cyber-cobalt to-cyber-amethyst rounded-lg p-1 animate-pulse-glow">
                <div className="bg-cyber-black rounded-lg h-full w-full"></div>
              </div>
              <div className="relative p-8">
                <div className="w-80 h-96 rounded-lg overflow-hidden border-2 border-cyber-volt/50">
                  <img
                    src="/lovable-uploads/bd77bc32-b3ec-4872-a38f-a08bb558d6f2.png"
                    alt="Sunheng Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log("Image failed to load, using fallback"); 
                      e.currentTarget.src = '/placeholder.svg'
                    }}
                  />
                </div>
                <div className="absolute top-4 right-4 text-cyber-volt text-6xl font-mono animate-flicker">
                  &gt;
                </div>
                <div className="absolute bottom-4 left-4 text-cyber-volt text-4xl font-mono animate-flicker">
                  _
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
