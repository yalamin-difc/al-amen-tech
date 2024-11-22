
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Resources = () => {
  return (
    <Container className="py-5">
      <h1>Resources</h1>
      <Row className="mt-4">
        <Col md={6} lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Blog</Card.Title>
              <Card.Text>
                Stay updated with industry trends, company news, and expert insights.
              </Card.Text>
              <Button variant="outline-primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Whitepapers & Case Studies</Card.Title>
              <Card.Text>
                Download in-depth information and examples of successful projects.
              </Card.Text>
              <Button variant="outline-primary">Download</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>FAQs</Card.Title>
              <Card.Text>
                Find answers to common questions to better understand our services.
              </Card.Text>
              <Button variant="outline-primary">View FAQs</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Resources;

