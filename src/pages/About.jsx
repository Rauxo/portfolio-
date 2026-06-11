import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
      </motion.div>

      <motion.div
        className="glass-card"
        style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>My Journey</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
              Hi, I'm Rahul Saikia. I am a passionate full-stack developer with a deep focus on crafting modern, highly interactive, and scalable web and mobile applications. 
              My journey into programming started with a fascination for how things work on the web, which quickly evolved into a dedicated career path involving the MERN stack, React Native, and SQL.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>What I Do</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
              I specialize in taking complex problems and turning them into beautiful, intuitive interface designs. 
              Whether it's building robust backends with Node.js and SQL/MongoDB, crafting seamless mobile experiences with React Native, 
              or integrating cutting-edge AI features to elevate product capabilities, I strive for excellence in every line of code.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-tertiary)', marginBottom: '1rem' }}>My Philosophy</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
              I believe that great software is a blend of solid engineering and stunning design. 
              I am constantly exploring new technologies and methodologies to ensure that the products I build not only meet functional requirements 
              but also provide an exceptional and "pro-developer" user experience.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
