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
  {
    title: 'Famous velvet soft ears',
    description: 'Weimaraner ears are famously soft, long, and velvety, often described as a defining, affectionate trait of the breed.',
  },
  {
    title: 'Nooking',
    description: 'Nooking is a common self-soothing behavior in Weimaraners where they knead and suckle on blankets or stuffed toys to relax or fall asleep.',
  },
];

export const breedInfoHistory: SpotlightCard[] = [
  {
    eyebrow: 'Noble Origins',
    title: 'Exclusive hunting companion',
    description: 'Bred in 19th-century German courts for big game hunting, the Weimaraner was kept exclusive to aristocracy for decades.',
  },
  {
    eyebrow: 'Intelligence',
    title: 'The dog with a human brain',
    description: 'A sophisticated blend of Bloodhound, German Shorthaired Pointer, and extinct French hounds created exceptional intelligence.',
  },
  {
    eyebrow: 'Lifestyle',
    title: 'Full-time companionship required',
    description: 'These "Velcro Dogs" demand 1-2 hours of daily exercise and constant human interaction to thrive.',
  },
];

export const breedInfoCare: SpotlightCard[] = [
  {
    eyebrow: 'Health',
    title: 'Bloat and deep chest concerns',
    description: 'Their deep chests make them highly susceptible to life-threatening bloat (gastric torsion) requiring immediate veterinary attention.',
  },
  {
    eyebrow: 'Exercise',
    title: '1-2 hours daily activity required',
    description: 'High energy levels demand vigorous exercise, mental stimulation, and structured activities to prevent destructive behavior.',
  },
  {
    eyebrow: 'Companionship',
    title: 'Separation anxiety prevention',
    description: 'Their intense bond with owners requires constant companionship and training to manage alone time successfully.',
  },
  {
    eyebrow: 'Grooming',
    title: 'Coat Maintenance',
    description: 'Weimaraner coat care is low-maintenance due to their short, single-layered, and sleek fur, requiring weekly brushing. They are moderate, year-round shedders, benefiting from occasional baths to manage "doggy odor" or dirt.',
  },
  {
    eyebrow: 'Health',
    title: 'Ear Care',
    description: 'Their long, floppy ears are prone to trapping moisture and developing infections. Check and clean them weekly with a vet-approved cleaner.',
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
    src: '/images/weim-eyes.jpg',
    alt: 'Close-up of Weimaraner puppy with striking blue eyes',
    caption: 'The striking blue caspien sea eyes before they change',
  },
  {
    src: '/images/weim-yellow.jpg',
    alt: 'Stylized close-up portrait of a silver-gray Weimaraner face',
    caption: 'The iconic silver coat and alert amber expression.',
  },
  {
    src: '/images/weim-leap.jpg',
    alt: 'Stylized Weimaraner running through a forest trail',
    caption: 'Athletic movement and endless curiosity on the trail.',
  },
  {
    src: '/images/weim-point.jpg',
    alt: 'Stylized Weimaraner doing nose work with hidden scent tins',
    caption: 'Nose work turns instinct into focused fun.',
  },
  {
    src: '/images/weim-trust.jpg',
    alt: 'Stylized rescued Weimaraner sitting beside a volunteer',
    caption: 'Rescue success starts with safety, patience, and trust.',
  },
  {
    src: '/images/weim-crime.jpg',
    alt: 'Weimaraner getting into mischief',
    caption: 'A Weim Crime in the making',
  },
];

export const breedInfoGallery: ImageItem[] = [
  {
    src: '/images/weim-beer.jpg',
    alt: 'Weimaraner with beer',
    caption: 'A Weimaraner enjoying the finer things in life',
  },
  {
    src: '/images/weim-pheasant.png',
    alt: 'Weimaraner with pheasant',
    caption: 'Athletic prowess on full display',
  },
  {
    src: '/images/weim-stack.jpg',
    alt: 'Weimaraner in stacked show position',
    caption: 'Classic breed conformation and elegance',
  },
];

export const fallbackMessage = 'Fresh Weimaraner wisdom is on the way. Check back soon for more photos and guidance.';
