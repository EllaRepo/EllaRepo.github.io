interface Educationrops {
  setActiveSection: (section: string) => void;
}

export default function Education({ setActiveSection }: Educationrops) {
  const education = [
    {
      university: 'Addis Ababa Institute of Technology (AAiT) ',
      degree: 'MSc in  Computer Engineering',
      period: '2022 — Present',
      place: 'Addis Ababa, Ethiopia',
    },
    {
      university: 'Addis Ababa Institute of Technology (AAiT)',
      degree: 'Bachelor of Science in  Electrical Engineering (Computer)',
      period: '2010 - 2015',
      place: 'Addis Ababa, Ethiopia',
    },
    {
      university: 'ALX Software Engineering Programme',
      degree: 'Certificate, Back-end web development',
      period: ' Feb 2020 - Jan 2023',
      place: 'Online',
    },
    {
      university: 'ALX Software Engineering Programme',
      degree: 'Certificate, AI Starter Kit',
      period: '2025',
      place: 'Online',
    },
  ];

  return (
    <section className="space-y-8 mb-16 lg:mb-20">
      <h3 className="text-2xl font-semibold">Education</h3>
      <div className="space-y-12">
        {education.map((edu, index) => (
          <div key={index} className="space-y-3">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h4 className="font-semibold text-lg">{edu.university}</h4>
                <p className="text-accent text-sm">{edu.degree}</p>
              </div>
              <p className="text-muted-foreground text-sm whitespace-nowrap">{edu.period}</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">{edu.place}</p>
          </div>
        ))}
      </div>
      <div className="pt-8 border-t border-border">
        <button
          onClick={() => setActiveSection('projects')}
          className="text-accent hover:text-accent/80 font-medium flex items-center gap-2 transition-colors"
        >
          View my projects →
        </button>
      </div>
    </section>
  );
}
