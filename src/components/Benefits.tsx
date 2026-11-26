import React from 'react';
import { BENEFITS } from '../data/courses';

export const Benefits: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F5F6F8] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151923] tracking-tight">
            Kwa Nini Ujifunze Teknolojia Leo?
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            Faida za kuwa na ujuzi wa teknolojia na Artificial Intelligence katika ulimwengu wa sasa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.number}
              className="bg-white border border-[#E5E7EB] p-6 rounded-lg space-y-4"
            >
              <div className="text-2xl font-bold text-[#172554] bg-[#F5F6F8] inline-block px-3 py-1 rounded border border-[#E5E7EB]">
                {benefit.number}
              </div>
              <h3 className="text-lg font-bold text-[#151923]">{benefit.swahiliTitle}</h3>
              <p className="text-sm text-[#667085] leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
