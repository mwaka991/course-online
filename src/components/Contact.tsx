import React from 'react';
import { MessageSquare, Mail, ExternalLink } from 'lucide-react';

interface ContactProps {
  whatsappNumber: string;
  email: string;
  instagram: string;
  tiktok: string;
  youtube: string;
}

export const Contact: React.FC<ContactProps> = ({ whatsappNumber, email, instagram, tiktok, youtube }) => {
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Habari, ningependa kuwasiliana nawe kuhusu kozi na huduma za Online Kozi.");
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-6 bg-[#F5F6F8] border border-[#E5E7EB] p-8 sm:p-12 rounded-lg">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151923] tracking-tight">
            Uko Tayari Kujifunza Ujuzi Mpya?
          </h2>

          <p className="text-base sm:text-lg text-[#667085] max-w-xl mx-auto leading-relaxed">
            Chagua kozi yako na tuanze safari yako ya kujifunza teknolojia. Wasiliana nasi kupitia WhatsApp au mitandao ya kijamii.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#172554] hover:bg-[#1e293b] text-white font-medium px-6 py-3.5 rounded-md text-base"
            >
              <MessageSquare className="w-5 h-5 mr-2 text-[#15803D]" />
              Wasiliana Nasi WhatsApp
            </button>
            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-[#f9fafb] text-[#151923] border border-[#E5E7EB] font-medium px-6 py-3.5 rounded-md text-base"
            >
              <Mail className="w-5 h-5 mr-2 text-[#667085]" />
              Tuma Barua Pepe
            </a>
          </div>

          <div className="pt-8 border-t border-[#E5E7EB] flex flex-wrap items-center justify-center gap-6">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-[#667085] hover:text-[#172554]"
            >
              Instagram <ExternalLink className="w-4 h-4 ml-1" />
            </a>
            <a
              href={tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-[#667085] hover:text-[#172554]"
            >
              TikTok <ExternalLink className="w-4 h-4 ml-1" />
            </a>
            <a
              href={youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-[#667085] hover:text-[#172554]"
            >
              YouTube <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
