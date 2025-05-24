
import React from 'react';
import { Shield, Code, Database, Network, Lock, Terminal } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Security Tools",
      icon: Shield,
      color: "volt",
      skills: [
        { name: "Burp Suite", level: 95 },
        { name: "Metasploit", level: 90 },
        { name: "Nmap", level: 95 },
        { name: "Wireshark", level: 85 },
        { name: "OWASP ZAP", level: 88 }
      ]
    },
    {
      title: "Programming",
      icon: Code,
      color: "cobalt",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Go", level: 85 },
        { name: "C++", level: 80 },
        { name: "Bash", level: 92 }
      ]
    },
    {
      title: "Frameworks",
      icon: Database,
      color: "amethyst",
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 88 },
        { name: "Django", level: 85 },
        { name: "Flask", level: 90 },
        { name: "Express", level: 87 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'volt':
        return {
          text: 'text-cyber-volt',
          border: 'border-cyber-volt',
          bg: 'bg-cyber-volt'
        };
      case 'cobalt':
        return {
          text: 'text-cyber-cobalt',
          border: 'border-cyber-cobalt',
          bg: 'bg-cyber-cobalt'
        };
      case 'amethyst':
        return {
          text: 'text-cyber-amethyst',
          border: 'border-cyber-amethyst',
          bg: 'bg-cyber-amethyst'
        };
      default:
        return {
          text: 'text-cyber-volt',
          border: 'border-cyber-volt',
          bg: 'bg-cyber-volt'
        };
    }
  };

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-glitch">
            <span className="text-cyber-volt animate-flicker">SKILLS.DB</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-volt via-cyber-cobalt to-cyber-amethyst mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;
            
            return (
              <div key={index} className={`border ${colors.border}/30 bg-cyber-gray/20 p-6 rounded-lg backdrop-blur-sm hover:border-${category.color}/60 transition-all duration-300`}>
                <div className="flex items-center mb-6">
                  <Icon className={`w-8 h-8 ${colors.text} mr-3 animate-pulse`} />
                  <h3 className={`text-xl font-semibold ${colors.text} animate-flicker`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className={`${colors.text}/80 animate-flicker`}>{skill.name}</span>
                        <span className={`${colors.text} text-sm font-mono animate-flicker`}>{skill.level}%</span>
                      </div>
                      <div className={`w-full bg-cyber-gray h-2 rounded-full border ${colors.border}/20`}>
                        <div 
                          className={`${colors.bg} h-full rounded-full animate-pulse-glow transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-cyber-gray/20 border border-cyber-volt/30 px-6 py-3 rounded-lg">
            <Terminal className="w-6 h-6 text-cyber-volt animate-pulse" />
            <span className="text-cyber-volt animate-flicker font-mono">
              &gt; Constantly learning and adapting to new technologies_
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
