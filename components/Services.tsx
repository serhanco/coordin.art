import React from 'react';
import { PenTool, Briefcase, Users } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'manage',
    title: 'We Manage',
    subtitle: 'Project Management',
    description: 'Comprehensive management covering every stage from investment decision to final delivery, ensuring on-time and on-budget delivery with highest quality standards.',
    icon: Briefcase
  },
  {
    id: 'coordinate',
    title: 'We Coordinate',
    subtitle: 'Design Coordination',
    description: 'Ensuring harmony across different disciplines, managing the design processes of complex structures end-to-end to create unified architectural solutions.',
    icon: PenTool
  },
  {
    id: 'develop',
    title: 'We Develop',
    subtitle: 'Leadership Development',
    description: 'Enhancing team competencies for project success, offering strategic architectural leadership and professional development consultancy.',
    icon: Users
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy">Comprehensive & End-to-End</h3>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">Strategic architectural coordination and consultancy for global teams.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-transparent hover:border-brand-yellow group">
              <div className="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-yellow transition-colors duration-300">
                <service.icon className="text-brand-navy w-7 h-7" />
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