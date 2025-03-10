import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import Home2 from "./Home2";
import BackgroundParticles from "./BackgroundParticles";
import "./Home.css";

function Home() {
  const [counter, setCounter] = useState(0);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  const maxCount = 100;
  const incrementSpeed = 15; // Changed from 50 to 25
  const homeTwoRef = useRef(null);

  useEffect(() => {
    if (counter < maxCount) {
      const timer = setTimeout(() => setCounter(prev => prev + 1), incrementSpeed);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setShowFinalMessage(true);
        setTimeout(() => setShowArrows(true), 150);
        setTimeout(() => {
          if (homeTwoRef.current) {
            homeTwoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 2500);
      }, 500);
    }
  }, [counter]);

  return (
    <>
      <section className="home-main">
        <BackgroundParticles />
        <Particle />
        <Container className="home-container">
          <Row className="align-items-center justify-content-center">
            <Col lg={8} md={10} className="text-center">
              <div className="hero-content">
                <h1 className="welcome-heading">
                  Olá, seja bem-vindo(a)!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                </h1>
                <div className="brand-heading">
                  <h1>Somos a <span className="brand-name">Volatilis Trends</span></h1>
                </div>
                <div className="typing-container">
                  <Type />
                </div>
                <div className="counter-section">
                  {!showFinalMessage ? (
                    <div className="counter-wrapper">
                      <div className="neon-counter">{counter}%</div>
                      <div className="progress-container">
                        <div className="progress-bar-fill" style={{ width: `${counter}%` }} />
                      </div>
                      <div className="loading-text">Carregando o futuro...</div>
                    </div>
                  ) : (
                    <div className="future-reveal">
                      <div className="future-message">
                        <span>O Futuro Chegou</span>
                      </div>
                      <div className="cta-button">
                        <button 
                          className="explore-btn"
                          onClick={() => {
                            document.getElementById('home2').scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }}
                        >
                          Explorar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {showArrows && (
          <div className="scroll-arrows-container">
            <div className="scroll-arrows">
              <div className="arrow arrow-1"></div>
              <div className="arrow arrow-2"></div>
              <div className="arrow arrow-3"></div>
            </div>
          </div>
        )}
      </section>
      <section id="home2" ref={homeTwoRef}>
        <Home2 />
      </section>
    </>
  );
}

export default Home;