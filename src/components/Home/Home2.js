import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home.png";
import Tilt from "react-parallax-tilt";
import { 
  AiFillInstagram, 
  AiFillLinkedin, 
  AiFillYoutube, 
  AiFillGithub 
} from "react-icons/ai";
import { 
  BsFillRocketFill, 
  BsLightningChargeFill, 
  BsGraphUpArrow, 
  BsLayersFill 
} from "react-icons/bs";
import "./Home2.css";

// Componente de Partículas de Fundo
const BackgroundParticles = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Configurar tamanho do canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Criar partículas
    const particlesArray = [];
    const particleCount = 50;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Limites da tela
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Inicializar partículas
    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    init();
    
    // Conectar partículas próximas
    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = 1 - (distance / 150);
            ctx.strokeStyle = `rgba(255, 165, 0, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animação
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connect();
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="background-particles"
    />
  );
};

// Componente de card de serviço
const ServiceCard = ({ icon, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.disconnect();
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={cardRef}
      className={`service-card ${isVisible ? 'service-card-visible' : ''}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <div className="service-card-glow"></div>
    </div>
  );
};

// Componente Contador Animado
const AnimatedCounter = ({ target, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = Date.now();
          const endValue = parseFloat(target);
          
          const updateCounter = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing para suavizar a animação
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(easedProgress * endValue);
            
            setCount(currentValue);
            
            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setCount(endValue);
            }
          };
          
          requestAnimationFrame(updateCounter);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.disconnect();
      }
    };
  }, [target, duration]);
  
  return (
    <div className="stat-item" ref={counterRef}>
      <span className="stat-number">
        {count}{target.includes('%') ? '%' : ''}
        <span className="stat-plus">{target.includes('+') ? '+' : ''}</span>
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

function Home2() {
  // Array de dados para o carrossel de depoimentos
  const testimonials = [
    {
      name: "Marina Silva",
      company: "TechSolutions",
      text: "A Volatilis transformou completamente nossa presença digital. Resultados excepcionais em tempo recorde!",
      role: "CEO"
    },
    {
      name: "Carlos Mendes",
      company: "InnovateX",
      text: "Desde que começamos a trabalhar com a Volatilis, nossas conversões aumentaram em 215%. Inacreditável!",
      role: "Diretor de Marketing"
    },
    {
      name: "Juliana Passos",
      company: "GrowthLabs",
      text: "Equipe extremamente profissional e dedicada. Entregam mais do que prometem!",
      role: "Fundadora"
    }
  ];
  
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  // Controla a navegação automática dos depoimentos
  useEffect(() => {
    const interval = setInterval(() => {
      if (!animating) {
        setAnimating(true);
        setTimeout(() => {
          setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
          setAnimating(false);
        }, 500);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length, animating]);
  
  // Função para observar elementos e aplicar fade-in quando visíveis
  const useIntersectionObserver = () => {
    const [elements, setElements] = useState([]);
    const observer = useRef(null);
    
    useEffect(() => {
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.current.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      
      elements.forEach((el) => {
        observer.current.observe(el);
      });
      
      return () => {
        if (observer.current) {
          observer.current.disconnect();
        }
      };
    }, [elements]);
    
    const observe = (element) => {
      if (element && !elements.includes(element)) {
        setElements((prevElements) => [...prevElements, element]);
      }
    };
    
    return { observe };
  };
  
  const { observe } = useIntersectionObserver();
  
  // Scroll suave para âncoras
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
    
    return () => {
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);
  
  return (
    <section className="home2-section" id="about">
      <BackgroundParticles />
      <div className="gradient-overlay"></div>
      
      <Container>
        {/* Seção de Introdução */}
        <Row className="align-items-center home2-intro-row">
          <Col lg={7} className="home2-description">
            <h2 className="section-heading" ref={observe}>
              Elevando Negócios ao <span className="highlight-text">Próximo Nível</span>
            </h2>
            <div className="section-dash" ref={observe}></div>
            <p className="home2-intro-text" ref={observe}>
              Na <strong>Volatilis Trends</strong>, transformamos visões em realidade digital. 
              Somos mais que uma agência — somos parceiros estratégicos no seu crescimento.
            </p>
            <div className="stats-container" ref={observe}>
              <AnimatedCounter target="97%" label="Satisfação de Clientes" />
              <AnimatedCounter target="150+" label="Projetos Entregues" />
              <AnimatedCounter target="215%" label="ROI Médio" />
            </div>
          
          </Col>
          <Col lg={5} className="home2-image-col">
            <div className="perspective-wrapper" ref={observe}>
              <Tilt 
                className="parallax-effect"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                transitionSpeed={1500}
                scale={1.05}
                gyroscope={true}
              >
                <img 
                  src={myImg} 
                  alt="Volatilis Trends - Especialistas em Marketing Digital" 
                  className="img-fluid home2-image"
                />
                <div className="image-overlay"></div>
                <div className="image-particle image-particle-1"></div>
                <div className="image-particle image-particle-2"></div>
                <div className="image-particle image-particle-3"></div>
                <div className="image-glow"></div>
              </Tilt>
            </div>
          </Col>
        </Row>
        
        {/* Seção de Serviços */}
        <div className="services-section" id="services">
          <h2 className="section-heading text-center" ref={observe}>
            Soluções <span className="highlight-text">Transformadoras</span>
          </h2>
          <div className="section-dash centered" ref={observe}></div>
          <p className="section-subheading text-center" ref={observe}>
            Combinamos estratégia, tecnologia e criatividade para impulsionar seu crescimento digital
          </p>
          
          <Row className="services-row">
            <Col md={6} lg={3}>
              <ServiceCard 
                icon={<BsFillRocketFill />}
                title="Marketing Digital Estratégico"
                description="Estratégias personalizadas que aumentam sua visibilidade e conversões com foco em resultados mensuráveis."
                delay={100}
              />
            </Col>
            <Col md={6} lg={3}>
              <ServiceCard 
                icon={<BsLayersFill />}
                title="Desenvolvimento Web Premium"
                description="Sites e aplicações que combinam design excepcional, otimização técnica e experiência do usuário impecável."
                delay={200}
              />
            </Col>
            <Col md={6} lg={3}>
              <ServiceCard 
                icon={<BsGraphUpArrow />}
                title="SEO & Growth Hacking"
                description="Alavancamos seu posicionamento orgânico e exploramos oportunidades de crescimento acelerado."
                delay={300}
              />
            </Col>
            <Col md={6} lg={3}>
              <ServiceCard 
                icon={<BsLightningChargeFill />}
                title="Automação & IA"
                description="Ferramentas inteligentes que otimizam processos, reduzem custos e potencializam seus resultados."
                delay={400}
              />
            </Col>
          </Row>
        </div>
        
               
        {/* Seção de Depoimentos */}
        <div className="testimonials-section" ref={observe}>
          <div className="testimonial-container">
            <div className="testimonial-glow"></div>
            <div className={`testimonial-slide ${animating ? 'fade-out' : 'fade-in'}`}>
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                {testimonials[activeTestimonial].text}
              </p>
              <div className="testimonial-author">
                <p className="author-name">{testimonials[activeTestimonial].name}</p>
                <p className="author-role">
                  {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                </p>
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <span 
                  key={index} 
                  className={`testimonial-dot ${index === activeTestimonial ? 'active' : ''}`}
                  onClick={() => {
                    if (!animating) {
                      setAnimating(true);
                      setTimeout(() => {
                        setActiveTestimonial(index);
                        setAnimating(false);
                      }, 500);
                    }
                  }}
                ></span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Seção de Redes Sociais */}
        <Row className="social-section" ref={observe}>
          <Col md={12} className="home-about-social">
            <h2 className="section-heading text-center">
              Conecte-se <span className="highlight-text">Conosco</span>
            </h2>
            <div className="section-dash centered"></div>
            <p className="social-text">
              Acompanhe novidades, insights e projetos inspiradores da Volatilis Trends
            </p>
            <ul className="social-links">
              <li className="social-item">
                <a
                  href="https://www.instagram.com/volatilistrends"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link instagram"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
              
            </ul>
            <div className="newsletter-container">
              <h3 className="newsletter-heading">Receba insights exclusivos</h3>
              <div className="newsletter-form">
                <input type="email" placeholder="Seu melhor e-mail" className="newsletter-input" />
                <button className="newsletter-button">
                  <span>Inscrever</span>
                  <span className="btn-shine"></span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home2;