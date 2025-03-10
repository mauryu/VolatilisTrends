import React, { useState, useEffect } from "react";
// ...existing code...
import "./Home.css";

function Home() {
  const [counter, setCounter] = useState(0);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const maxCount = 100;
  const incrementSpeed = 50; // milissegundos entre cada incremento

  useEffect(() => {
    if (counter < maxCount) {
      const timer = setTimeout(() => {
        setCounter(prev => prev + 1);
      }, incrementSpeed);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setShowFinalMessage(true);
      }, 500);
    }
  }, [counter]);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              {/* ...existing code... */}
            </Col>
            <Col md={5} className="home-img-col">
              <div className="counter-container">
                {!showFinalMessage ? (
                  <div className="counter-wrapper">
                    <div className="counter-number">{counter}%</div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${counter}%` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <div className="final-message">
                    <span>A HORA É AGORA</span>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
