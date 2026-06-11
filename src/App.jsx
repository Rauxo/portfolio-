import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '20px 0',
        background: 'rgba(3,3,5,0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        borderBottom: '1px solid var(--glass-border)'
      }}>
        <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '1px', color: 'var(--text-color)' }}>
            RAAHUL<span className="gradient-text">.</span>
          </Link>
          <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
            <Link to="/" style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>Home</Link>
            <Link to="/about" style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>About</Link>
            <Link to="/projects" style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>Projects</Link>
            <Link to="/contact" style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>Contact</Link>
          </div>
        </div>
      </nav>

      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer style={{ 
        textAlign: 'center', 
        padding: '2rem', 
        borderTop: '1px solid var(--glass-border)',
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
        marginTop: 'auto'
      }}>
        <p>© {new Date().getFullYear()} Raahul Saikia. All rights reserved.</p>
      </footer>
    </Router>
  )
}

export default App
