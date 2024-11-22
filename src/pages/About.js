
import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <div 
      className="about"
      style={{
        background: 'linear-gradient(to bottom, #4568dc, #b06ab3)', // Gradient background
        minHeight: '100vh', // Ensures the background covers the full height of the viewport
        color: '#fff', // Text color for better visibility against the gradient
      }}
    >
      <Container className="py-5">
        <h1>About Us</h1>
        <section className="mission">
          <h2>Our Mission</h2>
          <p>GreenGeoAI Solutions is a pioneering technology company specializing in GeoAI and EUDR compliance.</p>
        </section>
        <section className="team">
          <h2>Our Team</h2>
          <p>Meet our leadership team, consisting of industry experts with extensive experience in AI and spatial data.</p>
        </section>
      </Container>
    </div>
  );
}

export default About;