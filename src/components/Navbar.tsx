import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="navbar-container">
        <div className="navbar-flex">
          <Link to="/" className="navbar-logo">
            Cape<span className="navbar-logo-span">Polish</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="navbar-link"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/client"
              className="navbar-client-btn"
            >
              Client Portal
            </Link>
            <Link
              to="/contact"
              className="navbar-quote-btn"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="navbar-menu-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="navbar-mobile"
          >
            <div className="navbar-mobile-container">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="navbar-mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="navbar-mobile-buttons">
                <Link
                  to="/client"
                  className="navbar-mobile-link navbar-mobile-client"
                  onClick={() => setIsOpen(false)}
                >
                  Client Portal
                </Link>
                <Link
                  to="/contact"
                  className="navbar-mobile-link navbar-mobile-quote"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 