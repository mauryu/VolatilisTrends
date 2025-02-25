import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/avatar.svg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Seção principal: Apresentação da empresa e de Mauro Moraes */}
        <Row className="align-items-center text-center text-md-start" style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            className="about-img d-flex justify-content-center"
          >
            <img src={laptopImg} alt="Mauro Moraes - Volatilis Trends" className="img-fluid" style={{ maxWidth: "500px", borderRadius: "50%" }} />
          </Col>
          <Col
            md={7}
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="purple-text">Sobre nós</h1>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
              Somos a <strong className="purple">Volatilis Trends</strong>, uma agência digital focada em transformar ideias em <strong className="purple">resultados digitais</strong>. Nossa expertise abrange áreas como <strong className="purple">Web Design</strong>, <strong className="purple">Marketing Digital</strong>, <strong className="purple">Gestão de Redes Sociais</strong> e <strong className="purple">Servidores de Mu Online</strong>. Trabalhamos com paixão para criar soluções inovadoras que impulsionam o crescimento dos nossos clientes.
            </p>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
              Sou <strong className="purple">Mauro Moraes</strong>, fundador e desenvolvedor da Volatilis Trends. Com mais de <strong className="purple">8 anos de experiência</strong> no mercado digital, dedico-me a entregar projetos que combinam <strong className="purple">tecnologia avançada</strong>, design criativo e estratégias eficazes. Minha missão é ajudar empresas a alcançarem seus objetivos online, oferecendo soluções personalizadas que geram <strong className="purple">resultados mensuráveis</strong>.
            </p>
          </Col>
        </Row>

        {/* Seção de tecnologias utilizadas */}
        <h1 className="project-heading">
          Tecnologias <strong className="purple">que dominamos</strong>
        </h1>
        <Techstack />

        {/* Seção de ferramentas principais */}
        <h1 className="project-heading">
          <strong className="purple">Ferramentas essenciais</strong> para o sucesso
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;