interface AboutProps {
  setActiveSection: (section: string) => void;
}

export default function About({ setActiveSection }: AboutProps) {
  return (
    <section className="space-y-12 mb-16 lg:mb-20">
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">About</h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            With 8+ years of of balanced experience in embedded systems and full-stack web development.
          </p>
          <p>
            Practically demonstrated in designing and developing low-level firmware for microcontrollers and designing and maintaining feature rich web applications and developing scalable RESTful APIs.
          </p>
          <p>
            Dedicated to improving efficiency through the use of advanced code optimizations, strategic project refactoring, and delivering robust, high-availability software solutions on a variety of technology stacks.
          </p>
        </div>
      </div>

      <div className="pt-8 border-t border-border">
        <button
          onClick={() => setActiveSection('experience')}
          className="text-accent hover:text-accent/80 font-medium flex items-center gap-2 transition-colors"
        >
          View my experience →
        </button>
      </div>
    </section>
  );
}
