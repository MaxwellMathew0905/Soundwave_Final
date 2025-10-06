// src/data/InstrumentsData.js
const instruments = [
  {
    id: 1,
    name: "Sitar",
    price: "$499",
    description: "Warm tone, perfect for beginners and professionals alike.",
    image: "/sitar.jpg",
    models: [
      {
        id: "s1",
        name: "Sitar Classic",
        price: "$499",
        image: "/sitar.jpg",
        demo: "https://www.youtube.com/watch?v=xxxx"
      },
      {
        id: "s2",
        name: "Sitar Deluxe",
        price: "$699",
        image: "/sitar.jpg",
        demo: "https://www.youtube.com/watch?v=xxxx"
      },
      {
        id: "s3",
        name: "Sitar Pro",
        price: "$899",
        image: "/sitar.jpg",
        demo: "https://www.youtube.com/watch?v=xxxx"
      }
    ]
  },
  {
    id: 2,
    name: "Harmonium",
    price: "$799",
    description: "High-quality harmonium with rich tonal range.",
    image: "/harmonium.jpg",
    models: [
      {
        id: "h1",
        name: "Harmonium Standard",
        price: "$799",
        image: "/harmonium.jpg",
        demo: "https://www.youtube.com/watch?v=xxxx"
      },
      {
        id: "h2",
        name: "Harmonium Concert",
        price: "$999",
        image: "/harmonium.jpg",
        demo: "https://www.youtube.com/watch?v=xxxx"
      }
    ]
  },
  {
    id: 3,
    name: "Tabla",
    price: "$299",
    description: "Traditional Indian percussion instrument with rich sound.",
    image: "/tabla1.jpg",
    models: [
      {
        id: "t1",
        name: "Tabla Beginner",
        price: "$299",
        image: "/tabla1.jpg",
        demo: "https://www.youtube.com/watch?v=xxxx"
      },
      {
        id: "t2",
        name: "Tabla Professional",
        price: "$499",
        image: "/tabla1.jpg",
        demo: "https://www.youtube.com/watch?v=xxxx"
      }
    ]
  },
  {
    id: 4,
    name: "Shenai",
    price: "$199",
    description: "Handcrafted wooden shenai with soothing tones.",
    image: "/shenai.jpg",
    models: [
      {
        id: "sh1",
        name: "Shenai Classic",
        price: "$199",
        image: "/shenai.jpg",
        demo: "https://www.youtube.com/watch?v=xxxx"
      },
      {
        id: "sh2",
        name: "Shenai Premium",
        price: "$299",
        image: "/shenai.jpg",
        demo: "https://www.youtube.com/watch?v=xxxx"
      }
    ]
  },
  {
    id: 5,
    name: "Santoor",
    price: "$199",
    description: "Handcrafted wooden santoor with soothing tones.",
    image: "/santoor.jpg",
    models: [
      {
        id: "sa1",
        name: "Santoor Student",
        price: "$199",
        image: "/santoor.jpg",
        demo: "https://www.youtube.com/watch?v=xxxx"
      },
      {
        id: "sa2",
        name: "Santoor Concert",
        price: "$399",
        image: "/santoor.jpg",
        demo: "https://www.youtube.com/watch?v=xxxx"
      }
    ]
  },
  {
    id: 6,
    name: "Flute",
    price: "$199",
    description: "Handcrafted wooden flute with soothing tones.",
    image: "/flute.jpg",
    models: [
      {
        id: "f1",
        name: "Flute Bamboo",
        price: "$199",
        image: "/flute.jpg",
        demo: "https://www.youtube.com/watch?v=xxxx"
      },
      {
        id: "f2",
        name: "Flute Concert",
        price: "$299",
        image: "/flute.jpg",
        demo: "https://www.youtube.com/watch?v=xxxx"
      }
    ]
  }
];

export default instruments;