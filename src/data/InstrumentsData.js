// src/data/InstrumentsData.js
const instruments = [
  {
    id: 1,
    name: "Sitar",
    // description: "...", // REMOVED
    image: "/sitar.jpg",
    models: [
      {
        id: "s1",
        name: "Sitar Classic",
        price: "₹1199",
        image: "/s1.jpg",
        description: "Balanced tone, great for beginners.",
        demo: "https://youtu.be/zVqvd6mhat8?si=XIS9dLmqTAYZltbn",
        modelNumber: "SIT-CLS-001",
        type: "String Instrument",
        material: "Teak Wood & Gourd",
        strings: "7 Main + 13 Sympathetic",
        weight: "3.5 kg",
        length: "48 inches",
        finish: "Natural Polish",
        includes: "Carrying case, extra strings, mizrab (plectrum)"
      },
      {
        id: "s2",
        name: "Sitar Deluxe",
        price: "₹1699",
        image: "/s2.jpg",
        description: "Seasoned wood for enhanced resonance, premium glossy finish.",
        modelNumber: "SIT-DLX-002",
        type: "String Instrument",
        material: "Seasoned Teak Wood & Gourd",
        strings: "7 Main + 13 Sympathetic",
        weight: "3.8 kg",
        length: "48 inches",
        finish: "Premium Glossy Polish",
        includes: "Premium carrying case, extra strings, 2 mizrabs, tuning tool"
      },
      {
        id: "s3",
        name: "Sitar Pro",
        price: "₹2899",
        image: "/s3.jpg",
        description: "Superior materials and craftsmanship for professional sound quality.",
        modelNumber: "SIT-PRO-003",
        type: "String Instrument",
        material: "Premium Teak Wood & Tumba Gourd",
        strings: "7 Main + 13 Sympathetic",
        weight: "4.0 kg",
        length: "50 inches",
        finish: "Handcrafted Premium Finish",
        includes: "Deluxe case, 2 sets extra strings, 3 mizrabs, tuning tool, cleaning cloth"
      }
    ]
  },
  {
    id: 2,
    name: "Harmonium",
    // description: "...", // REMOVED
    image: "/harmonium.jpg",
    models: [
      {
        id: "h1",
        name: "Harmonium Standard",
        price: "₹1099",
        image: "/h2.jpg",
        description: "Reliable single-reed harmonium, ideal for learning.",
        demo: "https://youtu.be/5yrKO0uPJjA?si=wl9N8eW781QGZg5_",
        modelNumber: "HAR-STD-001",
        type: "Reed Instrument",
        material: "Teak Wood",
        keys: "39 Keys (3.25 Octaves)",
        reeds: "Single Reed",
        weight: "8 kg",
        dimensions: "24 x 14 x 10 inches",
        includes: "Dust cover, instruction manual"
      },
      {
        id: "h2",
        name: "Harmonium Concert",
        price: "₹2999",
        image: "/h1.jpg",
        description: "Double reeds for richer sound, premium Sheesham wood.",
        modelNumber: "HAR-CON-002",
        type: "Reed Instrument",
        material: "Premium Sheesham Wood",
        keys: "42 Keys (3.5 Octaves)",
        reeds: "Double Reed",
        weight: "10 kg",
        dimensions: "26 x 15 x 11 inches",
        includes: "Premium cover, tuning hammer, instruction manual"
      },
      {
        id: "h3",
        name: "Harmonium Pro",
        price: "₹8299",
        image: "/h3.jpg",
        description: "Triple reeds, Rosewood body for exceptional volume and depth.",
        modelNumber: "HAR-PRO-003",
        type: "Reed Instrument",
        material: "Rosewood with Brass Fittings",
        keys: "42 Keys (3.5 Octaves)",
        reeds: "Triple Reed",
        weight: "12 kg",
        dimensions: "28 x 16 x 12 inches",
        includes: "Deluxe carrying case, tuning kit, maintenance guide, polish cloth"
      }
    ]
  },
  {
    id: 3,
    name: "Tabla",
    // description: "...", // REMOVED
    image: "/tabla1.jpg",
    models: [
      {
        id: "t1",
        name: "Tabla Beginner",
        price: "₹1299",
        image: "/t1.jpg",
        description: "Durable Sheesham wood set for learning tabla rhythms.",
        demo: "https://youtu.be/asx3wwdO178?si=U0N7nYSqBtxCLZur",
        modelNumber: "TAB-BEG-001",
        type: "Percussion Instrument",
        material: "Sheesham Wood",
        drumhead: "Goat Skin",
        weight: "3 kg (Set)",
        dimensions: "Dayan: 6 inches, Bayan: 9 inches",
        tuning: "Standard Tuning",
        includes: "Cushions (2), hammer, cover, tuning paste"
      },
      {
        id: "t2",
        name: "Tabla Professional",
        price: "₹4499",
        image: "/t2.jpg",
        description: "Premium materials and concert tuning for serious players.",
        modelNumber: "TAB-PRO-002",
        type: "Percussion Instrument",
        material: "Premium Sheesham Wood",
        drumhead: "Premium Goat Skin",
        weight: "3.5 kg (Set)",
        dimensions: "Dayan: 6 inches, Bayan: 9.5 inches",
        tuning: "Concert Tuning",
        includes: "Premium cushions, hammer, hard case, tuning paste, extra straps"
      },
      {
        id: "t3",
        name: "Tabla Supreme",
        price: "₹7099",
        image: "/t3.jpg",
        description: "Rosewood Dayan, Brass Bayan for unmatched tonal quality.",
        modelNumber: "TAB-SUP-003",
        type: "Percussion Instrument",
        material: "Rosewood with Brass Bayan",
        drumhead: "Hand-selected Premium Goat Skin",
        weight: "4 kg (Set)",
        dimensions: "Dayan: 6.5 inches, Bayan: 10 inches",
        tuning: "Professional Concert Tuning",
        includes: "Luxury cushions, professional hammer, flight case, tuning kit, maintenance guide"
      }
    ]
  },
  {
    id: 4,
    name: "Shenai",
    // description: "...", // REMOVED
    image: "/shenai.jpg",
    models: [
      {
        id: "sh1",
        name: "Shenai Classic",
        price: "₹1199",
        image: "/sh1.jpg",
        description: "Sheesham wood Shenai, perfect for exploring its unique sound.",
        demo: "https://youtu.be/MWXH4bDkXGQ?si=3TtGdz2XMwPH3Jvp",
        modelNumber: "SHE-CLS-001",
        type: "Wind Instrument",
        material: "Sheesham Wood",
        keys: "No Keys",
        length: "12 inches",
        weight: "150 grams",
        finish: "Natural Wood Finish",
        includes: "Protective case, cleaning rod, extra reeds (2)"
      },
      {
        id: "sh2",
        name: "Shenai Premium",
        price: "₹2199",
        image: "/sh2.jpg",
        description: "Rich Rosewood with brass accents for improved tonal clarity.",
        modelNumber: "SHE-PRE-002",
        type: "Wind Instrument",
        material: "Rosewood with Brass Accents",
        keys: "No Keys",
        length: "13 inches",
        weight: "180 grams",
        finish: "Polished Wood Finish",
        includes: "Premium case, cleaning kit, extra reeds (4), maintenance guide"
      },
      {
        id: "sh3",
        name: "Shenai Gold",
        price: "₹4199",
        image: "/sh3.jpg",
        description: "Luxurious Rosewood with gold-plated fittings for superior sound.",
        modelNumber: "SHE-GLD-003",
        type: "Wind Instrument",
        material: "Premium Rosewood with Gold Plated Fittings",
        keys: "No Keys",
        length: "14 inches",
        weight: "200 grams",
        finish: "Hand-polished Premium Finish",
        includes: "Luxury case, professional cleaning kit, extra reeds (6), tuning guide, polish cloth"
      }
    ]
  },
  {
    id: 5,
    name: "Santoor",
    // description: "...", // REMOVED
    image: "/santoor.jpg",
    models: [
      {
        id: "sa1",
        name: "Santoor Student",
        price: "₹1199",
        image: "/x1.jpg",
        description: "Accessible introduction to the Santoor's beautiful sound.",
        demo: "https://youtu.be/XNsPEWepUWo?si=L7hD21M0rtLbE5fJ",
        modelNumber: "SAN-STU-001",
        type: "String Instrument",
        material: "Walnut Wood",
        strings: "100 Strings (25 courses)",
        weight: "4 kg",
        dimensions: "24 x 18 x 3 inches",
        finish: "Natural Finish",
        includes: "2 pairs of mallets, tuning key, soft case"
      },
      {
        id: "sa2",
        name: "Santoor Concert",
        price: "₹3099",
        image: "/x2.jpg",
        description: "Premium Walnut wood for enhanced resonance and stage presence.",
        modelNumber: "SAN-CON-002",
        type: "String Instrument",
        material: "Premium Walnut Wood",
        strings: "100 Strings (25 courses)",
        weight: "4.5 kg",
        dimensions: "26 x 20 x 3 inches",
        finish: "Premium Gloss Finish",
        includes: "3 pairs of mallets, tuning key, hard case, extra strings"
      },
      {
        id: "sa3",
        name: "Santoor Professional",
        price: "₹5199",
        image: "/x3.jpg",
        description: "Aged Walnut, Rosewood bridges for superior sustain and complexity.",
        modelNumber: "SAN-PRO-003",
        type: "String Instrument",
        material: "Aged Walnut Wood with Rosewood Bridge",
        strings: "100 Strings (25 courses)",
        weight: "5 kg",
        dimensions: "28 x 22 x 3.5 inches",
        finish: "Handcrafted Premium Finish",
        includes: "4 pairs professional mallets, tuning kit, flight case, 2 sets extra strings, maintenance guide"
      }
    ]
  },
  {
    id: 6,
    name: "Flute",
    // description: "...", // REMOVED
    image: "/flute.jpg",
    models: [
      {
        id: "f1",
        name: "Flute Bamboo",
        price: "₹1199",
        image: "/flute.jpg",
        description: "Natural bamboo flute in C, ideal for beginners.",
        demo: "https://youtu.be/bYPmSHjPLBA?si=vaLv5mE6_nVmokBg",
        modelNumber: "FLU-BAM-001",
        type: "Wind Instrument",
        material: "Natural Bamboo",
        key: "Key of C",
        holes: "6 Holes",
        length: "19 inches",
        weight: "80 grams",
        includes: "Cloth bag, cleaning rod"
      },
      {
        id: "f2",
        name: "Flute Concert",
        price: "₹2199",
        image: "/flute.jpg",
        description: "Set of three premium flutes (C, D, E) for varied performances.",
        modelNumber: "FLU-CON-002",
        type: "Wind Instrument",
        material: "Premium Bamboo with Cork Joints",
        key: "Key of C, D, E (Set of 3)",
        holes: "6 Holes",
        length: "19-22 inches",
        weight: "100 grams each",
        includes: "Premium case, cleaning kit, cork grease"
      },
      {
        id: "f3",
        name: "Flute Classic",
        price: "₹5199",
        image: "/flute.jpg",
        description: "Complete professional set of six Bansuris (C to G).",
        modelNumber: "FLU-CLS-003",
        type: "Wind Instrument",
        material: "Professional Bamboo with Silver Rings",
        key: "Full Set (C, C#, D, E, F, G)",
        holes: "6 Holes",
        length: "16-24 inches",
        weight: "120 grams each",
        includes: "Luxury case set, professional cleaning kit, maintenance guide, extra cork"
      }
    ]
  }
];

export default instruments;