import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import dupImg from '../assets/dup.png';
import jajaborImg from '../assets/jajabor.png';

const Projects = () => {
  const projects = [
    {
      title: 'Dupleix Diagnostics',
      description: 'A comprehensive diagnostic center web presence featuring test bookings and results integration. Built with modern web technologies.',
      link: 'https://dupleixdiagnostics.online/',
      tags: ['React', 'MERN', 'Healthcare UI'],
      image: dupImg
    },
    {
      title: 'Jajabor Northeast',
      description: 'A travel and tourism platform designed to showcase the beauty of Northeast India. Features interactive bookings and dynamic content.',
      link: 'https://www.jajabornortheast.in/',
      tags: ['Frontend', 'UI/UX', 'Tourism'],
      image: jajaborImg
    }
  ];

  return (
    <section id="projects" className="container" style={{ paddingTop: '80px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="glass-card"
            style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Image display */}
            <div style={{ 
              height: '240px', 
              overflow: 'hidden',
              borderBottom: '1px solid var(--glass-border)',
              position: 'relative'
            }}>
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }} 
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1, lineHeight: 1.6 }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{ 
                    padding: '4px 12px', 
                    background: 'rgba(255,255,255,0.05)', 
                    borderRadius: '20px', 
                    fontSize: '0.85rem',
                    color: 'var(--accent-primary)',
                    border: '1px solid rgba(99,102,241,0.2)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                  <ExternalLink size={18} /> Live Site
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
