import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HowToJoinProps {
  whatsappNumber: string;
}

export const HowToJoin: React.FC<HowToJoinProps> = ({ whatsappNumber }) => {
  const handleStartLearning = () => {
    const text = encodeURIComponent("Habari, niko tayari kuanza kujifunza. Naomba mwongozo wa kuchagua kozi na malipo.");
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151923] tracking-tight">
            Jinsi ya Kujiunga na Mafunzo
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            Hatua tatu rahisi za kuanza safari yako ya mafunzo ya teknolojia na AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div className="bg-[#F5F6F8] border border-[#E5E7EB] p-6 rounded-lg space-y-4">
            <div className="w-10 h-10 bg-[#172554] text-white font-bold rounded flex items-center justify-center text-lg">
              1
            </div>
            <h3 className="text-lg font-bold text-[#151923]">Chagua Kozi</h3>
            <p className="text-sm text-[#667085] leading-relaxed">
              Chagua kozi unayotaka kujifunza kutoka kwenye orodha yetu ya kozi za vitendo.
            </p>
          </div>

          <div className="bg-[#F5F6F8] border border-[#E5E7EB] p-6 rounded-lg space-y-4">
            <div className="w-10 h-10 bg-[#172554] text-white font-bold rounded flex items-center justify-center text-lg">
              2
            </div>
            <h3 className="text-lg font-bold text-[#151923]">Wasiliana Nasi WhatsApp</h3>
            <p className="text-sm text-[#667085] leading-relaxed">
              Bonyeza kitufe cha WhatsApp na upate maelezo ya kina pamoja na utaratibu wa usajili.
            </p>
          </div>

          <div className="bg-[#F5F6F8] border border-[#E5E7EB] p-6 rounded-lg space-y-4">
            <div className="w-10 h-10 bg-[#172554] text-white font-bold rounded flex items-center justify-center text-lg">
              3
            </div>
            <h3 className="text-lg font-bold text-[#151923]">Anza Kujifunza</h3>
            <p className="text-sm text-[#667085] leading-relaxed">
              Thibitisha malipo na uanze kupokea mafunzo na miongozo mara moja.
            </p>
          </div>

        </div>

        <div className="text-center">
          <button
            onClick={handleStartLearning}
            className="inline-flex items-center justify-center bg-[#172554] hover:bg-[#1e293b] text-white font-medium px-8 py-3.5 rounded-md text-base"
          >
            Anza Kujifunza Leo
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

      </div>
    </section>
  );
};
