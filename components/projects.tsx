import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  setActiveSection: (section: string) => void;
}

export default function Projects({ setActiveSection }: ProjectsProps) {
  const projects = [
    {
    name: 'simple_shell',
    description:
      'A simple UNIX command interpreter capable of running the most common and basic UNIXcommands',
    links: { github: ' https://github.com/EllaRepo/simple_shell', demo: '#' },
    tags: ['C'],
    featured: true,
    },
    {
      name: 'ResolveNow web App',
      description:
        'Web application system of a complaint registration and management where users signup and report their complaints on public infrastructures. Users also can follow the status of theircomplaint.',
      links: { github: 'https://github.com/EllaRepo/resolvenow', demo: 'https://resolvenow.onrender.com/' },
      tags: ['Python/Django', 'JavaScript/TypeScript', 'HTML', 'CSS', 'PostgreSQL'],
      featured: true,
    },
    {
      name: 'AirBnB_clone',
      description:
        'AirBnB_clone is a complete web application, integrating database storage, a back-end API, and front-end interfacing in a clone of AirBnB.',
      links: { github: ' https://github.com/EllaRepo/AirBnB_clone', demo: '#' },
      tags: ['Python', 'HTML', 'CSS'],
      featured: false,
    },
  ];

  return (
    <section className="space-y-8 mb-16 lg:mb-20">
      <h3 className="text-2xl font-semibold">Projects</h3>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`space-y-4 p-6 rounded-lg transition-colors ${
              project.featured ? 'bg-secondary' : 'hover:bg-secondary/30 border border-border'
            }`}
          >
            <div className="flex justify-between items-start gap-4">
              <h4 className="font-semibold text-lg">{project.name}</h4>
              <div className="flex gap-2">
                <a
                  href={project.links.github}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href={project.links.demo}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded text-xs font-medium bg-background text-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="pt-8 border-t border-border">
        <button
          onClick={() => setActiveSection('skills')}
          className="text-accent hover:text-accent/80 font-medium flex items-center gap-2 transition-colors"
        >
          View my skills →
        </button>
      </div>
    </section>
  );
}
