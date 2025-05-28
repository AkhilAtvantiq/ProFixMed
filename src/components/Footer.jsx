import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* <img src="/images/logo.png" alt="ProFixMed.AI Logo" /> */}
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.875rem",
              color: "#9ca3af",
            }}
          >
            © 2025 ProFixMed.AI. All rights reserved.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Support</h3>
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Connect</h3>
          <ul>
            <li>
              <a href="https://twitter.com/profixmed">Twitter</a>
            </li>
            <li>
              <a href="https://linkedin.com/company/profixmed">LinkedIn</a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  </footer>
);

export default Footer;
