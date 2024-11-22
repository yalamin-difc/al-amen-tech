
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const News = () => {
  const newsItems = [
    {
      title: "Company Achieves Major Milestone",
      date: "July 1, 2024",
      summary: "GreenGeoAI Solutions has been recognized as a leading provider in GeoAI and EUDR compliance.",
      link: "#",
    },
    {
      title: "New AI-Based Risk Assessment Tool Launched",
      date: "June 15, 2024",
      summary: "Our latest AI tool provides enhanced risk assessment capabilities for deforestation monitoring.",
      link: "#",
    },
  ];

  return (
    <Container className="py-5">
      <h1>News & Updates</h1>
      <Row className="mt-4">
        {newsItems.map((item, index) => (
          <Col md={6} key={index}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
                <Card.Text>
                  {item.summary}
                </Card.Text>
                <Button variant="outline-primary" href={item.link}>Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;

