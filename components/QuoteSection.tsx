import React from 'react';

const QuoteSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="relative max-w-2xl w-full">
            {/* Speech Bubble effect using Borders/Shadows */}
            <div className="relative bg-white border-2 border-brand-navy rounded-2xl p-10 md:p-16 shadow-[8px_8px_0px_0px_rgba(10,25,47,1)]">
                <p className="text-3xl md:text-5xl font-bold text-brand-navy leading-snug">
                    “ Coordination. <br />
                    <span className="bg-brand-yellow px-2 ml-4">Coordinate</span>. <span className="bg-brand-yellow px-2">Art</span>.
                </p>
                
                {/* Bubble tail */}
                <div className="absolute -bottom-4 right-12 w-8 h-8 bg-white border-r-2 border-b-2 border-brand-navy transform rotate-45 z-10"></div>
                <div className="absolute -bottom-[22px] right-[42px] w-8 h-8 bg-brand-navy transform rotate-45 -z-0"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;