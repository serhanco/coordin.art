import React, { useEffect, useRef, useState } from 'react';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

const Founder: React.FC = () => {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="founder" className="py-24 bg-brand-light relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -left-20 top-20 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Area */}
          <div 
            className={`w-full lg:w-1/3 transition-all duration-1000 ease-out delay-200 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-brand-navy/5">
                {/* Placeholder for Canan Çakar Illustration */}
                <img 
                  src="https://placehold.co/600x800/0a192f/fcd34d?text=Founder+Portrait&font=playfair-display" 
                  alt="MSc. Arch. Canan Çakar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl max-w-[220px]">
                <p className="font-serif font-bold text-xl text-brand-navy">Canan Çakar</p>
                <p className="text-sm text-gray-500">MSc. Arch. & Founder</p>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div 
            className={`w-full lg:w-2/3 space-y-8 transition-all duration-1000 ease-out delay-100 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">Leadership</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Vision & Experience</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Coordin.art’s founder, MSc. Architect Canan Çakar, is a competent architect and project director with nearly 20 years of experience in real estate development, design management, and large-scale project coordination. 
                Leading Coordin.art with a vision focused on clarity, collaboration, and excellence, she ensures every project is delivered with precision and purpose.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="text-brand-yellowDark" />
                  <h4 className="font-bold text-brand-navy">Education</h4>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• ITU - Bachelor's Degree</li>
                  <li>• ITU - MSc. Real Estate Development</li>
                  <li>• YTU - Project Management Certificate</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-brand-yellowDark" />
                  <h4 className="font-bold text-brand-navy">Certification</h4>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• LEED BD+C Expertise</li>
                  <li>• WELL Certification Systems</li>
                  <li>• Sustainability Training</li>
                </ul>
              </div>
            </div>

            <div className="bg-brand-navy/5 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                    <BookOpen className="text-brand-navy flex-shrink-0 mt-1" size={20} />
                    <div>
                        <h4 className="font-bold text-brand-navy mb-2">Areas of Expertise</h4>
                        <p className="text-sm text-gray-700">
                            Design management, real estate development strategy, stakeholder leadership. 
                            Experience working with firms like Steven Holl Architects and RAMSA. 
                            Active mentorship and collaboration with ULI, GYODER, and GKL.
                        </p>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;