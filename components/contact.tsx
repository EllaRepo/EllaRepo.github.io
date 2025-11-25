import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section className="space-y-8 mb-16 lg:mb-20">
      <h3 className="text-2xl font-semibold">Get in Touch</h3>

      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          I'm always interested in discussing interesting engineering problems, mentoring opportunities, and collaborations. Feel free to reach out.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:eliaberango@gmail.com"
            className="flex items-center gap-3 text-lg font-medium text-accent hover:text-accent/80 transition-colors group"
          >
            <Mail size={24} />
            <span>eliaberango@gmail.com</span>
            <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            +251 912 611 654
          </p>
          <div className="pt-6 border-t border-border space-y-4">
            <p className="text-sm text-muted-foreground">Find me on</p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/eliab-erango-189b4a85/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/EllaRepo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={20} />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
