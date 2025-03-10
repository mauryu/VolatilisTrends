import React, { useState, useEffect } from 'react';
import ProjectCards from './ProjectCards';
import { Col, Row, Container } from "react-bootstrap";
import BackgroundParticles from '../Home/BackgroundParticles';
import Particle from "../Particle";
import './Projects.css';

// Adicionar imports no topo do arquivo
import muversoImg from './images/muverso.png';
import sejaeiImg from './images/sejaei.png';
import mustillusImg from './images/mustillus.png';
import automationImg from './images/automation.png';
import guideImg from './images/guide.png';
import aiModelsImg from './images/ai-models.png';
import sertaoImg from './images/sertao.png';

const Projects = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    header: false,
    ticker: false,
    projects: false,
    ongoing: false
  });
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      setIsVisible({
        header: window.scrollY > 100,
        ticker: window.scrollY > 300,
        projects: window.scrollY > 600,
        ongoing: window.scrollY > 1200
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Ativar a primeira seção com um pequeno atraso
    setTimeout(() => {
      setIsVisible(prev => ({ ...prev, header: true, ticker: true }));
    }, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
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

  const mainProjects = [
    {
      id: 1,
      title: "Muverso",
      description: "Primeiro Servidor de Mu Online do Brasil com integração de token e criptoativos, oferecendo uma experiência revolucionária para os jogadores.",
      role: "Criador e desenvolvedor principal da plataforma",
      technologies: ["C", "C++", "HTML", "CSS", "JavaScript"],
      imageUrl: muversoImg,
      category: ["gaming", "content"]
    },  
    {
      id: 2,
      title: "SejaEI - Seja Ecologicamente Inteligente",
      description: "Projeto de impacto social em Angra dos Reis focado no redirecionamento de lixo eletrônico e contaminantes, através de uma campanha digital de grande alcance.",
      role: "Estrategista de lançamento, gerenciamento de tráfego pago (Google Ads e Meta Ads),",
      technologies: ["Google Ads", "Meta Ads", "Wordpress", "Trello"],
      imageUrl: sejaeiImg,
      category: ["social", "content"]
    },
    {
      id: 3,
      title: "Sertão do Futuro",
      description: "Escola de técnologia e Futurismo no Sertão de Pernambuco",
      role: "Facilitador, mentor e desenvolvedor",
      technologies: ["Content Creation", "React", "Youtube", "Python", "AI", "Hugging Face"],
      imageUrl: sertaoImg,
      category: ["ai" , "content"]
    },
    {
      id: 4,
      title: "Mu Stillus",
      description: "Servidor de Mu Online com configurações personalizadas e otimizadas para oferecer a melhor experiência aos jogadores.",
      role: "Configuração de arquivos do servidor e criação completa do site",
      technologies: ["C", "C++", "HTML", "CSS", "JavaScript"],
      imageUrl: mustillusImg,
      category: "gaming"
    },
    {
      id: 5,
      title: "Brazilian Definitive Guide",
      description: "Guia Definitivo e Multiplataforma sobre como viajar e viver no Brasil, desenvolvido em inglês para orientação de estrangeiros.",
      role: "Autor e desenvolvedor",
      technologies: ["Content Creation", "Publishing", "Translation"],
      imageUrl: guideImg,
      category: "content"
    },
    {
      id: 6,
      title: "Automação para Análise de Tendências Financeiras",
      description: "Sistema automatizado para análise de tendências e execução de operações de compra/venda de ativos financeiros nos mercados Forex e Criptomoedas.",
      role: "Desenvolvedor full-stack",
      technologies: ["Python", "PHP"],
      imageUrl: automationImg,
      category: "fintech"
    },
    {
      id: 7,
      title: "Modelos de IA Personalizados",
      description: "Desenvolvimento de 14 modelos de IA treinados para gerar resultados otimizados com parâmetros específicos para diversas aplicações.",
      role: "Entusiasta e treinador de IA",
      technologies: ["Python", "TensorFlow", "Java", "Vercel", "AWS", "Hugging Face"],
      imageUrl: aiModelsImg,
      category: "ai"
    }
  ];

  const achievementStats = [
    { value: "1000+", label: "Fotos profissionais criadas com IA" },
    { value: "10+", label: "Ebooks em Português e Inglês" },
    { value: "10+", label: "Sites para servidores de Mu" },
    { value: "50+", label: "Vídeos profissionais editados" },
    { value: "25+", label: "Sites para empresas" },
    { value: "200+", label: "Designs para clientes" },
    { value: "10+", label: "Servidores configurados" },
    { value: "200+", label: "Computadores formatados" },
    { value: "40+", label: "Templates criados" },
    { value: "R$ 100K+", label: "Em anúncios gerenciados para clientes" }
  ];

  const ongoingProjects = [
    {
      title: "Sertão do Futuro",
      description: "Escola de Empreendedorismo e Futurismo no Sertão de Pernambuco",
      icon: "school"
    },
    {
      title: "Brazilian Definitive Guide",
      description: "Guia definitivo para turistas e estrangeiros, de onde, como e por que viver no Brasil.",
      icon: "book"
    },
    {
      title: "Muverso",
      description: "Primeiro servidor de Mu Online do Mundo com integração Web3",
      icon: "gamepad"
    }
  ];

  // Função auxiliar para mapear títulos para ícones
  const getIconForProject = (title) => {
    const iconMap = {
      "Sertão do Futuro": "graduation-cap",
      "Brazilian Definitive Guide": "book",
      "Muverso": "gamepad"
    };
    
    return iconMap[title] || "star";
  };

  return (
    <div className="projects-main">
      <BackgroundParticles />
      <Particle />
      
      <section className="projects-container">
        {/* Header da seção de projetos com animação */}
        <div className={`projects-header ${isVisible.header ? 'fade-in-up' : ''}`}>
          <h2 className="glitch-effect project-header">
            <span className="highlight glow-text">Projetos em Destaque</span>
          </h2>
          <p className="projects-subtitle">
            {renderGlowingText("Soluções inovadoras e tecnológicas desenvolvidas com dedicação e experiência", ["inovadoras", "tecnológicas", "dedicação", "experiência"])}
          </p>
        </div>
        
        {/* Ticker de Realizações com animação */}
        <div className={`achievements-ticker-container glass-card ${isVisible.ticker ? 'fade-in-up' : ''}`}>
          <div className="achievements-ticker">
            <div className="ticker-track">
              {[...achievementStats, ...achievementStats].map((stat, index) => (
                <div className="ticker-item" key={index}>
                  <span className="achievement-value highlight glow-text">{stat.value}</span>
                  <span className="achievement-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Filtros e Grade de projetos com animação */}
        <div className={`projects-showcase ${isVisible.projects ? 'fade-in-up' : ''}`} style={{ marginBottom: '20px' }}>
          <ProjectCards projects={mainProjects} />
        </div>
        
        {/* Projetos em andamento com animação */}
        <Container className={`ongoing-projects ${isVisible.ongoing ? 'fade-in-up' : ''}`}>
          <Row>
            <Col md={12} className="text-center mb-5">
              <div className="section-title-container">
                <h2 className="display-5 fw-bold highlight glow-text">Nossos Projetos em Andamento</h2>
                <div className="title-underline"></div>
              </div>
            </Col>
            {ongoingProjects.map((project, index) => (
              <Col md={4} key={index}>
                <div 
                  className="project-card glass-card"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    transform: isVisible.ongoing ? 'translateY(0)' : 'translateY(50px)',
                    opacity: isVisible.ongoing ? 1 : 0,
                    transition: `all 0.6s ease-out ${index * 0.2}s`
                  }}
                >
                  <div className="card-icon">
                    <i className={`fas fa-${getIconForProject(project.title)}`}></i>
                  </div>
                  <h3 className="highlight">{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="card-glow"></div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        
        {/* Seção de contato/CTA */}
        <div className="projects-cta glass-card fade-in-up">
          <h3 className="highlight glow-text">Tem um projeto em mente?</h3>
          <p>{renderGlowingText("Vamos trabalhar juntos para transformar sua visão em realidade com soluções tecnológicas de ponta.", ["transformar", "visão", "realidade", "tecnológicas"])}</p>
          <button className="contact-button pulse-effect">Entre em contato</button>
        </div>
      </section>
    </div>
  );
};

export default Projects;