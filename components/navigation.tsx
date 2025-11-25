import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = ['about', 'experience', 'education', 'projects', 'skills', 'contact'];

  return (
    <nav className="lg:sticky lg:top-20 lg:w-48 flex flex-col gap-8">
      {/* Profile Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-balance">Eliab Erango</h1>
        <p className="text-muted-foreground text-sm">Senior Software Engineer</p>
        <p className="text-muted-foreground text-xs leading-relaxed">
          Developing scalable, maintainable code to deliver reliable, high-quality solutions.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex flex-col gap-2">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveSection(item)}
            className={`text-sm font-medium text-left pb-2 border-b-2 transition-colors ${
              activeSection === item
                ? 'border-accent text-accent'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex gap-4 mt-4 lg:mt-8">
        <a
          href="https://github.com/EllaRepo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-accent transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/eliab-erango-189b4a85/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-accent transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:eliaberango@gmail.com"
          className="text-muted-foreground hover:text-accent transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>
    </nav>
  );
}
