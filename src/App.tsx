/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { INITIAL_SETTINGS } from './data/courses';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { Courses } from './components/Courses';
import { AiTools } from './components/AiTools';
import { Benefits } from './components/Benefits';
import { HowToJoin } from './components/HowToJoin';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [settings] = useState(() => {
    // Always return INITIAL_SETTINGS to enforce Mwaka mbaya_codeKilleR and correct profile image & contacts
    return INITIAL_SETTINGS;
  });

  return (
    <div className="min-h-screen bg-white text-[#151923] font-['Inter',sans-serif] selection:bg-[#172554] selection:text-white">
      <Header
        ownerName={settings.ownerName}
        whatsappNumber={settings.whatsappNumber}
      />

      <main>
        <Hero
          ownerName={settings.ownerName}
          ownerTitle={settings.ownerTitle}
          profileImage={settings.profileImage}
          whatsappNumber={settings.whatsappNumber}
        />
        <Courses whatsappNumber={settings.whatsappNumber} />
        <AiTools whatsappNumber={settings.whatsappNumber} />
        <StatsSection />
        <Benefits />
        <HowToJoin whatsappNumber={settings.whatsappNumber} />
        <Faq />
        <Contact
          whatsappNumber={settings.whatsappNumber}
          email={settings.email}
          instagram={settings.instagram}
          tiktok={settings.tiktok}
          youtube={settings.youtube}
        />
      </main>

      <Footer ownerName={settings.ownerName} />
    </div>
  );
}
