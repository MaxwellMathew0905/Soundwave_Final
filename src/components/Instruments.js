import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Tabla',
    slug: 'tabla',
    image: '/tabla.jpg'
  },
  {
    id: 2,
    name: 'Sitar',
    slug: 'sitar',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Harmonium',
    slug: 'harmonium',
    image: 'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Bansuri',
    slug: 'bansuri',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Veena',
    slug: 'veena',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Flute',
    slug: 'flute',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
  },
];

function Instruments({ onSelectCategory = () => {} }) {
  return (
    <div className="instruments-dark-page">
      <div className="instruments-header">
        <h2>Our Instrument Collection</h2>
        <p>
          Discover our handpicked selection of world-class musical instruments. Every piece is chosen for its beauty, sound, and craftsmanship.
        </p>
      </div>
      <div className="instruments-dark-grid">
        {categories.map(category => (
          <div
            key={category.id}
            className="instrument-dark-card"
            onClick={() => onSelectCategory(category.slug)}
          >
            <div className="instrument-dark-image-wrapper">
              <img
                src={category.image}
                alt={category.name}
                className="instrument-dark-image"
                loading="lazy"
              />
              <div className="instrument-dark-title">{category.name}</div>
            </div>
            <button className="instrument-dark-button">View Collection</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instruments;