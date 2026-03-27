// ═══════════════════════════════════════════════════════════
// CHRONOS Watch Store v2 — script.js
// Features: Products, Cart, Wishlist, Modal, Checkout,
//   Filters (price+rating+color+category), Sort, Search,
//   Recommendations, Review sort, Image zoom, Toast
// ═══════════════════════════════════════════════════════════

/* ──────────────────────────────────────────
   1. PRODUCT DATA
────────────────────────────────────────── */
const products = [
  {
    id: 1, name: "Royal Oak Prestige", category: "Luxury",
    price: 8999, originalPrice: 13999, discount: 36,
    rating: 4.8, reviewCount: 248,
    badge: "Best Seller", badgeClass: "gold",
    stock: true, stockQty: 8,
    colors: [
      { name: "Black",  hex: "#1a1a1a", images: [
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80",
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80"
      ]},
      { name: "Silver", hex: "#c0c0c0", images: [
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80",
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80"
      ]},
      { name: "Gold",   hex: "#c9a84c", images: [
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80",
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80"
      ]}
    ],
    description: "A masterpiece that redefines luxury watchmaking. The Royal Oak Prestige features a hand-finished stainless steel case, sapphire crystal glass, and Swiss automatic movement with 72-hour power reserve.",
    specs: ["Stainless Steel Case", "Swiss Auto Movement", "50m Water Resistance", "Sapphire Crystal", "38mm Diameter", "72hr Power Reserve"],
    ratingBreakdown: { 5: 62, 4: 22, 3: 10, 2: 4, 1: 2 },
    reviews: [
      { name: "Arjun Mehta", rating: 5, date: "12 Jan 2025", text: "Absolutely stunning. The quality far exceeded my expectations — every detail is flawless. A true collector's piece.", verified: true },
      { name: "Priya Sharma", rating: 5, date: "4 Feb 2025", text: "Gifted this to my husband for our anniversary. He was speechless. The packaging itself is luxurious!", verified: true },
      { name: "Vikram Nair", rating: 4, date: "29 Mar 2025", text: "Beautiful watch, very accurate movement. Minor packaging issue on arrival but the watch itself is perfect.", verified: false }
    ]
  },
  {
    id: 2, name: "Nautilus Elite", category: "Premium",
    price: 12499, originalPrice: 18000, discount: 31,
    rating: 4.9, reviewCount: 176,
    badge: "Top Rated", badgeClass: "gold",
    stock: true, stockQty: 3,
    colors: [
      { name: "Rose Gold", hex: "#b76e79", images: [
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80",
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
        "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=800&q=80"
      ]},
      { name: "Black", hex: "#1a1a1a", images: [
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80",
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80"
      ]},
      { name: "Silver", hex: "#c0c0c0", images: [
        "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=800&q=80",
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80"
      ]}
    ],
    description: "Sophisticated design meets modern engineering. Rose gold plated case with genuine alligator leather strap. The exhibition caseback reveals the intricate Swiss automatic movement.",
    specs: ["Rose Gold Plated", "Swiss Automatic", "100m Water Resistance", "Exhibition Caseback", "42mm Diameter", "Alligator Strap"],
    ratingBreakdown: { 5: 78, 4: 15, 3: 5, 2: 1, 1: 1 },
    reviews: [
      { name: "Rohan Kapoor", rating: 5, date: "8 Jan 2025", text: "The rose gold finish is absolutely stunning. Gets compliments every single day. Easily worth the price.", verified: true },
      { name: "Sunita Rao", rating: 5, date: "21 Feb 2025", text: "Incredibly well-crafted. The caseback reveals a breathtaking movement. A true work of art on the wrist.", verified: true }
    ]
  },
  {
    id: 3, name: "Submariner Pro", category: "Sport",
    price: 6499, originalPrice: 9999, discount: 35,
    rating: 4.6, reviewCount: 312,
    badge: "Popular", badgeClass: "",
    stock: true, stockQty: 15,
    colors: [
      { name: "Black", hex: "#1a1a1a", images: [
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80",
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80"
      ]},
      { name: "Blue", hex: "#1e3a5f", images: [
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80",
        "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=800&q=80"
      ]},
      { name: "Green", hex: "#1a4a2e", images: [
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80",
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80"
      ]}
    ],
    description: "Built for adventure. This dive watch features 200m water resistance, a unidirectional rotating bezel, and Super-LumiNova indices for perfect legibility in any conditions.",
    specs: ["Titanium Case", "Automatic Movement", "200m Water Resistance", "Unidirectional Bezel", "40mm Diameter", "Super-LumiNova"],
    ratingBreakdown: { 5: 55, 4: 28, 3: 12, 2: 3, 1: 2 },
    reviews: [
      { name: "Kiran Patel", rating: 5, date: "15 Dec 2024", text: "Used it for scuba diving. Worked flawlessly at depth. The bezel action is incredibly satisfying and precise.", verified: true },
      { name: "Ananya Gupta", rating: 4, date: "3 Mar 2025", text: "Great value dive watch. The lume is exceptional. Slight bracelet rattle at first but settled in nicely.", verified: true },
      { name: "Dev Sharma", rating: 5, date: "18 Mar 2025", text: "Looks far more expensive than it is. The green dial version is a head-turner. Very happy with this purchase.", verified: false }
    ]
  },
  {
    id: 4, name: "Prestige Classic", category: "Casual",
    price: 899, originalPrice: 1499, discount: 40,
    rating: 4.3, reviewCount: 521,
    badge: "40% OFF", badgeClass: "",
    stock: true, stockQty: 50,
    colors: [
      { name: "Silver", hex: "#c0c0c0", images: [
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80"
      ]},
      { name: "Black", hex: "#1a1a1a", images: [
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80"
      ]},
      { name: "Gold", hex: "#c9a84c", images: [
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80",
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80"
      ]}
    ],
    description: "Minimalist elegance at its finest. Clean dial, mesh bracelet, quartz precision. A versatile everyday watch that complements both formal and casual attire effortlessly.",
    specs: ["Stainless Steel", "Quartz Movement", "30m Water Resistance", "Mesh Bracelet", "36mm Diameter", "Mineral Crystal"],
    ratingBreakdown: { 5: 48, 4: 30, 3: 14, 2: 5, 1: 3 },
    reviews: [
      { name: "Pooja Singh", rating: 4, date: "2 Feb 2025", text: "Excellent value! The mesh strap is comfortable and the dial is beautifully clean. Great everyday watch.", verified: true },
      { name: "Rahul Verma", rating: 5, date: "10 Mar 2025", text: "Bought as my first proper watch. Gets tons of compliments. Looks way more expensive than ₹899!", verified: true }
    ]
  },
  {
    id: 5, name: "Chronograph Master", category: "Sport",
    price: 4299, originalPrice: 6500, discount: 34,
    rating: 4.7, reviewCount: 189,
    badge: "New Arrival", badgeClass: "green",
    stock: true, stockQty: 7,
    colors: [
      { name: "Black", hex: "#1a1a1a", images: [
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80"
      ]},
      { name: "White", hex: "#f5f5f5", images: [
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
        "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=800&q=80"
      ]},
      { name: "Blue", hex: "#1e3a5f", images: [
        "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=800&q=80",
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80"
      ]}
    ],
    description: "Precision timing for champions. Three sub-dials track hours, minutes, and seconds. Ceramic bezel, anti-magnetic movement, and date display make this the ultimate sport-luxury watch.",
    specs: ["Ceramic Bezel", "Auto Chronograph", "100m Water Resistance", "Date Display", "44mm Diameter", "Three Sub-dials"],
    ratingBreakdown: { 5: 60, 4: 25, 3: 10, 2: 3, 1: 2 },
    reviews: [
      { name: "Aditya Kumar", rating: 5, date: "20 Jan 2025", text: "The chronograph works with a beautiful snap. This watch commands attention and respect wherever I go.", verified: true },
      { name: "Meera Joshi", rating: 4, date: "15 Feb 2025", text: "Stunning piece. The ceramic bezel is scratch-proof and the lume is absolutely brilliant in dark rooms.", verified: true }
    ]
  },
  {
    id: 6, name: "Heritage Vintage", category: "Vintage",
    price: 2799, originalPrice: 3999, discount: 30,
    rating: 4.5, reviewCount: 134,
    badge: "Classic", badgeClass: "gold",
    stock: true, stockQty: 12,
    colors: [
      { name: "Brown", hex: "#8B6914", images: [
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80",
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80",
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80"
      ]},
      { name: "Black", hex: "#1a1a1a", images: [
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80",
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80",
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80"
      ]}
    ],
    description: "A love letter to the golden age of watchmaking. Bronze case develops a natural patina over time. Manual wind movement lets you connect with the art of timekeeping every single day.",
    specs: ["Bronze Case", "Manual Wind", "50m Water Resistance", "Leather Strap", "38mm Diameter", "Aged Patina Dial"],
    ratingBreakdown: { 5: 52, 4: 28, 3: 12, 2: 5, 1: 3 },
    reviews: [
      { name: "Suresh Pillai", rating: 5, date: "5 Jan 2025", text: "The bronze patina development is absolutely charming. Every scratch tells a story. True character watch.", verified: true },
      { name: "Lakshmi Iyer", rating: 4, date: "28 Feb 2025", text: "Reminds me of watches from old Bollywood films. Very charming. The leather strap is excellent quality.", verified: false }
    ]
  },
  {
    id: 7, name: "Aviator Sport", category: "Sport",
    price: 3499, originalPrice: 5200, discount: 33,
    rating: 4.6, reviewCount: 267,
    badge: "Trending", badgeClass: "",
    stock: true, stockQty: 20,
    colors: [
      { name: "Black", hex: "#1a1a1a", images: [
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80"
      ]},
      { name: "Silver", hex: "#c0c0c0", images: [
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
        "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=800&q=80"
      ]}
    ],
    description: "Inspired by the cockpit instruments of legendary aircraft. Arabic numerals, luminous handset, and anti-magnetic movement for the modern adventurer who lives life at altitude.",
    specs: ["Steel Case", "Automatic", "100m Water Resistance", "Anti-magnetic", "42mm Diameter", "Super-LumiNova"],
    ratingBreakdown: { 5: 55, 4: 28, 3: 11, 2: 4, 1: 2 },
    reviews: [
      { name: "Neha Mishra", rating: 5, date: "9 Feb 2025", text: "As a pilot, I need a reliable watch. Legibility is excellent. The anti-magnetic feature is a real bonus.", verified: true },
      { name: "Sanjay Desai", rating: 4, date: "22 Mar 2025", text: "The lume glows intensely in the dark. Great everyday sport watch at a very fair price point.", verified: true }
    ]
  },
  {
    id: 8, name: "Moonphase Luxury", category: "Luxury",
    price: 15999, originalPrice: 22000, discount: 27,
    rating: 4.9, reviewCount: 92,
    badge: "Exclusive", badgeClass: "gold",
    stock: true, stockQty: 2,
    colors: [
      { name: "Gold", hex: "#c9a84c", images: [
        "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=800&q=80",
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80"
      ]},
      { name: "Black", hex: "#1a1a1a", images: [
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
        "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=800&q=80",
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80"
      ]}
    ],
    description: "An astronomical marvel. The moonphase display tracks the lunar cycle within 122 years. Guilloché dial work, 18K gold case, and alligator strap — for those who accept nothing less than perfection.",
    specs: ["18K Gold Case", "Swiss Automatic", "Moonphase Display", "Alligator Strap", "40mm Diameter", "Guilloché Dial"],
    ratingBreakdown: { 5: 82, 4: 12, 3: 4, 2: 1, 1: 1 },
    reviews: [
      { name: "Rajesh Bhat", rating: 5, date: "14 Jan 2025", text: "A true piece of art. The moonphase complication is breathtaking. Every guest who sees it is utterly mesmerized.", verified: true },
      { name: "Divya Reddy", rating: 5, date: "7 Mar 2025", text: "Gifted to my father on retirement. He was moved to tears. The craftsmanship is beyond words.", verified: true }
    ]
  },
  {
    id: 9, name: "Urban Minimal", category: "Casual",
    price: 1499, originalPrice: 2200, discount: 32,
    rating: 4.4, reviewCount: 445,
    badge: "Popular", badgeClass: "",
    stock: true, stockQty: 35,
    colors: [
      { name: "White", hex: "#f5f5f5", images: [
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80"
      ]},
      { name: "Black", hex: "#1a1a1a", images: [
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80"
      ]},
      { name: "Beige", hex: "#d4b896", images: [
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80",
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80"
      ]}
    ],
    description: "Less is more. Clean lines, no clutter, pure function. This minimalist daily-wearer pairs with anything in your wardrobe and keeps you on time without demanding attention.",
    specs: ["Aluminum Case", "Quartz", "30m Water Resistance", "NATO Strap", "38mm Diameter", "Anti-scratch Glass"],
    ratingBreakdown: { 5: 50, 4: 30, 3: 13, 2: 4, 1: 3 },
    reviews: [
      { name: "Isha Trivedi", rating: 4, date: "18 Feb 2025", text: "Exactly what I wanted. Clean, simple, versatile. Looks great with everything from suits to streetwear.", verified: true },
      { name: "Manoj Kumar", rating: 5, date: "5 Mar 2025", text: "The white dial is beautiful. Very lightweight and comfortable. Perfect office watch.", verified: false }
    ]
  },
  {
    id: 10, name: "Skeleton Tourbillon", category: "Luxury",
    price: 24999, originalPrice: 34999, discount: 29,
    rating: 4.9, reviewCount: 48,
    badge: "Ultra Luxury", badgeClass: "gold",
    stock: false, stockQty: 0,
    colors: [
      { name: "Black", hex: "#1a1a1a", images: [
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80",
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80"
      ]},
      { name: "Silver", hex: "#c0c0c0", images: [
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80"
      ]}
    ],
    description: "The pinnacle of horology. Open-worked skeleton dial reveals the mesmerizing tourbillon — watchmaking's most complex complication — in perpetual motion on your wrist. Limited edition.",
    specs: ["Titanium Case", "Manual Tourbillon", "Skeleton Dial", "Crocodile Strap", "45mm Diameter", "Limited Edition"],
    ratingBreakdown: { 5: 90, 4: 8, 3: 1, 2: 1, 1: 0 },
    reviews: [
      { name: "Arnav Singhania", rating: 5, date: "1 Feb 2025", text: "Owned many luxury watches. This tourbillon is extraordinary. Every glance at the wrist brings genuine joy.", verified: true }
    ]
  },
  {
    id: 11, name: "Explorer GMT", category: "Sport",
    price: 7299, originalPrice: 10500, discount: 30,
    rating: 4.7, reviewCount: 203,
    badge: "New", badgeClass: "green",
    stock: true, stockQty: 9,
    colors: [
      { name: "Black", hex: "#1a1a1a", images: [
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80"
      ]},
      { name: "Blue", hex: "#1e3a5f", images: [
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
        "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=800&q=80"
      ]}
    ],
    description: "For the globe-trotter. GMT hand tracks a second time zone. Bi-color bezel distinguishes day from night hours across both zones. Never miss a meeting, no matter which continent you're on.",
    specs: ["Steel Case", "GMT Automatic", "200m Water Resistance", "Jubilee Bracelet", "40mm Diameter", "Bi-color Bezel"],
    ratingBreakdown: { 5: 60, 4: 25, 3: 10, 2: 3, 1: 2 },
    reviews: [
      { name: "Prashant Hegde", rating: 5, date: "25 Jan 2025", text: "The GMT function is incredibly useful for my international work schedule. Excellent build quality throughout.", verified: true },
      { name: "Tanvi Gupta", rating: 4, date: "11 Mar 2025", text: "The bi-color bezel clicks are precise and satisfying. Beautiful watch for the price.", verified: true }
    ]
  },
  {
    id: 12, name: "Solar Pulse Eco", category: "Casual",
    price: 2199, originalPrice: 3200, discount: 31,
    rating: 4.5, reviewCount: 378,
    badge: "Eco Pick", badgeClass: "green",
    stock: true, stockQty: 28,
    colors: [
      { name: "Silver", hex: "#c0c0c0", images: [
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80"
      ]},
      { name: "Blue", hex: "#1e3a5f", images: [
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80",
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80"
      ]}
    ],
    description: "Powered by light, never needs a battery. Solar charging technology stores up to 6 months of power reserve in complete darkness. Eco-conscious watchmaking for the modern world.",
    specs: ["Stainless Steel", "Solar Quartz", "50m Water Resistance", "Resin Band", "42mm Diameter", "6-Month Reserve"],
    ratingBreakdown: { 5: 55, 4: 28, 3: 11, 2: 4, 1: 2 },
    reviews: [
      { name: "Sneha Kaur", rating: 5, date: "14 Feb 2025", text: "Never need to worry about a battery change. Works flawlessly in all light conditions. Very stylish too.", verified: true },
      { name: "Arun Pillai", rating: 4, date: "8 Mar 2025", text: "The solar concept is wonderful. Accurate timekeeping and the blue dial is absolutely gorgeous.", verified: false }
    ]
  }
];

/* ──────────────────────────────────────────
   2. STATE
────────────────────────────────────────── */
let cart       = JSON.parse(localStorage.getItem('cCart'))     || [];
let wishlist   = JSON.parse(localStorage.getItem('cWishlist')) || [];
let filters    = { price: 'all', rating: 0, colors: [], categories: [] };
let sortBy     = 'default';
let searchQ    = '';
let activeColorPerProduct = {}; // productId -> colorIndex
let currentModalProduct   = null;
let currentModalColorIdx  = 0;

/* ──────────────────────────────────────────
   3. INIT
────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildColorFilterButtons();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  bindAllEvents();
  handleScroll();
});

/* ──────────────────────────────────────────
   4. EVENT BINDINGS
────────────────────────────────────────── */
function bindAllEvents() {
  // Search
  const si = document.getElementById('searchInput');
  const sc = document.getElementById('searchClearBtn');
  si.addEventListener('input', e => {
    searchQ = e.target.value.toLowerCase().trim();
    sc.style.display = searchQ ? 'block' : 'none';
    renderProducts();
  });
  sc.addEventListener('click', () => {
    si.value = ''; searchQ = '';
    sc.style.display = 'none';
    si.focus(); renderProducts();
  });

  // Price filter
  document.querySelectorAll('input[name="price"]').forEach(r =>
    r.addEventListener('change', e => { filters.price = e.target.value; renderProducts(); })
  );

  // Rating filter
  document.querySelectorAll('input[name="rating"]').forEach(r =>
    r.addEventListener('change', e => { filters.rating = parseFloat(e.target.value); renderProducts(); })
  );

  // Category filter
  document.querySelectorAll('.cat-filter').forEach(cb =>
    cb.addEventListener('change', () => {
      filters.categories = [...document.querySelectorAll('.cat-filter:checked')].map(c => c.value);
      renderProducts();
    })
  );

  // Sort
  document.getElementById('sortSelect').addEventListener('change', e => {
    sortBy = e.target.value; renderProducts();
  });

  // Clear all filters
  document.getElementById('clearAllFilters').addEventListener('click', hardReset);

  // Mobile filter toggle
  document.getElementById('filterToggleBtn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('mobile-open');
  });
  document.getElementById('sidebarCloseMobile').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('mobile-open');
  });

  // Cart
  document.getElementById('cartNavBtn').addEventListener('click', openCart);
  document.getElementById('cartSideClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.getElementById('cartCheckoutBtn').addEventListener('click', () => { closeCart(); openCheckout(); });
  document.getElementById('cartClearBtn').addEventListener('click', clearCart);

  // Wishlist
  document.getElementById('wishlistNavBtn').addEventListener('click', openWishlist);
  document.getElementById('wishlistClose').addEventListener('click', closeWishlist);
  document.getElementById('wishlistOverlay').addEventListener('click', closeWishlist);

  // Modal
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', closeModal);

  // Checkout
  document.getElementById('checkoutClose').addEventListener('click', closeCheckout);
  document.getElementById('checkoutOverlay').addEventListener('click', closeCheckout);
  document.getElementById('placeOrderBtn').addEventListener('click', placeOrder);
  document.querySelectorAll('.payment-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.payment-opt').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      const method = opt.dataset.method;
      document.getElementById('cardForm').style.display = method === 'card' ? 'grid' : 'none';
      document.getElementById('upiForm').style.display  = method === 'upi'  ? 'grid' : 'none';
    });
  });

  // Success
  document.getElementById('successContinueBtn').addEventListener('click', closeSuccess);

  // Review sort
  document.getElementById('reviewSortSelect').addEventListener('change', e => {
    if (currentModalProduct) renderReviews(currentModalProduct, e.target.value);
  });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal(); closeCart(); closeWishlist(); closeCheckout(); closeSuccess();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault(); document.getElementById('searchInput').focus();
    }
  });
}

function handleScroll() {
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  });
}

/* ──────────────────────────────────────────
   5. COLOR FILTER BUTTONS (built from product data)
────────────────────────────────────────── */
function buildColorFilterButtons() {
  const allColors = [...new Set(products.flatMap(p => p.colors.map(c => c.name)))];
  const grid = document.getElementById('colorFilterGrid');
  allColors.forEach(color => {
    const hex = products.find(p => p.colors.some(c => c.name === color)).colors.find(c => c.name === color).hex;
    const btn = document.createElement('button');
    btn.className = 'color-filter-btn';
    btn.dataset.color = color;
    btn.innerHTML = `<span class="color-dot-small" style="background:${hex}"></span>${color}`;
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const activeColors = [...document.querySelectorAll('.color-filter-btn.active')].map(b => b.dataset.color);
      filters.colors = activeColors;
      renderProducts();
    });
    grid.appendChild(btn);
  });
}

/* ──────────────────────────────────────────
   6. RENDER PRODUCTS
────────────────────────────────────────── */
function renderProducts() {
  let filtered = products.filter(p => {
    // Search
    if (searchQ && !p.name.toLowerCase().includes(searchQ) && !p.category.toLowerCase().includes(searchQ) && !p.description.toLowerCase().includes(searchQ)) return false;
    // Price
    if (filters.price === 'budget'  && p.price >= 1000)  return false;
    if (filters.price === 'mid'     && (p.price < 1000 || p.price > 5000)) return false;
    if (filters.price === 'luxury'  && p.price <= 5000)  return false;
    // Rating
    if (p.rating < filters.rating) return false;
    // Colors
    if (filters.colors.length > 0 && !filters.colors.some(fc => p.colors.some(pc => pc.name === fc))) return false;
    // Categories
    if (filters.categories.length > 0 && !filters.categories.includes(p.category)) return false;
    return true;
  });

  // Sort
  if (sortBy === 'price-asc')   filtered.sort((a,b) => a.price - b.price);
  if (sortBy === 'price-desc')  filtered.sort((a,b) => b.price - a.price);
  if (sortBy === 'rating')      filtered.sort((a,b) => b.rating - a.rating);
  if (sortBy === 'discount')    filtered.sort((a,b) => b.discount - a.discount);

  const grid = document.getElementById('productsGrid');
  const noRes = document.getElementById('noResults');
  document.getElementById('resultCount').textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    grid.innerHTML = ''; noRes.style.display = 'block'; return;
  }
  noRes.style.display = 'none';
  grid.innerHTML = filtered.map(p => buildProductCard(p)).join('');
  setupCardColorDots();
}

/* ──────────────────────────────────────────
   7. BUILD PRODUCT CARD HTML
────────────────────────────────────────── */
function buildProductCard(p) {
  const ci   = activeColorPerProduct[p.id] || 0;
  const img  = p.colors[ci].images[0];
  const wl   = wishlist.includes(p.id);
  const inC  = cart.some(i => i.id === p.id);

  return `
  <div class="product-card" data-id="${p.id}">
    <div class="card-img-area" onclick="openModal(${p.id})">
      <img src="${img}" alt="${p.name}" loading="lazy" id="cimg${p.id}">
      ${p.badge ? `<span class="card-badge ${p.badgeClass}">${p.badge}</span>` : ''}
      <button class="wishlist-btn ${wl ? 'active' : ''}"
              onclick="toggleWishlist(${p.id},event)"
              title="${wl ? 'Remove from wishlist' : 'Add to wishlist'}">
        ${wl ? '❤️' : '🤍'}
      </button>
      <div class="card-color-dots">
        ${p.colors.map((c,i) => `
          <span class="c-dot ${i===ci?'selected':''}"
                style="background:${c.hex}"
                data-pid="${p.id}" data-ci="${i}"
                title="${c.name}"></span>`).join('')}
      </div>
      <div class="card-quick-view">Quick View</div>
    </div>
    <div class="card-body">
      <span class="card-cat">${p.category}</span>
      <h3 class="card-name" onclick="openModal(${p.id})">${p.name}</h3>
      <div class="card-stars">
        <span class="stars-visual">${renderStarsVisual(p.rating)}</span>
        <span class="rating-val">${p.rating}</span>
        <span class="review-cnt">(${p.reviewCount})</span>
      </div>
      <div class="card-pricing">
        <span class="price-now">₹${fmt(p.price)}</span>
        <span class="price-was">₹${fmt(p.originalPrice)}</span>
        <span class="price-off">${p.discount}% OFF</span>
      </div>
      <div class="card-btns">
        <button class="btn-card-cart ${inC?'added':''}" id="bcc${p.id}" onclick="addToCart(${p.id})">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          ${inC ? 'In Cart ✓' : 'Add to Cart'}
        </button>
        <button class="btn-card-buy" onclick="quickBuyNow(${p.id})">Buy Now</button>
      </div>
    </div>
  </div>`;
}

/* ──────────────────────────────────────────
   8. CARD COLOR DOT INTERACTION
────────────────────────────────────────── */
function setupCardColorDots() {
  document.querySelectorAll('.c-dot').forEach(dot => {
    dot.addEventListener('click', e => {
      e.stopPropagation();
      const pid = parseInt(dot.dataset.pid);
      const ci  = parseInt(dot.dataset.ci);
      const p   = products.find(pr => pr.id === pid);
      activeColorPerProduct[pid] = ci;
      document.getElementById(`cimg${pid}`).src = p.colors[ci].images[0];
      const card = document.querySelector(`.product-card[data-id="${pid}"]`);
      card.querySelectorAll('.c-dot').forEach((d,i) => d.classList.toggle('selected', i === ci));
    });
  });
}

/* ──────────────────────────────────────────
   9. PRODUCT MODAL
────────────────────────────────────────── */
function openModal(productId) {
  const p = products.find(pr => pr.id === productId);
  if (!p) return;
  currentModalProduct = p;
  currentModalColorIdx = activeColorPerProduct[productId] || 0;

  // Breadcrumb
  document.getElementById('mBreadCat').textContent  = p.category;
  document.getElementById('mBreadName').textContent = p.name;
  document.getElementById('mName').textContent      = p.name;

  // Gallery
  buildModalGallery(p, currentModalColorIdx);

  // Rating row
  document.getElementById('mRatingRow').innerHTML = `
    <span class="stars-visual" style="font-size:1rem;">${renderStarsVisual(p.rating)}</span>
    <strong>${p.rating}</strong>
    <span style="color:var(--light-text);font-size:0.82rem">${p.reviewCount} reviews</span>
    ${p.stock ? '<span style="color:var(--green);font-size:0.78rem;font-weight:600">✔ In Stock</span>' : '<span style="color:var(--red);font-size:0.78rem;font-weight:600">✖ Out of Stock</span>'}
  `;

  // Stock & Delivery
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const deliveryDay = days[(new Date().getDay() + 1) % 7];
  document.getElementById('mStockDelivery').innerHTML = `
    <div class="stock-tag ${p.stock ? 'instock' : 'outstock'}">
      ${p.stock ? `✓ In Stock (${p.stockQty} left)` : '✗ Out of Stock'}
    </div>
    ${p.stock ? `<div class="delivery-info">🚚 Free delivery by <strong>${deliveryDay}</strong> • Order in next 2 hours</div>` : ''}
  `;

  // Price
  document.getElementById('mPriceBlock').innerHTML = `
    <span class="price-now">₹${fmt(p.price)}</span>
    <span class="price-was">₹${fmt(p.originalPrice)}</span>
    <span class="price-off">${p.discount}% OFF</span>
    <span style="font-size:0.78rem;color:var(--green);font-weight:600">You save ₹${fmt(p.originalPrice - p.price)}</span>
  `;

  // Colors
  buildModalColors(p, currentModalColorIdx);

  // Description
  document.getElementById('mDesc').textContent = p.description;

  // Specs
  document.getElementById('mSpecsBlock').innerHTML = `
    <div class="specs-heading">Specifications</div>
    <div class="specs-rows">
      ${p.specs.map(s => `<div class="spec-row">${s}</div>`).join('')}
    </div>
  `;

  // Action buttons
  document.getElementById('mAddCart').onclick = () => { addToCart(productId); closeModal(); };
  document.getElementById('mBuyNow').onclick  = () => { closeModal(); quickBuyNow(productId); };
  if (!p.stock) {
    document.getElementById('mAddCart').disabled = true;
    document.getElementById('mBuyNow').disabled  = true;
    document.getElementById('mAddCart').style.opacity = '0.4';
    document.getElementById('mBuyNow').style.opacity  = '0.4';
  } else {
    document.getElementById('mAddCart').disabled = false;
    document.getElementById('mBuyNow').disabled  = false;
    document.getElementById('mAddCart').style.opacity = '1';
    document.getElementById('mBuyNow').style.opacity  = '1';
  }

  // Rating breakdown
  buildRatingBreakdown(p);

  // Reviews
  document.getElementById('reviewSortSelect').value = 'latest';
  renderReviews(p, 'latest');

  // Show related
  buildRecommendations(p);

  // Open
  document.getElementById('productModal').classList.add('open');
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function buildModalGallery(p, ci) {
  const imgs = p.colors[ci].images;
  const mainImg = document.getElementById('galleryMainImg');
  mainImg.src = imgs[0];
  mainImg.alt = p.name;

  const thumbRow = document.getElementById('galleryThumbsRow');
  thumbRow.innerHTML = imgs.map((img, i) => `
    <div class="g-thumb ${i===0?'active':''}" onclick="switchModalImg('${img}', this, '${mainImg.id}')">
      <img src="${img}" alt="${p.name} view ${i+1}" loading="lazy">
    </div>
  `).join('');

  // Image zoom
  setupImageZoom(mainImg);
}

function switchModalImg(src, thumbEl, mainId) {
  document.getElementById(mainId).src = src;
  document.querySelectorAll('.g-thumb').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
  setupImageZoom(document.getElementById(mainId));
}

function setupImageZoom(img) {
  const wrap   = document.getElementById('galleryZoomWrap');
  const lens   = document.getElementById('zoomLens');
  const result = document.getElementById('zoomResult');

  wrap.onmousemove = e => {
    const rect = wrap.getBoundingClientRect();
    const x    = e.clientX - rect.left;
    const y    = e.clientY - rect.top;
    const lx   = Math.max(0, Math.min(x - 50, rect.width - 100));
    const ly   = Math.max(0, Math.min(y - 50, rect.height - 100));
    lens.style.left = lx + 'px';
    lens.style.top  = ly + 'px';
    const xp = ((lx / rect.width) * 100).toFixed(1);
    const yp = ((ly / rect.height) * 100).toFixed(1);
    result.style.backgroundPosition = `${xp}% ${yp}%`;
    result.style.backgroundImage    = `url(${img.src})`;
  };
  wrap.onmouseenter = () => { lens.style.display='block'; result.style.display='block'; };
  wrap.onmouseleave = () => { lens.style.display='none';  result.style.display='none'; };
}

function buildModalColors(p, activeIdx) {
  document.getElementById('mColorsBlock').innerHTML = `
    <div class="colors-title">Color: <strong>${p.colors[activeIdx].name}</strong></div>
    <div class="modal-color-swatches">
      ${p.colors.map((c, i) => `
        <button class="modal-color-btn ${i===activeIdx?'active':''}"
                onclick="selectModalColor(${p.id}, ${i})">
          <span class="modal-color-dot" style="background:${c.hex};border:1px solid rgba(0,0,0,0.15)"></span>
          ${c.name}
        </button>`).join('')}
    </div>
  `;
}

function selectModalColor(pid, ci) {
  const p = products.find(pr => pr.id === pid);
  activeColorPerProduct[pid] = ci;
  currentModalColorIdx = ci;
  document.getElementById('galleryMainImg').src = p.colors[ci].images[0];
  document.querySelectorAll('.modal-color-btn').forEach((b, i) => b.classList.toggle('active', i === ci));
  document.querySelector('.colors-title strong').textContent = p.colors[ci].name;
  const thumbRow = document.getElementById('galleryThumbsRow');
  thumbRow.innerHTML = p.colors[ci].images.map((img, i) => `
    <div class="g-thumb ${i===0?'active':''}" onclick="switchModalImg('${img}', this, 'galleryMainImg')">
      <img src="${img}" alt="${p.name}" loading="lazy">
    </div>
  `).join('');
}

function buildRatingBreakdown(p) {
  const total = Object.values(p.ratingBreakdown).reduce((a,b)=>a+b, 0);
  const bars  = [5,4,3,2,1].map(star => {
    const cnt = p.ratingBreakdown[star] || 0;
    const pct = total ? Math.round((cnt/total)*100) : 0;
    return `
      <div class="rb-bar-row">
        <span>${star}★</span>
        <div class="rb-bar-track"><div class="rb-bar-fill" style="width:${pct}%"></div></div>
        <span>${pct}%</span>
      </div>`;
  }).join('');

  document.getElementById('mRatingBreakdown').innerHTML = `
    <div class="rb-title">Rating Breakdown</div>
    <div class="rb-summary">
      <span class="rb-big-num">${p.rating}</span>
      <div>
        <div class="rb-big-stars">${renderStarsVisual(p.rating)}</div>
        <div class="rb-total-reviews">${p.reviewCount} verified reviews</div>
      </div>
    </div>
    ${bars}
  `;
}

function renderReviews(p, sort = 'latest') {
  let reviews = [...p.reviews];
  if (sort === 'highest') reviews.sort((a,b) => b.rating - a.rating);
  if (sort === 'lowest')  reviews.sort((a,b) => a.rating - b.rating);
  // 'latest' = default order

  document.getElementById('mReviewsList').innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-top">
        <div class="reviewer-info">
          <div class="reviewer-avatar">${r.name.charAt(0)}</div>
          <div>
            <div class="reviewer-name">${r.name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <span class="stars-visual" style="font-size:0.8rem">${renderStarsVisual(r.rating)}</span>
              ${r.verified ? '<span class="verified-tag">✓ Verified Buyer</span>' : ''}
            </div>
          </div>
        </div>
        <div class="review-meta"><div class="review-date">${r.date}</div></div>
      </div>
      <p class="review-text">${r.text}</p>
    </div>
  `).join('');
}

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  currentModalProduct = null;
}

/* ──────────────────────────────────────────
   10. RECOMMENDATIONS
────────────────────────────────────────── */
function buildRecommendations(p) {
  const related    = products.filter(pr => pr.category === p.category && pr.id !== p.id).slice(0, 4);
  const alsoBought = products.filter(pr => pr.id !== p.id && !related.includes(pr)).sort(() => Math.random() - 0.5).slice(0, 4);

  const recoSection = document.getElementById('recoSection');
  const relatedGrid  = document.getElementById('relatedGrid');
  const alsoGrid     = document.getElementById('alsoBoughtGrid');

  if (related.length === 0 && alsoBought.length === 0) { recoSection.style.display = 'none'; return; }
  recoSection.style.display = 'block';

  const miniCard = pr => {
    const ci = activeColorPerProduct[pr.id] || 0;
    return `
    <div class="product-card" data-id="${pr.id}" onclick="openModal(${pr.id})">
      <div class="card-img-area" style="cursor:pointer">
        <img src="${pr.colors[ci].images[0]}" alt="${pr.name}" loading="lazy">
        ${pr.badge ? `<span class="card-badge ${pr.badgeClass}">${pr.badge}</span>` : ''}
        <div class="card-quick-view">View Details</div>
      </div>
      <div class="card-body">
        <span class="card-cat">${pr.category}</span>
        <h3 class="card-name">${pr.name}</h3>
        <div class="card-stars">
          <span class="stars-visual">${renderStarsVisual(pr.rating)}</span>
          <span class="rating-val">${pr.rating}</span>
        </div>
        <div class="card-pricing">
          <span class="price-now">₹${fmt(pr.price)}</span>
          <span class="price-was">₹${fmt(pr.originalPrice)}</span>
          <span class="price-off">${pr.discount}% OFF</span>
        </div>
      </div>
    </div>`;
  };

  relatedGrid.innerHTML = related.map(miniCard).join('');
  alsoGrid.innerHTML    = alsoBought.map(miniCard).join('');
  setTimeout(() => recoSection.scrollIntoView({ behavior: 'smooth', block: 'start' }), 400);
}

/* ──────────────────────────────────────────
   11. WISHLIST
────────────────────────────────────────── */
function toggleWishlist(productId, event) {
  event.stopPropagation();
  const idx = wishlist.indexOf(productId);
  const btn = event.currentTarget;
  if (idx === -1) {
    wishlist.push(productId);
    btn.innerHTML = '❤️'; btn.classList.add('active');
    toast(`Added to wishlist ❤️`);
  } else {
    wishlist.splice(idx, 1);
    btn.innerHTML = '🤍'; btn.classList.remove('active');
    toast(`Removed from wishlist`);
  }
  localStorage.setItem('cWishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

function openWishlist()  { document.getElementById('wishlistSidebar').classList.add('open'); document.getElementById('wishlistOverlay').classList.add('open'); }
function closeWishlist() { document.getElementById('wishlistSidebar').classList.remove('open'); document.getElementById('wishlistOverlay').classList.remove('open'); }

function updateWishlistUI() {
  const badge = document.getElementById('wishlistBadge');
  badge.textContent = wishlist.length;
  badge.style.display = wishlist.length ? 'flex' : 'none';

  const empty     = document.getElementById('wishlistEmpty');
  const itemsDiv  = document.getElementById('wishlistItems');

  if (wishlist.length === 0) { empty.style.display='flex'; itemsDiv.innerHTML=''; return; }
  empty.style.display = 'none';

  itemsDiv.innerHTML = wishlist.map(id => {
    const p  = products.find(pr => pr.id === id);
    if (!p) return '';
    const ci = activeColorPerProduct[id] || 0;
    return `
    <div class="wishlist-card">
      <img src="${p.colors[ci].images[0]}" alt="${p.name}">
      <div class="wishlist-card-info">
        <div class="wishlist-card-name">${p.name}</div>
        <div class="wishlist-card-price">₹${fmt(p.price)}</div>
      </div>
      <button class="wishlist-add-cart" onclick="addToCart(${id});toast('Added to cart!')">Add</button>
      <button class="wishlist-remove" onclick="removeWishlistItem(${id})" title="Remove">🗑️</button>
    </div>`;
  }).join('');
}

function removeWishlistItem(id) {
  wishlist = wishlist.filter(i => i !== id);
  localStorage.setItem('cWishlist', JSON.stringify(wishlist));
  updateWishlistUI();
  renderProducts(); // refresh heart icons
  toast('Removed from wishlist');
}

/* ──────────────────────────────────────────
   12. CART
────────────────────────────────────────── */
function addToCart(productId) {
  const p  = products.find(pr => pr.id === productId);
  if (!p || !p.stock) { toast('Out of stock!', 'error'); return; }
  const ci    = activeColorPerProduct[productId] || 0;
  const color = p.colors[ci].name;
  const img   = p.colors[ci].images[0];
  const key   = `${productId}_${color}`;

  const existing = cart.find(i => i.key === key);
  if (existing) { existing.qty++; }
  else { cart.push({ key, id: productId, name: p.name, price: p.price, img, color, qty: 1 }); }

  saveCart(); updateCartUI();
  toast(`${p.name} added to cart 🛍️`, 'success');
  bumpBadge('cartBadge');
  updateCardBtn(productId, true);
}

function removeCartItem(key) {
  cart = cart.filter(i => i.key !== key);
  saveCart(); updateCartUI();
  toast('Item removed');
}

function updateCartQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeCartItem(key);
  else { saveCart(); updateCartUI(); }
}

function clearCart() {
  if (!cart.length) return;
  if (!confirm('Clear entire cart?')) return;
  cart = []; saveCart(); updateCartUI();
  toast('Cart cleared');
}

function saveCart() { localStorage.setItem('cCart', JSON.stringify(cart)); }

function updateCartUI() {
  const total = cart.reduce((s,i) => s+i.qty, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = total;
  badge.style.display = total ? 'flex' : 'none';

  document.getElementById('cartItemCount-display') && (document.getElementById('cartItemCount-display').textContent = total);

  const emptyEl = document.getElementById('cartEmptyState');
  const listEl  = document.getElementById('cartItemsList');
  const footEl  = document.getElementById('cartSideFoot');

  if (cart.length === 0) {
    emptyEl.style.display = 'flex'; listEl.innerHTML = ''; footEl.style.display = 'none'; return;
  }
  emptyEl.style.display = 'none'; footEl.style.display = 'block';

  listEl.innerHTML = cart.map(i => `
    <div class="cart-item-row">
      <img src="${i.img}" alt="${i.name}" class="cart-item-img">
      <div class="cart-item-details">
        <div class="cart-item-name">${i.name}</div>
        <div class="cart-item-color">Color: ${i.color}</div>
        <div class="cart-item-price">₹${fmt(i.price * i.qty)}</div>
        <div class="cart-qty-wrap">
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="updateCartQty('${i.key}', -1)">−</button>
            <span class="qty-num">${i.qty}</span>
            <button class="qty-btn" onclick="updateCartQty('${i.key}',  1)">+</button>
          </div>
          <button class="cart-remove-btn" onclick="removeCartItem('${i.key}')" title="Remove">🗑️</button>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((s,i) => s + i.price*i.qty, 0);
  document.getElementById('cartSubtotal').textContent  = `₹${fmt(subtotal)}`;
  document.getElementById('cartFinalTotal').textContent = `₹${fmt(subtotal)}`;
}

function updateCardBtn(pid, inCart) {
  const btn = document.getElementById(`bcc${pid}`);
  if (!btn) return;
  if (inCart) { btn.classList.add('added'); btn.innerHTML = `✓ In Cart`; }
  else { btn.classList.remove('added'); btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>Add to Cart`; }
}

function openCart()  { document.getElementById('cartSidebar').classList.add('open'); document.getElementById('cartOverlay').classList.add('open'); document.body.style.overflow='hidden'; }
function closeCart() { document.getElementById('cartSidebar').classList.remove('open'); document.getElementById('cartOverlay').classList.remove('open'); document.body.style.overflow=''; }

/* ──────────────────────────────────────────
   13. CHECKOUT
────────────────────────────────────────── */
function quickBuyNow(productId) {
  const p  = products.find(pr => pr.id === productId);
  if (!p || !p.stock) { toast('Out of stock!', 'error'); return; }
  addToCart(productId);
  openCheckout();
}

function openCheckout() {
  if (cart.length === 0) { toast('Cart is empty!', 'error'); return; }
  renderCheckoutSummary();
  document.getElementById('checkoutModal').classList.add('open');
  document.getElementById('checkoutOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('open');
  document.getElementById('checkoutOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function renderCheckoutSummary() {
  const subtotal = cart.reduce((s,i) => s + i.price*i.qty, 0);
  const discount = Math.round(subtotal * 0.05);
  const total    = subtotal - discount;

  document.getElementById('checkoutItems').innerHTML = cart.map(i => `
    <div class="order-item">
      <img src="${i.img}" alt="${i.name}" class="order-item-img">
      <div class="order-item-info">
        <div class="order-item-name">${i.name} (${i.color})</div>
        <div class="order-item-qty">Qty: ${i.qty}</div>
      </div>
      <div class="order-item-price">₹${fmt(i.price * i.qty)}</div>
    </div>
  `).join('');

  document.getElementById('checkoutTotals').innerHTML = `
    <div class="ot-row"><span>Subtotal</span><span>₹${fmt(subtotal)}</span></div>
    <div class="ot-row"><span>Discount (5%)</span><span class="green-text">−₹${fmt(discount)}</span></div>
    <div class="ot-row"><span>Shipping</span><span class="green-text">FREE</span></div>
    <div class="ot-row total"><span>Total</span><span>₹${fmt(total)}</span></div>
  `;
}

function placeOrder() {
  const name    = document.getElementById('ckName').value.trim();
  const phone   = document.getElementById('ckPhone').value.trim();
  const address = document.getElementById('ckAddress').value.trim();
  const city    = document.getElementById('ckCity').value.trim();
  const pin     = document.getElementById('ckPincode').value.trim();

  if (!name || !phone || !address || !city || !pin) {
    toast('Please fill in all required fields!', 'error'); return;
  }
  if (!/^\d{10}$/.test(phone)) { toast('Please enter a valid 10-digit phone number', 'error'); return; }
  if (!/^\d{6}$/.test(pin))    { toast('Please enter a valid 6-digit pincode', 'error'); return; }

  const total  = cart.reduce((s,i) => s+i.price*i.qty, 0);
  const orderId = 'CHR' + Date.now().toString().slice(-8).toUpperCase();
  const method  = document.querySelector('.payment-opt.active input').value.toUpperCase();

  closeCheckout();

  document.getElementById('successMsg').textContent =
    `Payment via ${method} confirmed. Your watches will be delivered to ${city} within 5-7 business days.`;
  document.getElementById('successOrderId').textContent = `Order ID: ${orderId}  |  Amount: ₹${fmt(total)}`;

  document.getElementById('successPopup').classList.add('open');
  document.getElementById('successOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';

  cart = []; saveCart(); updateCartUI();
}

function closeSuccess() {
  document.getElementById('successPopup').classList.remove('open');
  document.getElementById('successOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ──────────────────────────────────────────
   14. HELPER FUNCTIONS
────────────────────────────────────────── */
function scrollToProducts() {
  document.getElementById('shopSection').scrollIntoView({ behavior: 'smooth' });
}

function hardReset() {
  filters = { price:'all', rating:0, colors:[], categories:[] };
  sortBy  = 'default';
  searchQ = '';

  document.getElementById('searchInput').value = '';
  document.getElementById('searchClearBtn').style.display = 'none';
  document.querySelectorAll('input[name="price"]').forEach((r,i) => r.checked = i===0);
  document.querySelectorAll('input[name="rating"]').forEach((r,i) => r.checked = i===0);
  document.querySelectorAll('.cat-filter').forEach(c => c.checked = false);
  document.querySelectorAll('.color-filter-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('sortSelect').value = 'default';
  renderProducts();
  toast('All filters cleared');
}

// Render stars string (filled/empty)
function renderStarsVisual(rating) {
  const filled = Math.floor(rating);
  const half   = rating % 1 >= 0.5;
  let   stars  = '';
  for (let i=0; i<5; i++) {
    if      (i < filled)                 stars += '★';
    else if (i === filled && half)       stars += '★';
    else                                 stars += '☆';
  }
  return stars;
}

// Format number as INR
function fmt(n) { return Number(n).toLocaleString('en-IN'); }

// Bump badge animation
function bumpBadge(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 400);
}

/* ──────────────────────────────────────────
   15. TOAST NOTIFICATION
────────────────────────────────────────── */
function toast(msg, type = 'default') {
  const container = document.getElementById('toastContainer');
  const el        = document.createElement('div');
  el.className    = `toast-item ${type}`;

  const icons = { success:'✅', error:'❌', default:'🔔' };
  el.innerHTML = `${icons[type] || icons.default} ${msg}`;
  container.appendChild(el);

  setTimeout(() => {
    el.classList.add('fade-out');
    setTimeout(() => el.remove(), 350);
  }, 2800);
}