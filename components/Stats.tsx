import React, { useEffect, useState, useRef } from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { id: '1', value: '20', label: 'Years Experience' },
  { id: '2', value: '891K', label: 'm² Managed Area' },
  { id: '3', value: '15+', label: 'Large Scale Projects' },
  { id: '4', value: '8', label: 'Awards & Certificates' },
];

const AnimatedStat: React.FC<{ item: StatItem }> = ({ item }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [item.value]);

  const startAnimation = () => {
    // Parse the numeric part and the suffix (e.g., "891K" -> 891, "K")
    const match = item.value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(item.value);
      return;
    }

    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const current = Math.floor(easeOut * target);
      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(item.value); // Ensure it ends exactly on the target
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div ref={elementRef} className="p-4 transform hover:-translate-y-1 transition-transform duration-300">
      <div className="text-4xl md:text-5xl font-bold text-brand-yellow mb-2 font-serif">
        {displayValue}
      </div>
      <div className="text-sm md:text-base font-medium text-gray-300 tracking-wider uppercase font-sans">
        {item.label}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-brand-navy text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/10">
          {stats.map((stat) => (
            <AnimatedStat key={stat.id} item={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;