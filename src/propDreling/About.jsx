import React, { useState } from 'react';

const About = ({ user={}, onCityChange }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`City: ${city}`);
    onCityChange(city); // Send to parent
    setCity('');
  };

  return (
    <div>
      <h2>About Us</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default About;
