// Logo and branding
export const COMPANY_NAME = 'Frontier Fungi';
export const FREE_SHIPPING_THRESHOLD = 75;

// Navigation items
export const NAV_ITEMS = [
  { name: 'Shop', href: '#' },
  { name: 'Learn', href: '#' },
  { name: 'Connect', href: '#' },
];

// Mushroom cultures
export const MUSHROOM_CULTURES = [
  {
    id: 'golden-oyster',
    name: 'Golden Oyster',
    description: 'Bright yellow clusters with a delicate flavor and aroma',
    price: 18.99,
    difficulty: 'Beginner Friendly',
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 'lions-mane',
    name: 'Lion\'s Mane',
    description: 'Unique texture with seafood-like flavor and health benefits',
    price: 22.99,
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 'shiitake',
    name: 'Shiitake',
    description: 'Rich umami flavor perfect for Asian cuisine',
    price: 19.99,
    difficulty: 'Beginner Friendly',
    image: 'https://images.unsplash.com/photo-1607596220774-1e7c7ee28849?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 'blue-oyster',
    name: 'Blue Oyster',
    description: 'Beautiful bluish-grey caps with mild, earthy flavor',
    price: 17.99,
    difficulty: 'Beginner Friendly',
    image: 'https://images.unsplash.com/photo-1520273303361-5a19796e4757?w=800&auto=format&fit=crop&q=60',
  },
];

// Featured products
export const FEATURED_PRODUCTS = [
  {
    id: 'growing-kit',
    name: 'Complete Growing Kit',
    description: 'Everything you need to start growing gourmet mushrooms at home',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1697655907667-72d61dfdc1c0?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 'humidity-controller',
    name: 'Humidity Controller',
    description: 'Professional-grade humidity control for optimal growing conditions',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1527090461107-b96a59c5a3ed?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 'organic-substrate',
    name: 'Organic Substrate',
    description: 'Premium organic substrate for healthy, abundant mushroom growth',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 'monthly-culture-box',
    name: 'Monthly Culture Box',
    description: 'Subscription service with new cultures, tools, and growing tips',
    price: 39.99,
    subscription: true,
    image: 'https://images.unsplash.com/photo-1606914999793-0d65eca5ad85?w=800&auto=format&fit=crop&q=60',
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    content: '"I was hesitant to grow my own mushrooms, but Frontier Fungi\'s beginner kit made it so simple! The step-by-step instructions were clear, and I had my first harvest of Blue Oysters within weeks. Now I\'m hooked!"',
    author: {
      name: 'Jessica D.',
      role: 'Home Grower',
      initials: 'JD',
    },
    rating: 5,
  },
  {
    id: 2,
    content: '"The StamBot AI assistant is a game-changer! When my Lion\'s Mane started showing unusual growth patterns, I uploaded photos and got immediate advice that saved my harvest. Worth every penny of the premium subscription."',
    author: {
      name: 'Mark T.',
      role: 'Chef & Grower',
      initials: 'MT',
    },
    rating: 5,
  },
  {
    id: 3,
    content: '"I\'ve been ordering from Frontier Fungi for over a year now. Their monthly subscription keeps me trying new varieties I wouldn\'t have discovered otherwise. The quality is consistently excellent, and their customer service is top-notch."',
    author: {
      name: 'Anna K.',
      role: 'Culinary Enthusiast',
      initials: 'AK',
    },
    rating: 5,
  },
];

// Social gallery images
export const SOCIAL_GALLERY_IMAGES = [
  {
    id: 1,
    alt: 'Golden oyster mushroom harvest',
    src: 'https://images.unsplash.com/photo-1536764434809-5f859905217b?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    alt: 'Home mushroom growing setup',
    src: 'https://images.unsplash.com/photo-1606914999793-0d65eca5ad85?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    alt: 'Chef cooking with fresh mushrooms',
    src: 'https://images.unsplash.com/photo-1606914999542-68b1960b3ce5?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    alt: 'Lion\'s mane mushroom closeup',
    src: 'https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 5,
    alt: 'Basket of wild mushrooms',
    src: 'https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 6,
    alt: 'Mushroom mycelium growth',
    src: 'https://images.unsplash.com/photo-1626875522029-75be51f46d38?w=800&auto=format&fit=crop&q=60',
  },
];

// Footer links
export const FOOTER_LINKS = {
  shop: [
    { name: 'Growing Kits', href: '#' },
    { name: 'Mushroom Cultures', href: '#' },
    { name: 'Cultivation Supplies', href: '#' },
    { name: 'Monthly Subscriptions', href: '#' },
    { name: 'Gift Cards', href: '#' },
  ],
  learn: [
    { name: 'Growing Guides', href: '#' },
    { name: 'Video Tutorials', href: '#' },
    { name: 'Mushroom Species', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
  ],
};
