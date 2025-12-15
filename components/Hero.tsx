import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 grid-bg overflow-hidden">
      {/* Background Question Mark Watermark (Subtle) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <span className="text-[40rem] font-serif font-bold text-brand-navy">?</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Main Headline mimicking the provided visual style */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-brand-navy leading-tight md:leading-[1.1]">
            What turns a <br className="hidden md:block" />
            <span className="relative inline-block px-2 mx-1">
              <span className="absolute inset-0 bg-brand-yellow -skew-y-1 rounded-sm"></span>
              <span className="relative text-brand-navy">complex</span>
            </span>
             building into a
            <br />
            <span className="relative inline-block px-2 mt-2">
              <span className="absolute inset-0 bg-brand-yellow skew-y-1 rounded-sm"></span>
              <span className="relative text-brand-navy">landmark?</span>
            </span>
          </h1>

          <div className="max-w-2xl mx-auto">
             <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
              It's the art of seeing the <span className="bg-brand-yellow/50 px-1">entire picture</span>, from the first sketch to the day the doors open.
            </p>
          </div>

          <div className="pt-12 flex flex-col items-center animate-bounce duration-[2000ms]">
            <span className="text-sm font-medium text-gray-400 mb-2">DISCOVER</span>
            <ArrowDown className="text-brand-navy" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;