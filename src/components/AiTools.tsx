import React from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { AI_TOOL_PACKAGES, AiToolPackage } from '../data/courses';

interface AiToolsProps {
  whatsappNumber: string;
}

export const AiTools: React.FC<AiToolsProps> = ({ whatsappNumber }) => {
  const handleGetAccess = (tool: AiToolPackage) => {
    const text = encodeURIComponent(
      `Habari, ningependa kupata access ya ${tool.name} kwa bei ya promo ya ${tool.promoPrice} (${tool.duration}). Naomba maelezo ya utaratibu na malipo.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="ai-tools" className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#F5F6F8] border border-[#E5E7EB] px-3.5 py-1.5 rounded-md text-xs font-semibold text-[#172554] uppercase">
            <Sparkles className="w-4 h-4 text-[#2563EB]" />
            <span>AI Tools & Subscriptions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151923] tracking-tight">
            AI Tools za Kuongeza Uwezo Wako wa Ubunifu
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            Pata access ya AI tools zinazokusaidia kutengeneza videos, images, kuandika, kufanya research na kuongeza productivity.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {AI_TOOL_PACKAGES.map((tool) => (
            <div
              key={tool.id}
              className="bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-white border border-[#E5E7EB] text-[#172554]">
                    {tool.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#151923]">{tool.name}</h3>

                <div className="space-y-1">
                  <span className="block text-xs text-red-600 font-medium line-through">
                    Awali: {tool.previousPrice}
                  </span>
                  <span className="block text-2xl font-bold text-[#15803D]">
                    {tool.promoPrice}
                  </span>
                </div>

                <p className="text-sm text-[#667085] leading-relaxed">{tool.description}</p>

                <div className="space-y-2 pt-2 border-t border-[#E5E7EB]">
                  {tool.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start text-xs text-[#151923]">
                      <Check className="w-4 h-4 text-[#15803D] mr-2 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5E7EB]">
                <button
                  onClick={() => handleGetAccess(tool)}
                  className="w-full inline-flex items-center justify-center bg-[#172554] hover:bg-[#1e293b] text-white text-sm font-medium py-2.5 px-4 rounded-md transition-colors"
                >
                  Pata Access
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
