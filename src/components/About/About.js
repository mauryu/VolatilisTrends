import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/avatar.svg";
import BackgroundParticles from "../Home/BackgroundParticles";
import Particle from "../Particle";
import "./About.css";

const services = [
  {
    title: "Marketing Digital Estratégico",
    shortDesc: "Campanhas otimizadas para máxima conversão.",
    description: "Google Ads, Facebook Ads e TikTok Ads otimizados por machine learning para aumentar seu ROI com segmentação preditiva."
  },
  {
    title: "Desenvolvimento de Sites Profissionais",
    shortDesc: "Sites rápidos, modernos e otimizados.",
    description: "Plataformas web de alta performance: sites institucionais, e-commerces e sistemas sob medida usando React e WordPress VIP."
  },
  {
    title: "Integrações Personalizadas",
    shortDesc: "Integração de sistemas e APIs complexas.",
    description: "Desenvolvimento de ferramentas corporativas, integração de APIs e implementação de sistemas escaláveis em cloud computing."
  },
  {
    title: "Design & Branding Profissional",
    shortDesc: "Identidade visual poderosa e impactante.",
    description: "Criação de logotipos, branding completo e UX estratégico com base em princípios de neurodesign."
  },
  {
    title: "Gestão de Redes Sociais",
    shortDesc: "Gestão completa de Instagram, LinkedIn e TikTok corporativo com estratégias avançadas de marketing digital.",
    description: "Criação de conteúdo viral e engajamento estratégico."
  },
  {
    title: "Otimização de Sistemas",
    shortDesc: "Análise e tuning de sistemas.",
    description: "Analisamos e otimizamos sistemas para melhorar desempenho, reduzindo custos e aumentando a eficiência."
  },
  {
    title: "Automação de Processos",
    shortDesc: "Automação inteligente para processos repetitivos.",
    description: "Desenvolvemos RPA (Robotic Process Automation) para automatizar tarefas e aumentar a produtividade."
  },
  {
    title: "Servidores de Mu Online",
    shortDesc: "Configuração e manutenção de servidores de Mu Online.",
    description: "Configuração de servidores dedicados para Mu Online, incluindo desenvolvimento de websites para comunidades gamer."
  }
];

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    services: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsVisible((prev) => ({
        ...prev,
        services: window.scrollY > 300,
      }));
    };

    window.addEventListener("scroll", handleScroll);
    
    // Ativar a primeira seção com um pequeno atraso
    setTimeout(() => {
      setIsVisible(prev => ({ ...prev, hero: true }));
    }, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderGlowingText = (text, highlightWords) => {
    const words = text.split(' ');
    return words.map((word, index) => {
      if (highlightWords.includes(word.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))) {
        return <span key={index} className="highlight glow-text">{word} </span>;
      }
      return <span key={index}>{word} </span>;
    });
  };

  return (
    <div className="about-main">
      <BackgroundParticles />
      <Particle />
      
      <Container fluid className="about-section">
        <Row className="hero-section align-items-center py-5">
          <Col lg={6} className="order-lg-2">
            <div className="text-center text-lg-start glass-card">
              <h1 className="display-4 fw-bold mb-4 glitch-effect">
                Transformando <span className="highlight glow-text">ideias</span> em <br />
                <span className="highlight glow-text">resultados digitais</span>
              </h1>
              <div className="about-description">
                <p className="lead">
                  Na <span className="highlight glow-text">Volatilis Trends</span>, criamos soluções digitais inovadoras para destacar sua marca e acelerar o crescimento do seu negócio.
                </p>
                <div className="cta-button mt-4">
                  <button className="explore-btn pulse-effect">
                    Conheça nossos serviços
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="order-lg-1">
            <div className="img-container floating">
              <div className="profile-bg"></div>
              <img src={laptopImg} alt="Volatilis Trends" className="img-fluid profile-img" />
              <div className="orbit-container">
                <div className="orbit orbit-1"></div>
                <div className="orbit orbit-2"></div>
                <div className="orbit orbit-3"></div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Seção de Serviços com Flip Cards */}
        <Row className="my-5 py-5">
          <Col md={12} className="text-center mb-5">
            <div className="section-title-container">
              <h2 className="display-5 fw-bold highlight glow-text">Nossos Serviços</h2>
              <div className="title-underline"></div>
            </div>
          </Col>
          <Col md={12}>
            <div className="services-grid">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flip-card"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: isVisible.services ? 'translateY(0)' : 'translateY(50px)',
                    opacity: isVisible.services ? 1 : 0,
                    transition: `all 0.6s ease-out ${index * 0.1}s`
                  }}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front neon-border">
                      <div className="card-icon">
                        <i className={`fas fa-${getIconForService(service.title)}`}></i>
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.shortDesc}</p>
                    </div>
                    <div className="flip-card-back neon-border">
                      <p>{service.description}</p>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Tecnologias */}
        <Row className="my-5 py-5">
          <Col md={12} className="text-center mb-5">
            <div className="section-title-container">
              <h2 className="display-5 fw-bold highlight glow-text">Tecnologias que dominamos</h2>
              <div className="title-underline"></div>
            </div>
            <p className="tech-subtitle">
              {renderGlowingText("Utilizamos as tecnologias mais avançadas do mercado para entregar soluções de alta performance e qualidade excepcional.", ["avançadas", "performance", "qualidade"])}
            </p>
          </Col>
          <div className="tech-stack-container glass-card">
            <Techstack />
          </div>
        </Row>

        {/* Ferramentas */}
        <Row className="my-5 py-5">
          <Col md={12} className="text-center mb-5">
            <div className="section-title-container">
              <h2 className="display-5 fw-bold highlight glow-text">Ferramentas Essenciais</h2>
              <div className="title-underline"></div>
            </div>
            <p className="tech-subtitle">
              {renderGlowingText("Nossa equipe utiliza as melhores ferramentas do mercado para otimizar processos e maximizar resultados.", ["melhores", "otimizar", "resultados"])}
            </p>
          </Col>
          <div className="tool-stack-container glass-card">
            <Toolstack />
          </div>
        </Row>
        
        {/* Seção de contato rápido */}
        <Row className="my-5 py-5 contact-section">
          <Col md={12} className="text-center">
            <div className="glass-card contact-card">
              <h2 className="highlight glow-text mb-4">Pronto para transformar seu negócio?</h2>
              <p className="lead mb-4">Vamos criar soluções digitais inovadoras juntos!</p>
              <button className="explore-btn pulse-effect">Entre em contato</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Função auxiliar para mapear títulos de serviços para ícones
function getIconForService(title) {
  const iconMap = {
    "Marketing Digital Estratégico": "chart-line",
    "Desenvolvimento de Sites Profissionais": "laptop-code",
    "Integrações Personalizadas": "plug",
    "Design & Branding Profissional": "paint-brush",
    "Gestão de Redes Sociais": "share-alt",
    "Otimização de Sistemas": "tachometer-alt",
    "Automação de Processos": "robot",
    "Servidores de Mu Online": "server"
  };
  
  return iconMap[title] || "star"; // Retorna "star" como padrão se não encontrar correspondência
}

export default About;