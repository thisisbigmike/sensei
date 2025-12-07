
import { Project, Service, SocialLink, Achievement, Testimonial } from './types';

export const HERO_CONTENT = {
  name: "Sensei",
  title: "Web3 Growth & Marketing Strategist",
  subtitle: "Founder of Apexium Agency | Global KOL Award Winner",
  description: "Building Web3 communities that scale. Creating campaigns that drive mass adoption.",
};

export const ABOUT_CONTENT = {
  title: "About Me",
  role: "Founder of Apexium Agency | Global KOL Award Winner",
  description: "Building Web3 communities that scale. Creating campaigns that drive mass adoption.",
  // Using a professional abstract/tech aesthetic image as placeholder that fits the dark theme
  image: "images/sensei.png"
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "global-kol",
    title: "Global KOL Award Winner",
    subtitle: "Official recognition for driving 37,000+ referrals.",
    description: "Role: Community Growth Leader & KOL\n\nOfficial Atok celebrated me at 37,000 referrals (public receipt). I continued pushing → scaled it to 220,000+ referrals. Growth didn’t stop after recognition, it multiplied.\n\nRecognition came directly from the project team.",
    longDescription: "Receiving the Global KOL Award was a defining moment in my career, validating the 'sniper-marketing' strategies I've developed. \n\nStarting with a goal of 37,000 referrals, the campaign quickly gained organic traction through strategic narrative building on X (Twitter) and Telegram. By leveraging community trust and providing consistent, high-value content, we didn't just hit the target—we shattered it, reaching over 220,000 verified referrals.\n\nThis wasn't just about numbers; it was about retention. The community remained active well beyond the initial campaign phase, proving that the growth was sustainable. This achievement solidified my position as a leading voice in Web3 growth strategy.",
    stats: [
      "Atok Community: 220k+ Verified Referrals",
      "X Visibility: 2,000 to 43,000 Followers",
      "Strengthened Trust & Partner Credibility",
      "Gained Industry Authority as Lead KOL"
    ],
    highlight: true,
    imageUrl: "images/kenji.png",
    tags: ["Award", "Growth", "Viral"],
    demoImage: "images/kenji-demostration.png"
  },
  {
    id: "key-achievements",
    title: "Key Achievements Medal",
    subtitle: "Awards & Recognition",
    description: "Awards & Recognition:\n\n• Global KOL Award Winner 🏆 (Atok, 33k referrals milestone)\n• Recognized Solana KOL with 37K+ followers on X",
    longDescription: "Content Strategy & Execution:\n\n• Dropped high-value threads on Twitter to teach Web3 growth and audience building\n• Shared strategies on how to grow from 0 → 1k followers\n• Broke down how to write viral hooks with a live “hook inside a hook” meta thread\n\nImpact:\n\n• 1.1M+ impressions in the past 7 days\n• 42.4K likes • 2.7K reposts • 19.3K replies\n• Helped newcomers and degens understand Web3, boosting community knowledge\n• Almost 20,000 profile visits",
    stats: ["1.1M+ Impressions", "220k+ Referrals", "15K+ Live Listeners"],
    highlight: false,
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    tags: ["Excellence", "Strategy", "Consistency"],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "atok",
    title: "Atok Collaboration",
    subtitle: "Strategic Collaborator & Growth KOL",
    description: [
      "Partnered with Atok to design and push a viral referral funnel",
      "Activated campaigns across my community + external circles",
      "Created consistent engagement content that sustained hype"
    ],
    longDescription: "Result at a glance:\n220k+ referrals into Atok (from my 37k base at the time)\nWon Global KOL Award\n\nOutcomes:\n\n• Atok community foundation: 220,000+ referrals credited to my campaigns\n• Drove momentum that positioned Atok as a global Web3 name\n• Secured Global KOL Award recognition",
    link: "https://atok.io",
    tags: ["Partnership", "Viral Growth", "Strategy"],
    imageUrl: "/images/atok.png"
  },
  {
    id: "bybit",
    title: "Bybit Ambassador Campaign",
    subtitle: "Ambassador & Community Growth Partner",
    description: [
      "Represented Bybit in ambassador initiatives targeted at key markets",
      "Created campaign content to drive awareness and engagement",
      "Activated community participation through posts, replies, and coordinated pushes"
    ],
    longDescription: "Impact:\n\n• Increased engagement and visibility for Bybit in the Web3 space\n• Expanded reach into new markets by leveraging my community presence\n• Strengthened Bybit’s brand presence on X through active ambassador promotion",
    link: "https://bybit.com",
    tags: ["Exchange", "Ambassadors", "Tier 1"],
    imageUrl: "images/bybit.png"
  },
  {
    id: "hr-web3",
    title: "First HR Web3 Service",
    subtitle: "Founder & Lead Strategist",
    description: [
      "Built and launched Apex Academia for training writers, mods, raiders, and ambassadors",
      "Designed weekly deployment system: teams enter projects, deliver PoW, and prove value",
      "Scaled Apexium into a recognized HR partner in Web3"
    ],
    longDescription: "Result at a glance:\n\n• Built the first Web3 HR platform handling mods, ambassadors, and jobber management\n• Multiple projects retained workforce within the first month\n\nImpact:\n\n• Projects retained Apexium staff after trial deployments.\n• Established a repeatable HR model for Web3.\n• Strengthened trust between projects and communities by supplying trained jobbers.\n• Established Apexium as the first HR-as-a-service brand on X",
    tags: ["Innovation", "Infrastructure", "HR"],
    imageUrl: "images/hr.png"
  },
  {
    id: "kenji",
    title: "Kenji Charity Event",
    subtitle: "Represented Kenji as the event’s face in Nigeria, Kaduna State",
    description: [
      "Conducted the whole programme, bought food and clothings to mothers and children",
      "Organized and activated community attendance, creating excitement around the cause",
      "Shared real-time updates to engage both local attendees and global followers"
    ],
    longDescription: "Impact:\n\n• Used a limited budget to feed over 500 children and mothers\n• Brought attention to the charity’s humanitarian mission through the Web3 community\n• Enhanced Kenji’s brand credibility and “real-world utility” narrative\n• Demonstrated that crypto culture can build genuine social value, not just hype.",
    tags: ["Charity", "Real-World Impact", "Community"],
    imageUrl: "images/Kenji.png",
    demoImage: "images/kenji-demostration.png"
  },
  {
    id: "exodium",
    title: "Exodium DeFi Partnership",
    subtitle: "KOL Partner & Growth Strategist",
    description: [
      "Produced targeted campaign content tailored to Exodium’s audience",
      "Drove engagement via replies, threads, and coordinated pushes on X",
      "Aligned messaging with product value props to improve trust and CTR"
    ],
    longDescription: "Impact:\n\n• Helped with a successful launch of over $1.9M market cap\n• Increased brand visibility across crypto Twitter which gained over 3000 followers in a month\n• Strengthened community sentiment and campaign participation\n• Improved top-of-funnel awareness for upcoming launches\n• Expanded exchange/project partnership track record\n• Reinforced credibility for precision, narrative-led KOL work",
    link: "https://x.com/big_sensei/status/1896834651026546760?",
    tags: ["DeFi", "KOL", "Marketing"],
    imageUrl: "images/Exodium.png"
  },
  {
    id: "metrics-card",
    title: "Growth Content Metrics",
    subtitle: "High-Impact Educational Content & Analytics",
    description: [
      "Dropped high-value threads on Twitter to teach Web3 growth and audience building",
      "Shared strategies on how to grow from 0 → 1k followers",
      "Broke down how to write viral hooks with a live “hook inside a hook” meta thread"
    ],
    longDescription: "Impact:\n\n• 1.1M+ impressions in the past 7 days\n• 42.4K likes • 2.7K reposts • 19.3K replies\n• Helped newcomers and degens understand Web3, boosting community knowledge\n• Almost 20,000 profile visits",
    tags: ["Analytics", "Viral Content", "Education"],
    imageUrl: "images/metro.png",
    gallery: [
      "images/Pasted image.png",
      "images/Pasted image (2).png",
      "images/Pasted image (3).png"
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: "growth",
    title: "Scale Communities",
    icon: "growth",
    items: [
      "Organic community building strategies",
      "Metrics-driven growth systems",
      "Sustainable engagement frameworks"
    ]
  },
  {
    id: "team",
    title: "Ambassador & Mod Teams",
    icon: "team",
    items: [
      "Recruitment and onboarding processes",
      "Team structure and governance design",
      "Performance tracking and optimization"
    ]
  },
  {
    id: "viral",
    title: "Viral KOL Campaigns",
    icon: "viral",
    items: [
      "Influencer identification and outreach",
      "Campaign strategy and creative direction",
      "Viral mechanics and engagement hooks"
    ]
  },
  {
    id: "engagement",
    title: "Engagement & Retention",
    icon: "engagement",
    items: [
      "Community retention strategies",
      "Cultural development and brand values",
      "Gamification and reward systems"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    //id: "t1",
    //name: "Sarah Chen",
    //role: "CMO",
    //company: "DeFi Protocol",
    // image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Contract renewal from satisfied clients says it all. Sensei’s strategies delivered beyond expectations.",
    testimonialImage: "images/review.png"
 },
  {
    //id: "t2",
    //name: "Michael Ross",
    //role: "Founder",
    //company: "NFT Marketplace",
    //image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "9,000 link clicks from my post alone. My ability to drive targeted traffic is unparalleled.",
    testimonialImage: "images/clicks.png"
  },
  /*{
    id: "t3",
    name: "Elena Rodriguez",
    role: "Head of Growth",
    company: "GameFi Project",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "Professional, data-driven, and incredibly effective. Highly recommended.",
    testimonialImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000"
  }*/
];

export const SOCIALS: SocialLink[] = [
  {
    platform: "Twitter",
    handle: "@Sensei_KOL",
    url: "https://twitter.com",
    icon: "twitter"
  },
  {
    platform: "Discord",
    handle: "sensei#0000",
    url: "https://discord.com",
    icon: "discord"
  },
  {
    platform: "Telegram",
    handle: "@Sensei_Official",
    url: "https://t.me",
    icon: "telegram"
  }
];
