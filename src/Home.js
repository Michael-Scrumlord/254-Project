// Home.js

import React from 'react';
import './Home.css';

const Home = () => {
  const astronomers = [
    { name: 'Planets', specialization: 'A simple view of the planets in our solar system.' },
    { name: 'Rovers', specialization: 'Man-made Technology used to explore our galaxy and space.' },
    { name: 'Asteroids', specialization: 'A variation of documented asteroids.' },
  ];

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Our Astronomy Hub</h1>

      <section className="astronomers">
        <h2>Explore Our Website</h2>
        {astronomers.map((astronomer, index) => (
          <div key={index} className="home-card">
            <h3 className="home-name">{astronomer.name}</h3>
            <p className="home-detail">{astronomer.specialization}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
