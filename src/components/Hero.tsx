import React from 'react';
import { CheckCircle, MessageSquare, BookOpen } from 'lucide-react';

interface HeroProps {
  ownerName: string;
  ownerTitle: string;
  profileImage: string;
  whatsappNumber: string;
}

export const Hero: React.FC<HeroProps> = ({ ownerName, ownerTitle, profileImage, whatsappNumber }) => {
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Habari, nataka kuanza kujifunza kupitia Online Kozi. Naomba maelezo zaidi.");
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="bg-[#F5F6F8] py-16 md:py-24 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block bg-white border border-[#E5E7EB] px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wider text-[#172554] uppercase">
              TECHNOLOGY • AI • DIGITAL SKILLS
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#151923] tracking-tight leading-tight">
              tengeneza pesa kwa ujuzi wa AI
            </h1>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#courses"
                className="inline-flex items-center justify-center bg-[#172554] hover:bg-[#1e293b] text-white font-medium px-6 py-3 rounded-md text-base"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Angalia Kozi Zilizopo
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center bg-white hover:bg-[#f9fafb] text-[#151923] border border-[#E5E7EB] font-medium px-6 py-3 rounded-md text-base"
              >
                <MessageSquare className="w-5 h-5 mr-2 text-[#15803D]" />
                Wasiliana Nami WhatsApp
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#15803D] shrink-0" />
                <span className="text-sm font-medium text-[#151923]">Practical Learning</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#15803D] shrink-0" />
                <span className="text-sm font-medium text-[#151923]">Beginner Friendly</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#15803D] shrink-0" />
                <span className="text-sm font-medium text-[#151923]">Real-world Projects</span>
              </div>
            </div>

          </div>

          {/* Right Column (Profile Image & Button) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border-4 border-[#172554] p-1 bg-white shadow-sm overflow-hidden">
                <img
                  src={profileImage}
                  alt={ownerName}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="text-center mt-6 space-y-3">
              <div>
                <h2 className="text-xl font-bold text-[#151923]">{ownerName}</h2>
                <p className="text-sm font-medium text-[#667085]">{ownerTitle}</p>
              </div>
              <div>
                <a
                  href="https://daviskavenuke-simba-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-medium text-sm px-6 py-2.5 rounded-md transition-colors shadow-sm"
                >
                  Nijue zaidi
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
