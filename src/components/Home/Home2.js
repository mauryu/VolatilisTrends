import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container>
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            Transforme suas ideias em <span className="purple">realidade</span> com a <span className="purple">Volatilis</span>!
          </h1>
          <p className="home-about-body">
            Somos uma equipe apaixonada por tecnologia e marketing digital, prontos para elevar suas ideias a novos patamares. 🚀
            <br />
            <br />
            Nossas especialidades incluem:
            <i>
              <b className="purple"> Desenvolvimento Web de Ponta, Gestão Estratégica de Redes Sociais e Configuração de Servidores de Alta Performance.</b>
            </i>
            <br />
            <br />
            Nosso objetivo é fornecer soluções que impulsionam seu crescimento digital, conectam você com seu público e escalam seus negócios para o próximo nível.
            <br />
            <br />
            Utilizamos as ferramentas mais avançadas do mercado, como:
            <b className="purple"> Inteligências Artificiais, Automações</b> e
            <i>
              <b className="purple">
                {" "}
                Frameworks Modernos
              </b>
            </i>
            &nbsp; como:
            <i>
              <b className="purple"> React.js e Next.js</b>
            </i>
          </p>
        </Col>
        <Col md={4} className="myAvtar">
          <Tilt>
            <img src={myImg} className="img-fluid logo-png" alt="Volatilis Logo" />
          </Tilt>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>Acompanhe Nossa Jornada</h1>
          <p>
            Siga a <span className="purple">Volatilis</span> nas redes sociais para ficar por dentro de nossos projetos inovadores e insights exclusivos.
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/volatilistrends"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/volatilistrends"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="Twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/company/volatilistrends"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/volatilistrends"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Home2;