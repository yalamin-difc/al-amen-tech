import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for routing

const Solutions = () => {
  return (
    <Container className="py-5">
      <h1>Our Solutions</h1>
      <Row className="mt-4">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>GeoAI Solutions</Card.Title>
              <Card.Text>
                Utilizing advanced AI to analyze spatial data, provide location intelligence, and process remote sensing images.
              </Card.Text>
              <Link to="/geoai" className="btn btn-outline-primary">Learn More</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>EUDR Compliance</Card.Title>
              <Card.Text>
                Real-time monitoring of supply chains, assessing deforestation risks, and ensuring adherence to EUDR regulations.
              </Card.Text>
              <Link to="/eudr-compliance" className="btn btn-outline-primary">Learn More</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Audit and Certification Services</Card.Title>
              <Card.Text>
                Conducting comprehensive audits to verify compliance and assist in obtaining necessary certifications.
              </Card.Text>
              <Link to="/audit-certification" className="btn btn-outline-primary">Learn More</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Consulting Services</Card.Title>
              <Card.Text>
                Expert guidance in understanding and implementing EUDR regulations, and risk management strategies.
              </Card.Text>
              <Link to="/consulting" className="btn btn-outline-primary">Learn More</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Technology Integration</Card.Title>
              <Card.Text>
                Incorporating geospatial analysis, blockchain for traceability, and advanced data analytics into your operations.
              </Card.Text>
              <Link to="/technology-integration" className="btn btn-outline-primary">Learn More</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Solutions;