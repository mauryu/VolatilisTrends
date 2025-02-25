import React from "react";
import Card from "react-bootstrap/Card";
import { FaArrowRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, eu sou <span className="purple">Mauro Moraes</span> 👋
            <br />
            <span style={{ fontSize: "0.9em" }}>
              Um apaixonado por transformar ideias em <span className="purple">soluções</span> que fazem a diferença.
            </span>
          </p>

          <h6 className="mt-4 mb-3">Como posso ajudar você:</h6>
          <ul>
            <li className="about-activity">
              <FaArrowRight /> Criar <span className="purple">sites que vendem</span>, não apenas aparecem
            </li>
            <li className="about-activity">
              <FaArrowRight /> Desenvolver <span className="purple">estratégias digitais</span> que geram resultados reais
            </li>
            <li className="about-activity">
              <FaArrowRight /> Transformar sua presença online em uma <span className="purple">máquina de oportunidades</span>
            </li>
          </ul>

          <h6 className="mt-4 mb-3">Um pouco sobre mim:</h6>
          <ul>
            <li className="about-activity">
              <FaArrowRight /> <span className="purple">Nômade digital</span> desde 2021, conectando culturas e ideias
            </li>
            <li className="about-activity">
              <FaArrowRight /> Entusiasta de <span className="purple">novas tecnologias</span> e suas aplicações práticas
            </li>
            <li className="about-activity">
              <FaArrowRight /> Praticante de <span className="purple">judô</span> e <span className="purple">futebol americano</span> - a disciplina do esporte na vida e no trabalho
            </li>
          </ul>

          <p className="mt-4 signature-quote" style={{ color: "rgb(155 126 172)" }}>
            "Acredito que a melhor <span className="purple">tecnologia</span> é aquela que resolve problemas reais e melhora a vida das pessoas."
          </p>

          <p style={{ textAlign: "justify", marginTop: "20px" }}>
            Vamos conversar sobre como posso ajudar a levar seu <span className="purple">projeto</span> para o próximo nível?
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;