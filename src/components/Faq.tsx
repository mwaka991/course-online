import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/courses';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F5F6F8] border-b border-[#E5E7EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151923] tracking-tight">
            Maswali Yanayoulizwa Mara kwa Mara (FAQ)
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            Majibu kwa maswali ya kawaida kuhusu mafunzo, malipo, na upatikanaji.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between font-semibold text-[#151923] focus:outline-none"
                >
                  <span className="text-base">{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#667085] shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#667085] shrink-0 ml-4" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-[#667085] border-t border-[#E5E7EB] leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
