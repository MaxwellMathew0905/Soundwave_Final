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
        image: "/s1.jpg",
        demo: "https://youtu.be/zVqvd6mhat8?si=XIS9dLmqTAYZltbn"
      },
      {
        id: "s2",
        name: "Sitar Deluxe",
        price: "$699",
        image: "/s2.jpg",
      },
      {
        id: "s3",
        name: "Sitar Pro",
        price: "$899",
        image: "/s3.jpg",
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
        image: "/h2.jpg",
        demo: "https://youtu.be/5yrKO0uPJjA?si=wl9N8eW781QGZg5_"
      },
      {
        id: "h2",
        name: "Harmonium Concert",
        price: "$999",
        image: "/h1.jpg",
      },
      {
        id: "h3",
        name: "Harmonium Pro",
        price: "$999",
        image: "/h3.jpg",
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
        image: "/t1.jpg",
        demo: "https://youtu.be/asx3wwdO178?si=U0N7nYSqBtxCLZur"
      },
      {
        id: "t2",
        name: "Tabla Professional",
        price: "$499",
        image: "/t2.jpg",
      },
      {
        id: "t3",
        name: "Tabla Supreme",
        price: "$499",
        image: "/t3.jpg",
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
        image: "/sh1.jpg",
        demo: "https://youtu.be/MWXH4bDkXGQ?si=3TtGdz2XMwPH3Jvp"
      },
      {
        id: "sh2",
        name: "Shenai Premium",
        price: "$299",
        image: "/sh2.jpg",
      },
      {
        id: "sh3",
        name: "Shenai Gold",
        price: "$299",
        image: "/sh3.jpg",
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
        image: "/x1.jpg",
        demo: "https://youtu.be/XNsPEWepUWo?si=L7hD21M0rtLbE5fJ"
      },
      {
        id: "sa2",
        name: "Santoor Concert",
        price: "$399",
        image: "/x2.jpg",
      },
      {
        id: "sa3",
        name: "Santoor Student",
        price: "$399",
        image: "/x3.jpg",
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
        demo: "https://youtu.be/bYPmSHjPLBA?si=vaLv5mE6_nVmokBg"
      },
      {
        id: "f2",
        name: "Flute Concert",
        price: "$299",
        image: "/flute.jpg",
      },
      {
        id: "f3",
        name: "Flute Classic",
        price: "$299",
        image: "/flute.jpg",
      }
    ]
  }
];

export default instruments;