import React, { useEffect, useRef, useState } from 'react';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    id: 'holl',
    title: 'Holl Kaplankaya',
    category: 'Luxury Residential',
    image: 'https://placehold.co/800x600/0a192f/fcd34d?text=Residential+Concept' 
  },
  {
    id: 'marina',
    title: 'Kaplankaya Marina Village',
    category: 'Mixed Use',
    image: 'https://placehold.co/800x600/0a192f/fcd34d?text=Marina+Masterplan'
  },
  {
    id: 'dsm',
    title: 'DSM-Firmenich',
    category: 'Industrial Center',
    image: 'https://placehold.co/800x600/0a192f/fcd34d?text=Industrial+Sketch'
  }
];

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div 
          className={`flex flex-col md:flex-row justify-between items-end mb-16 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">Our Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy">Key Projects</h3>
          </div>
          <p className="text-gray-500 mt-4 md:mt-0 max-w-md text-right hidden md:block">
            Award-winning structures developed in collaboration with world-renowned architectural firms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden rounded-lg cursor-default shadow-md hover:shadow-xl transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                {/* Decorative Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#0a192f_1px,transparent_0)] bg-[size:20px_20px]"></div>
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-brand-yellow text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                <h4 className="text-white text-2xl font-serif font-medium">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;