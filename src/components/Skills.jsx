import React from 'react';
import { motion } from 'framer-motion';
import { Database, Smartphone, Code, BrainCircuit } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'MERN Stack', icon: <Code size={32} color="var(--accent-primary)" />, description: 'MongoDB, Express, React, Node.js' },
    { name: 'React Native', icon: <Smartphone size={32} color="var(--accent-secondary)" />, description: 'Cross-platform mobile apps' },
    { name: 'SQL', icon: <Database size={32} color="var(--accent-tertiary)" />, description: 'Database design & optimization' },
    { name: 'AI Integrations', icon: <BrainCircuit size={32} color="#f59e0b" />, description: 'Implementing AI features' }
  ];

  return (
    <section id="skills" className="container" style={{ paddingTop: '80px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">My <span className="gradient-text">Expertise</span></h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="glass-card"
            style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem' }}>
              {skill.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{skill.name}</h3>
            <p style={{ color: 'var(--text-muted)' }}>{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
