/**
 * Central content store for the site.
 *
 * NOTE FOR THE FUTURE ADMIN PANEL:
 * Every piece of editable content on the site (services, gallery images,
 * categories, films, testimonials, contact details) is read from this single
 * module. When the admin panel + backend arrive, replace these exports with
 * API/CMS fetches — the components consuming them will not need to change.
 */

export const site = {
  name: "Golden Moments",
  tagline: "Photography & Films",
  phone: "090464 12124",
  phoneHref: "tel:+919046412124",
  whatsappHref: "https://wa.me/919046412124",
  email: "hello@goldenmoments.in",
  address: "Ushti, West Bengal 743375",
  rating: 5.0,
  reviewCount: 6,
  hours: "Open daily · 9:00 AM – 9:00 PM",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Ushti,+West+Bengal+743375&output=embed",
  youtubeUrl: "https://www.youtube.com/@goldenmomentsphotography2025",
};

/** Full-HD thumbnail of one of the studio's own YouTube videos. */
export const ytThumb = (id: string) =>
  `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

export type Service = {
  id: string;
  title: string;
  description: string;
  icon:
    | "heart"
    | "gem"
    | "camera"
    | "baby"
    | "cake"
    | "film"
    | "radio";
};

export const services: Service[] = [
  {
    id: "pre-wedding",
    title: "Pre Wedding / Post Wedding Shoot",
    description:
      "Cinematic couple shoots at dreamy locations — golden-hour light, candid chemistry and frames made for your walls.",
    icon: "heart",
  },
  {
    id: "engagement",
    title: "Engagement Shoot",
    description:
      "The ring, the promise, the happy tears — we capture the day two families become one, moment by moment.",
    icon: "gem",
  },
  {
    id: "wedding",
    title: "Wedding Shoot",
    description:
      "Full-day wedding coverage with candid and traditional photography, so no ritual, smile or blessing goes unframed.",
    icon: "camera",
  },
  {
    id: "maternity-newborn",
    title: "Maternity & New Born Shoot",
    description:
      "Gentle, unhurried sessions that celebrate the glow of motherhood and the first tiny days of your little one.",
    icon: "baby",
  },
  {
    id: "rice-ceremony-birthday",
    title: "Rice Ceremony & Birthday Shoot",
    description:
      "Annaprashan blessings, first birthdays and every milestone after — colourful, joyful storytelling for the whole family.",
    icon: "cake",
  },
  {
    id: "album-cinematic",
    title: "Album & Cinematic Video",
    description:
      "Premium designed albums and cinematic highlight films with colour-graded footage and story-driven editing.",
    icon: "film",
  },
  {
    id: "live-telecast",
    title: "Live Telecast & Online Mixing",
    description:
      "Multi-camera live streaming with professional online mixing, so loved ones anywhere in the world never miss a moment.",
    icon: "radio",
  },
];

export type GalleryCategory =
  | "Wedding"
  | "Pre-Wedding"
  | "Rice Ceremony"
  | "Birthday & Baby"
  | "Ceremonies";

export const galleryCategories: ("All" | GalleryCategory)[] = [
  "All",
  "Wedding",
  "Pre-Wedding",
  "Rice Ceremony",
  "Birthday & Baby",
  "Ceremonies",
];

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  /** tall images span two rows in the grid */
  tall?: boolean;
};

/**
 * Real frames from the studio's own shoots (YouTube video thumbnails).
 * The admin panel will later let the client upload photos directly.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: ytThumb("NwLpK35F_pw"),
    alt: "Debayan & Mouli on their wedding day",
    category: "Wedding",
    tall: true,
  },
  {
    id: "g2",
    src: ytThumb("XvKMgosCYds"),
    alt: "Subhojit & Soumyasree with their wedding garlands",
    category: "Wedding",
  },
  {
    id: "g3",
    src: ytThumb("CH_4gCHZrKQ"),
    alt: "Ananya & Arumay at their reception",
    category: "Wedding",
  },
  {
    id: "g4",
    src: ytThumb("5y4CRlJoJu4"),
    alt: "Madhab & Mousumi — a quiet moment together",
    category: "Wedding",
    tall: true,
  },
  {
    id: "g5",
    src: ytThumb("b1hhu6zkyJM"),
    alt: "Jharna & Subrata at their evening reception",
    category: "Wedding",
  },
  {
    id: "g6",
    src: ytThumb("00L8TqFwWHc"),
    alt: "Monisha, radiant on her wedding day",
    category: "Wedding",
    tall: true,
  },
  {
    id: "g7",
    src: ytThumb("utNpimddHtg"),
    alt: "Suhas & Srabanti's playful pre-wedding shoot in Kolkata",
    category: "Pre-Wedding",
  },
  {
    id: "g8",
    src: ytThumb("1bgf6SVod_o"),
    alt: "Sivanshi's rice ceremony with her parents",
    category: "Rice Ceremony",
    tall: true,
  },
  {
    id: "g9",
    src: ytThumb("ch3gIVIhbx0"),
    alt: "Adhyudh's annaprashan celebration",
    category: "Rice Ceremony",
  },
  {
    id: "g10",
    src: ytThumb("cyBBixuUQpk"),
    alt: "Dipashree's rice ceremony",
    category: "Rice Ceremony",
  },
  {
    id: "g11",
    src: ytThumb("UEMm6IX1rt0"),
    alt: "Rishan's first birthday with his family",
    category: "Birthday & Baby",
  },
  {
    id: "g12",
    src: ytThumb("u-3__e0RukI"),
    alt: "Piu's baby shower",
    category: "Birthday & Baby",
  },
  {
    id: "g13",
    src: ytThumb("qYFfHhSSwLo"),
    alt: "Namrata's blessing ceremony",
    category: "Ceremonies",
  },
  {
    id: "g14",
    src: ytThumb("v0gXa50glxU"),
    alt: "Swastika's mehendi & sangeet ceremony",
    category: "Ceremonies",
  },
];

export type FilmCategory =
  | "Wedding"
  | "Pre-Wedding"
  | "Rice Ceremony"
  | "Birthday & Baby"
  | "Ceremonies";

export const filmCategories: ("All" | FilmCategory)[] = [
  "All",
  "Wedding",
  "Pre-Wedding",
  "Rice Ceremony",
  "Birthday & Baby",
  "Ceremonies",
];

export type Film = {
  /** YouTube video id — thumbnail and embed URLs are derived from this */
  youtubeId: string;
  title: string;
  duration: string;
  category: FilmCategory;
};

/**
 * All films from the studio's real YouTube channel
 * (@goldenmomentsphotography2025). The admin panel will later manage this
 * list — adding a video only needs its YouTube id, title, duration and
 * category.
 */
export const films: Film[] = [
  {
    youtubeId: "V52Q0mnncCM",
    title: "Riju Weds Riya · Wedding Full Video",
    duration: "1:15:09",
    category: "Wedding",
  },
  {
    youtubeId: "NwLpK35F_pw",
    title: "Debayan & Mouli · Cinematic Teaser",
    duration: "2:53",
    category: "Wedding",
  },
  {
    youtubeId: "utNpimddHtg",
    title: "Suhas & Srabanti · Kolkata Pre-Wedding Story",
    duration: "3:11",
    category: "Pre-Wedding",
  },
  {
    youtubeId: "ch3gIVIhbx0",
    title: "Adhyudh's Rice Ceremony · Cinematic Teaser",
    duration: "2:47",
    category: "Rice Ceremony",
  },
  {
    youtubeId: "UEMm6IX1rt0",
    title: "Rishan's 1st Birthday",
    duration: "16:00",
    category: "Birthday & Baby",
  },
  {
    youtubeId: "v0gXa50glxU",
    title: "Swastika's Mehendi & Sangeet Ceremony",
    duration: "32:36",
    category: "Ceremonies",
  },
  {
    youtubeId: "CH_4gCHZrKQ",
    title: "Ananya Weds Arumay · Cinematic Teaser",
    duration: "2:52",
    category: "Wedding",
  },
  {
    youtubeId: "TDrudLkqzgc",
    title: "Aliva Weds Sourav · Cinematic Teaser",
    duration: "2:45",
    category: "Wedding",
  },
  {
    youtubeId: "ejan_AC2h80",
    title: "Swastika & Subham · Wedding Full Video",
    duration: "1:21:48",
    category: "Wedding",
  },
  {
    youtubeId: "u-3__e0RukI",
    title: "Piu's Baby Shower",
    duration: "14:41",
    category: "Birthday & Baby",
  },
  {
    youtubeId: "LsQOtYsx2_0",
    title: "Namrata & Arijit · Wedding Full Video",
    duration: "33:40",
    category: "Wedding",
  },
  {
    youtubeId: "XvKMgosCYds",
    title: "Subhojit Weds Soumyasree · Wedding Full Video",
    duration: "1:02:21",
    category: "Wedding",
  },
  {
    youtubeId: "qYFfHhSSwLo",
    title: "Blessing Ceremony of Namrata",
    duration: "15:02",
    category: "Ceremonies",
  },
  {
    youtubeId: "AEjIyI11bfU",
    title: "Premananda & Monjushree · Cinematic Teaser",
    duration: "2:34",
    category: "Wedding",
  },
  {
    youtubeId: "0S_tjKHsCns",
    title: "Babita Weds Sandip · Wedding Full Video",
    duration: "35:08",
    category: "Wedding",
  },
  {
    youtubeId: "mgowjqoCwBk",
    title: "Anuska Weds Tarak · Wedding Full Video",
    duration: "49:23",
    category: "Wedding",
  },
  {
    youtubeId: "asJwkbXTIwg",
    title: "Souvik & Agamoni · Wedding Full Video",
    duration: "1:06:11",
    category: "Wedding",
  },
  {
    youtubeId: "vJgTTKLBXM0",
    title: "Arnab & Raima · Wedding Full Video",
    duration: "56:27",
    category: "Wedding",
  },
  {
    youtubeId: "7ihhwF-3xrE",
    title: "Supratip & Chaitali · Cinematic Teaser",
    duration: "3:16",
    category: "Wedding",
  },
  {
    youtubeId: "5y4CRlJoJu4",
    title: "Madhab & Mousumi · Wedding Full Video",
    duration: "46:34",
    category: "Wedding",
  },
  {
    youtubeId: "F2ZvLxJOWqk",
    title: "Laboni & Suprabhat · Cinematic Teaser",
    duration: "3:19",
    category: "Wedding",
  },
  {
    youtubeId: "b1hhu6zkyJM",
    title: "Jharna Weds Subrata · Wedding Teaser",
    duration: "3:12",
    category: "Wedding",
  },
  {
    youtubeId: "Mgm689lrrIc",
    title: "Rounak Weds Sutandra · Wedding Full Video",
    duration: "58:31",
    category: "Wedding",
  },
  {
    youtubeId: "RrewX8UKn3Q",
    title: "Chaitali & Supratip · Wedding Full Video",
    duration: "1:00:27",
    category: "Wedding",
  },
  {
    youtubeId: "0ar1n_F5OzI",
    title: "Subrata Weds Jharna · Cinematic Film",
    duration: "47:18",
    category: "Wedding",
  },
  {
    youtubeId: "00L8TqFwWHc",
    title: "Raja & Monisha · Wedding Full Video",
    duration: "1:00:09",
    category: "Wedding",
  },
  {
    youtubeId: "1bgf6SVod_o",
    title: "Sivanshi's Rice Ceremony · Cinematic Film",
    duration: "38:10",
    category: "Rice Ceremony",
  },
  {
    youtubeId: "ts5mG9aGcCM",
    title: "Namrata Weds Arijit · Cinematic Teaser",
    duration: "2:50",
    category: "Wedding",
  },
  {
    youtubeId: "cyBBixuUQpk",
    title: "Rice Ceremony of Dipashree",
    duration: "20:08",
    category: "Rice Ceremony",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  event: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priyanka Das",
    event: "Wedding Shoot",
    quote:
      "Golden Moments made our wedding feel like a film. Every ritual, every smile — captured so beautifully that we relive the day each time we open the album.",
  },
  {
    id: "t2",
    name: "Arindam Chatterjee",
    event: "Pre-Wedding Shoot",
    quote:
      "We were nervous in front of the camera, but the team made it so easy and fun. The photos look straight out of a magazine!",
  },
  {
    id: "t3",
    name: "Sneha Mondal",
    event: "Rice Ceremony",
    quote:
      "They captured our son's annaprashan with so much warmth. Every family member, every blessing — nothing was missed. Highly recommended.",
  },
  {
    id: "t4",
    name: "Rahul Ghosh",
    event: "Engagement Shoot",
    quote:
      "Professional, punctual and so creative. The cinematic video of our engagement had everyone in tears — happy ones!",
  },
  {
    id: "t5",
    name: "Tanushree Roy",
    event: "Maternity Shoot",
    quote:
      "The maternity shoot was such a comfortable, joyful experience. The photographs are the most precious keepsake of that time.",
  },
  {
    id: "t6",
    name: "Sourav Banerjee",
    event: "Wedding & Live Telecast",
    quote:
      "Our relatives abroad watched the whole wedding live in perfect quality. The mixing was seamless — like a TV broadcast of our own wedding!",
  },
];

export const stats = [
  { id: "s1", value: 350, suffix: "+", label: "Events Captured" },
  { id: "s2", value: 8, suffix: "+", label: "Years of Experience" },
  { id: "s3", value: 500, suffix: "+", label: "Happy Families" },
  { id: "s4", value: 5.0, suffix: "★", label: "Google Rating", decimals: 1 },
] as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#films", label: "Films" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];
