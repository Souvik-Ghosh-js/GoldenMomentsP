/**
 * Central content store for the site.
 *
 * NOTE FOR THE FUTURE ADMIN PANEL:
 * Every piece of editable content on the site (services, gallery images,
 * categories, testimonials, contact details) is read from this single module.
 * When the admin panel + backend arrive, replace these exports with API/CMS
 * fetches — the components consuming them will not need to change.
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
  | "Engagement"
  | "Maternity & New Born"
  | "Rice Ceremony & Birthday";

export const galleryCategories: ("All" | GalleryCategory)[] = [
  "All",
  "Wedding",
  "Pre-Wedding",
  "Engagement",
  "Maternity & New Born",
  "Rice Ceremony & Birthday",
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
 * Static placeholder images (Unsplash) — replace with real client photos in
 * /public/images or via the admin panel later.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
    alt: "Bride and groom during wedding ceremony",
    category: "Wedding",
    tall: true,
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    alt: "Couple holding hands at their wedding",
    category: "Wedding",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=80",
    alt: "Couple laughing during pre-wedding shoot",
    category: "Pre-Wedding",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
    alt: "Romantic outdoor pre-wedding moment",
    category: "Pre-Wedding",
    tall: true,
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80",
    alt: "Newly engaged couple celebrating",
    category: "Engagement",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
    alt: "Exchanging rings at the engagement",
    category: "Engagement",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?auto=format&fit=crop&w=900&q=80",
    alt: "Maternity portrait in soft light",
    category: "Maternity & New Born",
    tall: true,
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=80",
    alt: "Sleeping newborn wrapped in a blanket",
    category: "Maternity & New Born",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80",
    alt: "Tiny newborn feet held by parents",
    category: "Maternity & New Born",
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=900&q=80",
    alt: "Birthday cake with glowing candles",
    category: "Rice Ceremony & Birthday",
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80",
    alt: "Family celebrating a birthday party",
    category: "Rice Ceremony & Birthday",
    tall: true,
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=80",
    alt: "Bride getting ready before the ceremony",
    category: "Wedding",
  },
  {
    id: "g13",
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80",
    alt: "Newlyweds sharing a joyful dance",
    category: "Wedding",
  },
  {
    id: "g14",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80",
    alt: "Bride celebrating with her friends",
    category: "Wedding",
    tall: true,
  },
  {
    id: "g15",
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=80",
    alt: "Wedding bouquet in golden light",
    category: "Wedding",
  },
  {
    id: "g16",
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80",
    alt: "Couple walking through an open field",
    category: "Pre-Wedding",
  },
  {
    id: "g17",
    src: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=900&q=80",
    alt: "Sunset silhouette of a couple in love",
    category: "Pre-Wedding",
    tall: true,
  },
  {
    id: "g18",
    src: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&w=900&q=80",
    alt: "Couple laughing together outdoors",
    category: "Pre-Wedding",
  },
  {
    id: "g19",
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    alt: "Celebration dinner under fairy lights",
    category: "Engagement",
  },
  {
    id: "g20",
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80",
    alt: "Newborn cradled in loving hands",
    category: "Maternity & New Born",
  },
  {
    id: "g21",
    src: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=900&q=80",
    alt: "Golden balloons at a birthday celebration",
    category: "Rice Ceremony & Birthday",
  },
];

export type FilmCategory =
  | "Wedding"
  | "Rice Ceremony"
  | "Birthday & Baby"
  | "Ceremonies";

export const filmCategories: ("All" | FilmCategory)[] = [
  "All",
  "Wedding",
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
 * Films from the studio's real YouTube channel (@goldenmomentsphotography2025).
 * The admin panel will later manage this list — adding a video only needs its
 * YouTube id, title, duration and category.
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
    title: "Debayan & Mouli · Cinematic Wedding Teaser",
    duration: "2:53",
    category: "Wedding",
  },
  {
    youtubeId: "CH_4gCHZrKQ",
    title: "Adhyudh's Rice Ceremony · Cinematic Teaser",
    duration: "2:47",
    category: "Rice Ceremony",
  },
  {
    youtubeId: "ejan_AC2h80",
    title: "Swastika & Subham · Bengali Wedding Full Video",
    duration: "1:21:48",
    category: "Wedding",
  },
  {
    youtubeId: "7ihhwF-3xrE",
    title: "Rishan's 1st Birthday",
    duration: "16:00",
    category: "Birthday & Baby",
  },
  {
    youtubeId: "XvKMgosCYds",
    title: "Subhojit Weds Soumyasree · Wedding Full Video",
    duration: "1:02:21",
    category: "Wedding",
  },
  {
    youtubeId: "v0gXa50glxU",
    title: "Swastika's Mehendi & Sangeet Ceremony",
    duration: "32:36",
    category: "Ceremonies",
  },
  {
    youtubeId: "LsQOtYsx2_0",
    title: "Namrata & Arijit · Wedding Full Video",
    duration: "33:40",
    category: "Wedding",
  },
  {
    youtubeId: "u-3__e0RukI",
    title: "Piu's Baby Shower",
    duration: "14:41",
    category: "Birthday & Baby",
  },
  {
    youtubeId: "1bgf6SVod_o",
    title: "Sivanshi's Rice Ceremony · Cinematic Film",
    duration: "38:10",
    category: "Rice Ceremony",
  },
  {
    youtubeId: "AEjIyI11bfU",
    title: "Babita Weds Sandip · Bengali Wedding Full Video",
    duration: "35:08",
    category: "Wedding",
  },
  {
    youtubeId: "qYFfHhSSwLo",
    title: "Blessing Ceremony of Namrata",
    duration: "15:02",
    category: "Ceremonies",
  },
  {
    youtubeId: "mgowjqoCwBk",
    title: "Anuska Weds Tarak · Bengali Wedding Full Video",
    duration: "49:23",
    category: "Wedding",
  },
  {
    youtubeId: "ts5mG9aGcCM",
    title: "Rice Ceremony of Dipashree",
    duration: "20:08",
    category: "Rice Ceremony",
  },
  {
    youtubeId: "asJwkbXTIwg",
    title: "Souvik & Agamoni · Bengali Wedding Full Video",
    duration: "1:06:11",
    category: "Wedding",
  },
  {
    youtubeId: "vJgTTKLBXM0",
    title: "Arnab & Raima · Bengali Wedding Full Video",
    duration: "56:27",
    category: "Wedding",
  },
  {
    youtubeId: "5y4CRlJoJu4",
    title: "Madhab & Mousumi · Bengali Wedding Full Video",
    duration: "46:34",
    category: "Wedding",
  },
  {
    youtubeId: "F2ZvLxJOWqk",
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
    title: "Subrata Weds Jharna · Cinematic Wedding Film",
    duration: "47:18",
    category: "Wedding",
  },
  {
    youtubeId: "00L8TqFwWHc",
    title: "Raja & Monisha · Bengali Wedding Full Video",
    duration: "1:00:09",
    category: "Wedding",
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
