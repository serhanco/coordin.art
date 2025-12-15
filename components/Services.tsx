import React, { useEffect, useRef, useState } from 'react';
import { ServiceItem } from '../types';

// Custom Abstract Icons
const ManageIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Abstract Grid/Structure */}
    <rect x="20" y="20" width="60" height="60" rx="4" />
    <line x1="50" y1="20" x2="50" y2="80" />
    <line x1="20" y1="50" x2="80" y2="50" />
    {/* Highlighted Quadrant */}
    <rect x="50" y="20" width="30" height="30" className="fill-brand-yellow/80 stroke-none" />
    {/* Overlay lines for the filled quadrant */}
    <path d="M50 20 V50 H80" stroke="currentColor" fill="none" />
  </svg>
);

const CoordinateIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Triangular connection */}
    <path d="M50 20 L20 80 H80 Z" />
    {/* Nodes */}
    <circle cx="50" cy="20" r="8" className="fill-white" />
    <circle cx="20" cy="80" r="8" className="fill-white" />
    <circle cx="80" cy="80" r="8" className="fill-brand-yellow stroke-none" />
    <circle cx="80" cy="80" r="8" />
    {/* Center Logic */}
    <circle cx="50" cy="55" r="4" fill="currentColor" stroke="none" />
    <line x1="50" y1="28" x2="50" y2="51" strokeWidth="3" strokeDasharray="5 5" />
  </svg>
);

const DevelopIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Steps Up */}
    <path d="M20 80 H40 V60 H60 V40 H80" />
    {/* Growth Trajectory */}
    <path d="M25 75 Q 50 75 75 25" strokeDasharray="6 6" strokeWidth="4" />
    {/* Goal/Spark */}
    <circle cx="75" cy="25" r="8" className="fill-brand-yellow stroke-none" />
    <circle cx="75" cy="25" r="8" />
  </svg>
);

const services: ServiceItem[] = [
  {
    id: 'manage',
    title: 'We Manage',
    subtitle: 'Project Management',
    description: 'Comprehensive management covering every stage from investment decision to final delivery, ensuring on-time and on-budget delivery with highest quality standards.',
    icon: ManageIcon
  },
  {
    id: 'coordinate',
    title: 'We Coordinate',
    subtitle: 'Design Coordination',
    description: 'Ensuring harmony across different disciplines, managing the design processes of complex structures end-to-end to create unified architectural solutions.',
    icon: CoordinateIcon
  },
  {
    id: 'develop',
    title: 'We Develop',
    subtitle: 'Leadership Development',
    description: 'Enhancing team competencies for project success, offering strategic architectural leadership and professional development consultancy.',
    icon: DevelopIcon
  }
];

const Services: React.FC = () => {
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
    <section ref={sectionRef} id="services" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div 
          className={`mb-16 text-center transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy">Comprehensive & End-to-End</h3>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">Strategic architectural coordination and consultancy for global teams.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-700 border-t-4 border-transparent hover:border-brand-yellow group transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-yellow transition-colors duration-300">
                <service.icon className="text-brand-navy w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-brand-navy mb-1">{service.title}</h4>
              <h5 className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-4">{service.subtitle}</h5>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;