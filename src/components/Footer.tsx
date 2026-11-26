import React from 'react';

interface FooterProps {
  ownerName: string;
}

export const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#151923] text-white py-12 border-t border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white text-[#151923] font-bold flex items-center justify-center rounded text-sm">
              OK
            </div>
            <span className="font-bold text-lg text-white">Online kozi</span>
          </div>

          <div className="text-sm text-gray-400 text-center">
            Jukwaa la mafunzo ya vitendo ya teknolojia na AI likiwa chini ya mwaka m'baya_codekiller.
          </div>

          <div className="text-xs text-gray-500">
            © {currentYear} Online kozi. Haki zote zimehifadhiwa.
          </div>

        </div>
      </div>
    </footer>
  );
};
