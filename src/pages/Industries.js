
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Industries = () => {
  return (
    <Container className="py-5">
      <h1>Industries We Serve</h1>
      <Row className="mt-4">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Urban Planning and Smart Cities</Card.Title>
              <Card.Text>
                Optimizing infrastructure and resource management for sustainable urban development.
              </Card.Text>
              <Button variant="outline-primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Agriculture</Card.Title>
              <Card.Text>
                Using AI-driven imagery analysis to monitor crop health, predict yields, and manage resources effectively.
              </Card.Text>
              <Button variant="outline-primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Environmental Monitoring</Card.Title>
              <Card.Text>
                Tracking and analyzing environmental changes to support conservation efforts and climate research.
              </Card.Text>
              <Button variant="outline-primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Security and Surveillance</Card.Title>
              <Card.Text>
                Implementing advanced visual recognition systems to enhance public safety and security operations.
              </Card.Text>
              <Button variant="outline-primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Industries;

