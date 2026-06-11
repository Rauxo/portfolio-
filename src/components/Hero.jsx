import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="container hero-section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ color: 'var(--accent-primary)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Hello, I'm
        </h2>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem' }}>
          Raahul <br/>
          <span className="gradient-text">Saikia.</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '2.5rem', lineHeight: 1.6 }}>
          I'm a full-stack developer specializing in the <strong style={{color: 'var(--text-color)'}}>MERN stack</strong>, 
          <strong style={{color: 'var(--text-color)'}}> React Native</strong>, and <strong style={{color: 'var(--text-color)'}}>SQL</strong>. 
          I build exceptional, highly interactive digital experiences and also have expertise in AI integrations.
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/projects" className="btn-primary">
            View My Work <ArrowRight size={20} />
          </Link>
          <Link to="/contact" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)' }}>
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
