import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const socialLinks = [
    { icon: AiFillGithub, url: "https://github.com/mauryu" },
    { icon: AiOutlineTwitter, url: "https://twitter.com/mauryu" },
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/mauryu/" },
    { icon: AiFillInstagram, url: "https://www.instagram.com/somauro_" }
  ];

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed by Mauro Moraes</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {new Date().getFullYear()} Volatilis Trends</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {socialLinks.map(({icon: Icon, url}) => (
              <li key={url} className="social-icons">
                <a href={url} style={{color: "white"}} target="_blank" rel="noopener noreferrer">
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
