import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setShowSnackbar(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/nstfashion', color: '#1877F2' },
    { icon: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/nstfashion', color: '#E4405F' },
  ];

  const shopLinks = [
    { text: 'All Products', path: '/products' },
    { text: 'New Arrivals', path: '/products/new-arrivals' },
    { text: 'Best Sellers', path: '/products/best-sellers' },
  ];

  const customerServiceLinks = [
    { text: 'Help Center', path: '/help-center', icon: 'help' },
    { text: 'Shipping Info', path: '/shipping-info', icon: 'local_shipping' },
    { text: 'Returns & Exchanges', path: '/returns', icon: 'local_shipping' },
  ];

  const companyLinks = [
    { text: 'About Us', path: '/about' },
    { text: 'Contact Us', path: '/contact' },
    { text: 'Privacy Policy', path: '/privacy-policy' },
  ];

  const paymentMethods = [
    { name: 'Visa', icon: 'visa' },
    { name: 'Mastercard', icon: 'mastercard' },
    { name: 'PayPal', icon: 'paypal' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div>
            <h3 className="footer-section-title">NST Fashion</h3>
            <p>Your one-stop destination for premium fashion and accessories. Experience the perfect fit before you commit.</p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ backgroundColor: social.color }}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </motion.a>
              ))}
            </div>
            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> support@nstfashion.com</p>
              <p><i className="fas fa-phone"></i> +91 736362863</p>
              <p><i className="fas fa-map-marker-alt"></i> 123 Fashion Street, New York, NY</p>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="footer-section-title">Shop</h3>
            <ul className="footer-links">
              {shopLinks.map((link) => (
                <li key={link.text} className="footer-link">
                  <RouterLink to={link.path}>{link.text}</RouterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="footer-section-title">Customer Service</h3>
            <ul className="footer-links">
              {customerServiceLinks.map((link) => (
                <li key={link.text} className="footer-link">
                  <RouterLink to={link.path}>
                    <i className="material-icons">{link.icon}</i>
                    {link.text}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Company Info */}
          <div>
            <h3 className="footer-section-title">Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>

            <h3 className="footer-section-title">Company</h3>
            <ul className="footer-links">
              {companyLinks.map((link) => (
                <li key={link.text} className="footer-link">
                  <RouterLink to={link.path}>{link.text}</RouterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="payment-methods">
          <span>We Accept:</span>
          {paymentMethods.map((method) => (
            <img
              key={method.name}
              src={`/assets/payment/${method.icon}.svg`}
              alt={method.name}
              className="payment-method"
            />
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} NST Fashion. All rights reserved.</p>
          <div className="footer-bottom-links">
            <RouterLink to="/privacy-policy" className="footer-bottom-link">
              Privacy Policy
            </RouterLink>
            <RouterLink to="/terms" className="footer-bottom-link">
              Terms of Service
            </RouterLink>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <i className="fas fa-arrow-up"></i>
        </motion.button>
      )}

      {/* Snackbar for newsletter subscription */}
      {showSnackbar && (
        <div className="snackbar">
          Thank you for subscribing to our newsletter!
        </div>
      )}
    </footer>
  );
};

export default Footer;