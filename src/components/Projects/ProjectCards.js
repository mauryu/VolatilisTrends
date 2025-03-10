import React, { useState } from 'react';
import './Projects.css';

const ProjectCards = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleMouseEnter = (id) => {
    setActiveProject(id);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        Array.isArray(project.category) 
          ? project.category.includes(filter)
          : project.category === filter
      );

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'social', label: 'Impacto Social' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'fintech', label: 'Fintech' },
    { id: 'content', label: 'Conteúdo' },
    { id: 'ai', label: 'Inteligência Artificial' }
  ];

  return (
    <div className="projects-section">
      <div className="projects-filter">
        {categories.map(category => (
          <button 
            key={category.id}
            className={`filter-button ${filter === category.id ? 'active' : ''}`}
            onClick={() => setFilter(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div 
            className={`project-card ${activeProject === project.id ? 'active' : ''}`}
            key={project.id}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="project-image" >
              <img 
                src={project.imageUrl} 
                                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-details">
                <div className="project-role">
                  <h4>Minha Função:</h4>
                  <p>{project.role}</p>
                </div>
                <div className="project-tech">
                  <h4>Tecnologias:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span className="tech-tag" key={index}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;