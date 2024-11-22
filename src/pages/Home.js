import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div 
      className="home"
      style={{
        background: 'linear-gradient(to bottom, #4568dc, #b06ab3)', // Apply gradient to the entire page
        minHeight: '100vh', // Ensures the background covers the full height of the viewport
        color: '#fff', // Ensure text color stands out against the gradient
      }}
    >
      {/* Hero Section */}
      <Container className="hero py-5 text-center">
        <h1>AI-Amen Technology</h1>
        <p>Empowering a Sustainable Future through Advanced AI Solutions</p>
        <p>Innovative technology for a deforestation-free future.</p>
        <Button as={Link} to="/solutions" variant="primary" size="lg">Learn More</Button>
      </Container>

      {/* Our Mission Section */}
      <Container className="mission py-5 text-center">
        <h2>Our Mission</h2>
        <p>Creating a Safer World</p>
        <p>
          AI-Amen Technology is dedicated to enhancing sustainability, public safety, and emergency response
          through advanced technologies. We empower businesses in the UAE by delivering cutting-edge AI and Blockchain solutions.
        </p>
      </Container>

      {/* Services Overview */}
      <Container className="services py-5">
        <h2 className="text-center">Services Overview</h2>
        <Row className="text-center">
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Predictive Firefighting</Card.Title>
                <Card.Text>Leverage AI to predict and prevent fire incidents before they occur.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Emergency Management</Card.Title>
                <Card.Text>Enhance responsiveness and coordination during emergencies.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Marine and Coastal Protection</Card.Title>
                <Card.Text>Utilize GeoAI and Computer Vision for monitoring and safeguarding marine environments.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Technology Highlights */}
      <Container className="technology py-5 text-center">
        <h2>Technology Highlights</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Advanced AI Tools</Card.Title>
                <Card.Text>Harness the power of AI to optimize emergency response.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>GeoAI-Computer Vision</Card.Title>
                <Card.Text>Integrating advanced analytics to visualize critical data.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Blockchain Integration</Card.Title>
                <Card.Text>Ensuring data integrity and transparency in emergency management.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Customer Success Stories */}
      <Container className="success-stories py-5 text-center">
        <h2>Customer Success Stories</h2>
        <p>🌟 Hear from our partners about how AI-Amen Technology transformed their approach to safety and sustainability.</p>
      </Container>

      {/* Get In Touch */}
      <Container className="get-in-touch py-5 text-center">
        <h2>Get In Touch</h2>
        <p>Ready to Empower Your Organization?</p>
        <p>Contact us to learn how we can help you implement advanced AI solutions.</p>
        <Button as={Link} to="/contact" variant="primary">Contact Us</Button>
      </Container>
    </div>
  );
}

export default Home;