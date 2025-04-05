import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">CapePolish</h3>
            <p className="text-secondary-300 mb-4">
              Professional cleaning services in Cape Town. We deliver exceptional cleaning solutions for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-primary-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-primary-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-primary-400 transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#home-cleaning" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Home Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services#commercial-cleaning" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services#car-cleaning" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Car Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services#carpet-cleaning" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Carpet Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services#gardening" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Gardening
                </Link>
              </li>
              <li>
                <Link to="/services#waste-removal" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Waste Removal
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/client" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary-400 mt-1 mr-3" />
                <span className="text-secondary-300">123 Main Street, Cape Town, South Africa</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-primary-400 mr-3" />
                <a href="tel:+27123456789" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  +27 12 345 6789
                </a>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="text-primary-400 mr-3" />
                <a href="https://wa.me/27123456789" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  WhatsApp Us
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-primary-400 mr-3" />
                <a href="mailto:info@capepolish.co.za" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  info@capepolish.co.za
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-10 pt-6 text-center">
          <p className="text-secondary-400">
            &copy; {currentYear} CapePolish Cleaning Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 