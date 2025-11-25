'use client';

import { useState } from 'react';
import Hero from '@/components/hero';
import Navigation from '@/components/navigation';
import About from '@/components/about';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Contact from '@/components/contact';
import Education from '@/components/education';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-7xl mx-auto px-6 py-12 lg:py-20">
        {/* Sidebar Navigation */}
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Main Content */}
        <main className="flex-1 min-h-screen lg:min-h-auto">
          {activeSection === 'about' && (
            <>
              <Hero />
              <About setActiveSection={setActiveSection} />
            </>
          )}
          {activeSection === 'experience' && <Experience setActiveSection={setActiveSection} />}
          {activeSection === 'projects' && <Projects setActiveSection={setActiveSection}/>}
          {activeSection === 'education' && <Education setActiveSection={setActiveSection}/>}
          {activeSection === 'skills' && <Skills setActiveSection={setActiveSection}/>}
          {activeSection === 'contact' && <Contact />}
        </main>
      </div>
    </div>
  );
}
