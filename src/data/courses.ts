export interface Course {
  id: string;
  title: string;
  category: 'ai' | 'computer' | 'programming' | 'digital';
  categoryLabel: string;
  price: number;
  formattedPrice: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
  description: string;
  detailedDescription: string[];
  skills: string[];
}

export interface AiToolPackage {
  id: string;
  name: string;
  previousPrice: string;
  promoPrice: string;
  duration: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  comment: string;
  result: string;
  initials: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const COURSES: Course[] = [
  {
    id: "ai-video-storytelling-bundle",
    title: "AI Video, Storytelling & Advertising Bundle",
    category: "ai",
    categoryLabel: "AI & Video Creation",
    price: 15000,
    formattedPrice: "TZS 15,000",
    duration: "Online Kozi",
    level: "Beginner",
    image: "https://i.ibb.co/gLsqZxrM/ai-video-generation-mini-selar-com-684c932004a76.jpg",
    description: "Kozi kamili inayojumuisha AI Video Creation, AI Storytelling & Content Creation, na AI Advertising & Commercial Videos kwa pamoja.",
    detailedDescription: [
      "AI Video Creation: Jifunze kutengeneza video za AI, cinematic scenes, na short stories kwa urahisi.",
      "AI Storytelling: Kuandika hadithi, kuunda wahusika (characters), na kutumia AI voiceovers.",
      "AI Advertising: Kutengeneza video za matangazo ya kibiashara (commercials) na bidhaa kwa ajili ya mitandao ya kijamii."
    ],
    skills: ["AI Video Generation", "AI Storytelling", "Commercial Ads", "Prompt Engineering", "Voiceover AI"]
  },
  {
    id: "ai-image-generation",
    title: "AI Image Generation & Design",
    category: "ai",
    categoryLabel: "AI & Video Creation",
    price: 5000,
    formattedPrice: "TZS 5,000",
    duration: "Online Kozi",
    level: "Beginner",
    image: "https://i.ibb.co/V0R5MjJM/ai-content-generation-course-online-242073397216974m-12466732010251379-l.webp",
    description: "Jifunze kutengeneza picha za kipekee za ubunifu, dhana za kimitindo, na mabango kupitia zana za AI.",
    detailedDescription: [
      "Jifunze kutumia Midjourney, DALL-E, na zana nyingine za picha.",
      "Kutengeneza mabango ya biashara, picha za matangazo, na miundo ya kisasa kwa muda mfupi."
    ],
    skills: ["Midjourney / DALL-E", "Visual Design", "Marketing Graphics", "Image Upscaling"]
  },
  {
    id: "ms-office-complete",
    title: "Microsoft Office Complete (Word, Excel, PowerPoint)",
    category: "computer",
    categoryLabel: "Computer Fundamentals",
    price: 49000,
    formattedPrice: "TZS 49,000",
    duration: "Wiki 1 (Online Kozi)",
    level: "Beginner",
    image: "https://i.ibb.co/qw7wV6R/ADVANCED-MS-OFFICE.jpg",
    description: "Jifunze Microsoft Word, Excel, na PowerPoint kwa wiki moja tu kupitia mafunzo ya mtandaoni ya vitendo.",
    detailedDescription: [
      "Microsoft Word: Uandaji na mpangilio wa nyaraka na ripoti za kiofisi.",
      "Microsoft Excel: Formile, hesabu, tables, na chati za biashara.",
      "Microsoft PowerPoint: Kutengeneza mawasilisho (presentations) yenye mvuto."
    ],
    skills: ["Word Reports", "Excel Formulas", "PowerPoint Slides", "Office Integration"]
  },
  {
    id: "ethical-hacking-ai",
    title: "Ethical Hacking & AI Tools",
    category: "programming",
    categoryLabel: "Programming & Security",
    price: 490000,
    formattedPrice: "TZS 490,000",
    duration: "Mwezi 1 (Online Kozi)",
    level: "Advanced",
    image: "https://i.ibb.co/rKPdXcy9/ethical-hacking-4236461721167250m-53679008473705-l.webp",
    description: "Kozi ya kina ya usalama wa mtandao (Ethical Hacking), Linux, zana za AI za kipekee za kiufundi, na kupima udhaifu wa mifumo.",
    detailedDescription: [
      "Linux Fundamentals & Command Line",
      "Network Scanning & Vulnerability Assessment",
      "AI-powered hacking & security tools",
      "Ethical Hacking methodologies & defense strategies"
    ],
    skills: ["Ethical Hacking", "Linux OS", "AI Security Tools", "Penetration Testing", "Network Defense"]
  },
  {
    id: "web-mobile-ai-dev",
    title: "Web & Mobile App Development na AI",
    category: "programming",
    categoryLabel: "Software Development",
    price: 290000,
    formattedPrice: "TZS 290,000",
    duration: "Wiki 3 (Online Kozi)",
    level: "Intermediate",
    image: "https://i.ibb.co/s91h2Wv8/images-3.jpg",
    description: "Jifunze kutengeneza tovuti (Web) na programu za simu (Mobile Apps) kwa kutumia mbinu za kisasa na AI.",
    detailedDescription: [
      "HTML, CSS, JavaScript kwa ajili ya Web Development",
      "Mobile App fundamentals na React Native/Flutter",
      "Kutumia AI kusaidia kuandika code na kujenga application kwa kasi"
    ],
    skills: ["Web Development", "Mobile App Dev", "AI Coding Assistants", "Responsive Design", "APIs"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Social Media Growth",
    category: "digital",
    categoryLabel: "Digital Skills",
    price: 30000,
    formattedPrice: "TZS 30,000",
    duration: "Online Kozi",
    level: "Beginner",
    image: "https://i.ibb.co/4nBYkS35/3796ff989d928a644d19d8a6f8ad35e2.webp",
    description: "Jifunze namna ya kukuza biashara na kuvuta wateja mtandaoni kupitia social media marketing.",
    detailedDescription: [
      "Mikakati ya masoko ya mtandaoni (Digital Marketing)",
      "Usimamizi wa mitandao ya kijamii na kuongeza wafuasi",
      "Matangazo ya kulipia na content strategy"
    ],
    skills: ["Social Media Strategy", "Content Calendar", "Targeted Ads", "Audience Growth"]
  }
];

export const AI_TOOL_PACKAGES: AiToolPackage[] = [
  {
    id: "gemini",
    name: "GEMINI ADVANCED",
    previousPrice: "TZS 3,500,000",
    promoPrice: "TZS 20,000",
    duration: "Mwezi 1 (1 Month Access)",
    description: "Google's most capable AI model for deep research, coding, multi-modal analysis, and heavy creative workloads.",
    features: ["Gemini 1.5 Pro access", "Large context window", "Advanced coding assistance", "Document analysis"]
  },
  {
    id: "chatgpt",
    name: "CHATGPT PLUS",
    previousPrice: "TZS 50,000",
    promoPrice: "TZS 20,000",
    duration: "Mwezi 1 (1 Month Access)",
    description: "Access GPT-4o, advanced data analysis, custom GPTs, and web browsing capabilities for everyday productivity.",
    features: ["GPT-4o model access", "Advanced data analysis", "Custom GPT creations", "Voice & vision features"]
  },
  {
    id: "claude",
    name: "CLAUDE PRO",
    previousPrice: "TZS 60,000",
    promoPrice: "TZS 35,000",
    duration: "Mwezi 1 (1 Month Access)",
    description: "Powered by Claude 3.5 Sonnet, ideal for professional writing, nuanced reasoning, and advanced software development.",
    features: ["Claude 3.5 Sonnet", "Artifacts feature", "Superior coding logic", "Long document handling"]
  },
  {
    id: "deepseek",
    name: "DEEPSEEK R1 ACCESS",
    previousPrice: "TZS 300,000",
    promoPrice: "TZS 130,000",
    duration: "Mwezi 1 (1 Month Access)",
    description: "High-performance reasoning model engineered for complex problem solving, mathematics, and advanced coding.",
    features: ["DeepSeek-R1 reasoning", "Fast execution speed", "Advanced math & logic", "Developer API ready"]
  }
];

export const BENEFITS = [
  {
    number: "01",
    title: "Expand Your Skills",
    swahiliTitle: "Jenga Uwezo Mpya",
    description: "Jenga uwezo mpya unaoweza kukusaidia katika masomo, kazi na biashara."
  },
  {
    number: "02",
    title: "Create Digital Products",
    swahiliTitle: "Tengeneza Bidhaa za Kidijitali",
    description: "Jifunze kutengeneza videos, websites, designs na applications."
  },
  {
    number: "03",
    title: "Explore Freelancing",
    swahiliTitle: "Fursa za Kujitegemea (Freelancing)",
    description: "Elewa namna ya kutumia ujuzi wako kutoa huduma kwa wateja na kujipatia kipato."
  },
  {
    number: "04",
    title: "Improve Productivity",
    swahiliTitle: "Ongeza Ufanisi Kazi",
    description: "Tumia AI na software kufanya kazi kwa ufanisi zaidi na kuokoa muda."
  },
  {
    number: "05",
    title: "Build Your Own Projects",
    swahiliTitle: "Jenga Miradi Yako Binafsi",
    description: "Geuza mawazo yako kuwa bidhaa halisi za kiteknolojia."
  },
  {
    number: "06",
    title: "Stay Relevant",
    swahiliTitle: "Endana na Wakati",
    description: "Elewa teknolojia mpya na namna inavyobadilisha dunia na soko la ajira."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Je, naweza kujifunza bila kuwa na uzoefu wa awali?",
    answer: "Ndiyo! Kozi zetu zote zimeandaliwa kwa ajili ya wanaoanza kutoka sifuri kabisa hadi kufikia kiwango cha umahiri."
  },
  {
    question: "Je, mafunzo yanafanyika online?",
    answer: "Ndiyo, mafunzo yote ni online, hutolewa kupitia video maalum, mwongozo wa maandishi, na vikao vya moja kwa moja."
  },
  {
    question: "Je, nahitaji laptop?",
    answer: "Inashauriwa kuwa na laptop kwa ajili ya mafunzo ya Programming, Web Development na Microsoft Office. Hata hivyo, baadhi ya kozi za AI zinaweza kuanzia kwenye simu."
  },
  {
    question: "Je, naweza kujifunza kwa kutumia simu?",
    answer: "Kwa kozi za AI Tools, Canva, na AI Video Creation, unaweza kujifunza vizuri kupitia simu yako ya mkononi."
  },
  {
    question: "Malipo yanafanyikaje?",
    answer: "Malipo yanafanyika kupitia mitandao ya simu (M-Pesa, Tigo Pesa, Airtel Money) au benki. Unapobonyeza 'Jiunge na Kozi' utapata maelekezo ya moja kwa moja kupitia WhatsApp."
  },
  {
    question: "Nitapata access ya mafunzo kwa muda gani?",
    answer: "Unapolipia kozi, unapata access ya kudumu (lifetime access) ili uweze kujifunza kwa kasi yako mwenyewe."
  },
  {
    question: "Je, nitapata support baada ya mafunzo?",
    answer: "Ndiyo! Utakuwa na nafasi ya kuuliza maswali na kupata miongozo kupitia kundi letu maalum la wanafunzi na WhatsApp."
  },
  {
    question: "Je, ninaweza kujifunza kozi zaidi ya moja?",
    answer: "Ndiyo, unaweza kuchukua kozi kadri uwezo wako unavyoruhusu au kuchukua vifurushi maalum vya pamoja."
  }
];

export const INITIAL_SETTINGS = {
  ownerName: "Mwaka mbaya_codeKilleR",
  ownerTitle: "Technology Educator & AI Content Creator",
  whatsappNumber: "255770888569",
  email: "daviskavenuke@gmail.com",
  instagram: "https://www.instagram.com/davis_______7?utm_source=ig_web_button_share_sheet&avpt=ZDNlZDc0MzIxNw==",
  tiktok: "https://www.tiktok.com/@bwanadevi",
  youtube: "https://youtube.com/@daviskavenuke-wm4gz?si=E4RB4G4VW-IgOPBg",
  profileImage: "https://i.ibb.co/vgf5x3X/davisss.jpg"
};
