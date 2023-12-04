// Home.js

import React from 'react';
import './Home.css';

const Home = () => {
  const astrologers = [
    { name: 'Planets', specialization: 'A simple view of the planets in our solar system.' },
    { name: 'Rovers', specialization: 'Man-made Technology used to explore our galaxy and space.' },
    { name: 'Asteroids', specialization: 'A variation of documented asteroids.' },
  ];

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Our Astrology Hub</h1>

      <section className="astrologers">
        <h2>Explore Our Website</h2>
        {astrologers.map((astrologer, index) => (
          <div key={index} className="home-card">
            <h3 className="home-name">{astrologer.name}</h3>
            <p className="home-detail">{astrologer.specialization}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
