import React, { useState, useEffect, useRef } from 'react';

export const StatsSection: React.FC = () => {
  const [counts, setCounts] = useState({ students: 0, courses: 0, businesses: 0 });
  const hasAnimated = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const duration = 1500;
          const steps = 30;
          const stepTime = duration / steps;
          
          let currentStep = 0;
          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            
            setCounts({
              students: Math.floor(179 * progress),
              courses: Math.floor(6 * progress),
              businesses: Math.floor(13 * progress)
            });

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts({ students: 179, courses: 6, businesses: 13 });
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-12 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <div className="bg-[#F5F6F8] p-6 rounded-lg border border-[#E5E7EB]">
            <span className="block text-4xl sm:text-5xl font-bold text-[#172554] mb-2">
              {counts.students}+
            </span>
            <span className="text-sm font-semibold text-[#667085] uppercase tracking-wider">
              Wanafunzi Waliójifunza
            </span>
          </div>

          <div className="bg-[#F5F6F8] p-6 rounded-lg border border-[#E5E7EB]">
            <span className="block text-4xl sm:text-5xl font-bold text-[#172554] mb-2">
              {counts.courses}
            </span>
            <span className="text-sm font-semibold text-[#667085] uppercase tracking-wider">
              Kozi Zinazopatikana
            </span>
          </div>

          <div className="bg-[#F5F6F8] p-6 rounded-lg border border-[#E5E7EB]">
            <span className="block text-4xl sm:text-5xl font-bold text-[#172554] mb-2">
              {counts.businesses}+
            </span>
            <span className="text-sm font-semibold text-[#667085] uppercase tracking-wider">
              Biashara Tunazofanya Nazo Kazi
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};
