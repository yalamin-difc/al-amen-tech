
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/solutions">Solutions</a></li>
              <li><a href="/industries">Industries</a></li>
              <li><a href="/Usecases">Usecases</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Information</h5>
            <p>Email: ali@al-amentech.io</p>
            <p>Phone: +971543282815</p>
          </Col>
          <Col md={3}>
            <h5>Stay Updated</h5>
            <Form>
              <Form.Group controlId="formNewsletter">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <a href="https://linkedin.com" className="me-2">LinkedIn</a>
            <a href="https://twitter.com">Twitter</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
