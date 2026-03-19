export type NavLink = {
  label: string;
  href: string;
};

export type SpotlightCard = {
  title: string;
  description: string;
  eyebrow?: string;
};

export type ImageItem = {
  src: string;
  alt: string;
  caption: string;
};

export type RescueListing = {
  organization: string;
  location: string;
  description: string;
  contact: string;
};

export type HeroImage = {
  src: string;
  alt: string;
  caption: string;
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Breed Info', href: '/breed-info' },
  { label: 'Training', href: '/training' },
  { label: 'Activities', href: '/activities' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Rescue', href: '/rescue' },
  { label: 'Adoption', href: '/adoption' },
];

export const heroStats = [
  { label: 'Energy', value: 'High' },
  { label: 'Trainability', value: 'Excellent' },
  { label: 'Family fit', value: 'Loyal + playful' },
];

export const homeHeroImage: HeroImage = {
  src: '/images/weim-hero.png',
  alt: 'Weimaraner standing on a mountain ridge during sunset',
  caption: 'A striking Weimaraner at golden hour in alpine terrain.',
};

export const homeHighlights: SpotlightCard[] = [
  {
    eyebrow: 'History',
    title: 'German sporting roots with a modern family heart',
    description:
      'Weimaraners were developed for hunting big game and evolved into versatile companions known for intelligence, elegance, and devotion.',
  },
  {
    eyebrow: 'Temperament',
    title: 'Velcro-dog affection paired with athletic focus',
    description:
      'They thrive when close to their people, enjoy mentally rich routines, and shine with clear structure and plenty of movement.',
  },
  {
    eyebrow: 'Care',
    title: 'Daily exercise, calm decompression, and connection',
    description:
      'A balanced mix of sniffing, training games, running, and quiet bonding time helps the breed stay confident and content.',
  },
];

export const breedFacts: SpotlightCard[] = [
  {
    title: 'Signature silver-gray coat',
    description: 'Their iconic coat is low-maintenance, sleek, and perfect for a polished, athletic look.',
  },
  {
    title: 'Human-oriented and social',
    description: 'They prefer to be involved in family life and often want a job, a plan, and a couch nearby.',
  },
  {
    title: 'Fast learners with big feelings',
    description: 'Positive reinforcement works beautifully when sessions stay clear, upbeat, and engaging.',
  },
  {
    title: 'Adventure-ready companions',
    description: 'Hikes, canicross, scent work, and structured fetch all match their stamina and curiosity.',
  },
];

export const trainingGuides: SpotlightCard[] = [
  {
    eyebrow: 'Foundation',
    title: 'Impulse control without dimming enthusiasm',
    description: 'Build reliable waits, polite greetings, and settling skills with short, rewarding repetitions.',
  },
  {
    eyebrow: 'Recall',
    title: 'Recall games for a fast dog with a fast brain',
    description: 'Use chase-me games, jackpot rewards, and predictable cue timing to create a joyful return habit.',
  },
  {
    eyebrow: 'Enrichment',
    title: 'Mental workouts that prevent boredom spirals',
    description: 'Rotate scent puzzles, pattern games, and task stations so energy has a productive outlet.',
  },
];

export const activityIdeas: SpotlightCard[] = [
  {
    title: 'Trail adventures',
    description: 'Choose shaded hikes, portable water, and sniff breaks for safe endurance sessions.',
  },
  {
    title: 'Scent work',
    description: 'Nose-led games tap into instinct and provide satisfying mental fatigue on any weather day.',
  },
  {
    title: 'Dock diving and retrieval',
    description: 'Water-safe retrieval and jumping sports give athletic dogs a joyful challenge.',
  },
  {
    title: 'Structured playdates',
    description: 'Well-matched dog friends and clear breaks help maintain confidence and social skills.',
  },
];

export const jobIdeas: SpotlightCard[] = [
  {
    title: 'Running partner',
    description: 'Older, conditioned Weimaraners often love consistent jogging and canicross routines.',
  },
  {
    title: 'Search helper',
    description: 'Hide-and-seek, article search, and beginner tracking channel focus into teamwork.',
  },
  {
    title: 'Therapy prep candidate',
    description: 'The breed’s closeness with people can translate into calm, structured companionship work.',
  },
];

export const rescueOrganizations: RescueListing[] = [
  {
    organization: 'National Weimaraner Rescue Network',
    location: 'United States',
    description: 'Coordinates foster homes, transportation, and breed-aware placement support.',
    contact: 'hello@weimwisdom-demo.org',
  },
  {
    organization: 'Silver Hearts Regional Rescue',
    location: 'Midwest',
    description: 'Focuses on behavior evaluation, home matching, and post-adoption guidance.',
    contact: 'midwest@weimwisdom-demo.org',
  },
  {
    organization: 'Pointer & Weimaraner Alliance',
    location: 'UK & EU',
    description: 'Supports transport coordination, breed education, and family readiness screening.',
    contact: 'rescue-eu@weimwisdom-demo.org',
  },
];

export const adoptionListings: SpotlightCard[] = [
  {
    eyebrow: 'Available now',
    title: 'Marlow, 3 years old',
    description: 'Playful and affectionate, happiest in an active home with scent games and daily decompression walks.',
  },
  {
    eyebrow: 'Foster-to-adopt',
    title: 'Skye, 5 years old',
    description: 'Calm indoors, athletic outdoors, and ready for a home that values patience and routine.',
  },
  {
    eyebrow: 'Senior spotlight',
    title: 'Otis, 9 years old',
    description: 'Sweet, silver-faced companion seeking cozy naps, easy strolls, and a gentle transition plan.',
  },
];

export const galleryImages: ImageItem[] = [
  {
    src: '/images/weim-hero.svg',
    alt: 'Stylized Weimaraner portrait standing in a mountain sunrise scene',
    caption: 'A confident Weimaraner framed by cool dawn colors.',
  },
  {
    src: '/images/breed-portrait.png',
    alt: 'Stylized close-up portrait of a silver-gray Weimaraner face',
    caption: 'The iconic silver coat and alert amber expression.',
  },
  {
    src: '/images/forest-run.svg',
    alt: 'Stylized Weimaraner running through a forest trail',
    caption: 'Athletic movement and endless curiosity on the trail.',
  },
  {
    src: '/images/nose-work.png',
    alt: 'Stylized Weimaraner doing nose work with hidden scent tins',
    caption: 'Nose work turns instinct into focused fun.',
  },
  {
    src: '/images/rescue-companion.svg',
    alt: 'Stylized rescued Weimaraner sitting beside a volunteer',
    caption: 'Rescue success starts with safety, patience, and trust.',
  },
  {
    src: '/images/family-dog.png',
    alt: 'Stylized Weimaraner relaxing with a family in a bright living room',
    caption: 'A deeply connected family dog after an active day.',
  },
];

export const fallbackMessage = 'Fresh Weimaraner wisdom is on the way. Check back soon for more photos and guidance.';
