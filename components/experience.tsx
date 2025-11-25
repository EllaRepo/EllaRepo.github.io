interface ExperienceProps {
  setActiveSection: (section: string) => void;
}

export default function Experience({ setActiveSection }: ExperienceProps) {
  const experiences = [
    {
      title: 'Full-Stack Developer ',
      company: 'Self-employed',
      period: 'Apr 2024 — Present',
      description:
        'Delivered scalable full-stack solutions including rental marketplaces, civic complaint systems, UI redesigns, and data-driven web apps.',
      skills: ['React', 'Python/Django', 'Node.js', 'HTML/ES6', 'JavaScript/TypeScript', 'RESTful APIs', 'PostgreSQL', 'SQL', 'MySQL', 'MongoDB', 'Git/GitHub','Docker', ' Unit & Integration test', 'Shell Scripting' ],
    },
    {
      title: 'Senior Software Engineer',
      company: 'Epana Technologies',
      period: ' Feb 2020 - Jan 2023',
      description:
        'Built cross-platform payroll management software and developed embedded firmware for SPWM solar inverters, GSM-enabled electric meters, and microcontroller peripherals, including driver development, code porting, and hardware-level system integration.',
      skills: ['Node.js', 'Electron', 'C', 'Embedded Firmware', 'Microcontrollers' , ],
    },
    {
      title: 'Software Engineer',
      company: 'dVentus Technologies',
      period: 'Sep 2015 - Dec 2019',
      description:
        'Led development of single- and three-phase smart electric meter firmware, mentoring trainees and delivering COSEM/DLMS communication stacks, firmware loaders, automated builds, and calibration automation achieving 80% time reduction. Optimized code, performed debugging and testing, customized meter data applications, supported pilot deployments, and implemented customer requirements across embedded and desktop systems.',
      skills: ['C', 'C++', 'COSEM/DLMS', 'HDLC', 'PRIME PLC', 'Firmware Development', 'Microcontrollers', 'Jenkins' ],
    },
  ];

  return (
    <section className="space-y-8 mb-16 lg:mb-20">
      <h3 className="text-2xl font-semibold">Experience</h3>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="space-y-3">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h4 className="font-semibold text-lg">{exp.title}</h4>
                <p className="text-accent text-sm">{exp.company}</p>
              </div>
              <p className="text-muted-foreground text-sm whitespace-nowrap">{exp.period}</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
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
          onClick={() => setActiveSection('education')}
          className="text-accent hover:text-accent/80 font-medium flex items-center gap-2 transition-colors"
        >
          View my education →
        </button>
      </div>
    </section>
  );
}
