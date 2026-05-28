export type ProductItem = {
  title: string;
  description: string;
  image: string;
  category: string;
};

export const productItems: ProductItem[] = [
  {
    title: "Office Organizer",
    description: "Refined wooden organizers for the modern workspace.",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=900&auto=format&fit=crop",
    category: "Office Organizers",
  },
  {
    title: "Coffee & Side Tables",
    description: "Sculptural tables that anchor every living space.",
    image: "/Coffee & Side Tables.png",
    category: "Tables/Stools",
  },
  {
    title: "Charcuterie Board",
    description: "Heirloom serving boards crafted from premium hardwood.",
    image: "/Charcuterie Board.png",
    category: "Kitchen Utility Item",
  },
  {
    title: "Kitchen & Dining",
    description: "Daily rituals, elevated through honest materials.",
    image: "/Charcuterie Board.png",
    category: "Kitchen Utility Item",
  },
  {
    title: "Lamps & Lighting",
    description: "Warm, ambient lighting in turned wood and linen.",
    image: "/Lamps & Lighting.png",
    category: "Lamps & Lighting",
  },
  {
    title: "Decor & Living",
    description: "Curated objects to layer warmth into your interiors.",
    image: "/Decor & Living.png",
    category: "Home Decor",
  },
  {
    title: "Everyday Use",
    description: "Quiet utility designed for everyday beauty.",
    image: "/Everyday Use.png",
    category: "Everyday Utility Item",
  },
  {
    title: "Home Decor",
    description: "Statement pieces that complete a considered home.",
    image: "/Craftsmanship.png",
    category: "Home Decor",
  },
  {
    title: "Garden Decor",
    description: "Outdoor companions, weatherwise and elegant.",
    image: "/Garden Decor.png",
    category: "Garden Decor",
  },
];

export const productFilters = [
  "All",
  "Kitchen Utility Item",
  "Jute Containers",
  "Garden Decor",
  "Home Decor",
  "Everyday Utility Item",
  "Everyday Decor Item",
  "Organizers",
  "Tables/Stools",
  "Poufs",
  "Lamps & Lighting",
  "Office Organizers",
  "Wall Arts",
  "Ornaments",
];
