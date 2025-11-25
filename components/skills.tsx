import { ca } from "date-fns/locale";

interface SkillsProps {
  setActiveSection: (section: string) => void;
}

export default function Skills({ setActiveSection }: SkillsProps) {
  const skillCategories = [
    {
      category: 'Full-Stack & Web Development',
      skills: ['React, Vue (Front-end)', 'JavaScript/TypeScript', 'Node.js & Express', 'Django / Python', 'Electron', 'UI/UX implementation','RESTful API design & development', 'Scalable web application architecture'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB',],
    },
    {
      category: 'Automation & DevOps',
      skills: ['Jenkins', 'Automated build processes', 'Automated calibration workflows', 'Deployment and release management'],
    },
    {
      category: 'Infrastructure',
      skills: ['Kubernetes', 'Docker', 'CI/CD'],
    },
    {
      category: 'Embedded Systems & Firmware',
      skills: ['Embedded software development', 'Microcontroller programming (8/16/32-bit)', 'Firmware design & implementation', 'Driver development for MCU peripherals', 'Code porting and hardware-level integration', 'SPWM inverter firmware development', 'Firmware loader/updater development', 'Smart electric meter firmware (single-phase & three-phase)'],
    },
    {
      category: 'Communication Protocols',
      skills: ['I2C', 'SPI', 'UART', 'COSEM/DLMS (Application Layer)', 'HDLC & PRIME (Data Link Layer)', 'Optical, PLC, and RF communication (Physical Layer)',]
    },
  ];

  return (
    <section className="space-y-8 mb-16 lg:mb-20">
      <h3 className="text-2xl font-semibold">Skills & Expertise</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-4">
            <h4 className="font-semibold text-foreground">{category.category}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-accent text-accent-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="pt-8 border-t border-border">
        <button
          onClick={() => setActiveSection('contact')}
          className="text-accent hover:text-accent/80 font-medium flex items-center gap-2 transition-colors"
        >
          View my contact →
        </button>
      </div>
    </section>
  );
}
