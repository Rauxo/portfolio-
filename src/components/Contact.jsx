import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
      </motion.div>

      <div className="contact-grid">
        {/* Contact Info */}
        <motion.div
          className="glass-card"
          style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let's build something amazing together.</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Whether you have a project in mind, need a frontend developer, or just want to say hi, 
              feel free to reach out. I'm always open to discussing new projects and creative ideas.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'rgba(99,102,241,0.1)', padding: '1rem', borderRadius: '50%' }}>
                <Mail color="var(--accent-primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Email</h4>
                <a href="mailto:rahulsaikia682@gmail.com" style={{ fontSize: '1.1rem', color: 'var(--text-color)', fontWeight: 500 }}>
                  rahulsaikia682@gmail.com
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'rgba(236,72,153,0.1)', padding: '1rem', borderRadius: '50%' }}>
                <Phone color="var(--accent-secondary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Phone</h4>
                <a href="tel:+919387394822" style={{ fontSize: '1.1rem', color: 'var(--text-color)', fontWeight: 500 }}>
                  +91 9387394822
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="glass-card"
          style={{ padding: '3rem' }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                style={{ 
                  width: '100%', 
                  padding: '12px 16px', 
                  borderRadius: '8px', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid var(--glass-border)',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none'
                }} 
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Your Email</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                style={{ 
                  width: '100%', 
                  padding: '12px 16px', 
                  borderRadius: '8px', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid var(--glass-border)',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none'
                }} 
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Message</label>
              <textarea 
                rows="5"
                placeholder="Tell me about your project..."
                style={{ 
                  width: '100%', 
                  padding: '12px 16px', 
                  borderRadius: '8px', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid var(--glass-border)',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'none'
                }} 
              />
            </div>

            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
