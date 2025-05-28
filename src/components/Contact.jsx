import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Contact = () => (
  <div>
    <motion.section
      className="section section-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container contact-section">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Transform Your Practice
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Enhance efficiency, reduce burnout, and boost revenue with
          ProFixMed.AI’s AI solutions.
        </motion.p>
        <motion.div
          className="contact-buttons"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link to="/contact">Schedule a Free Demo</Link>
          <a href="/one-pager.pdf">Download One-Pager</a>
        </motion.div>
      </div>
    </motion.section>

    <section className="section">
      <div className="container contact-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Stay Connected
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Subscribe for updates on AI-driven healthcare innovations.
        </motion.p>
        <motion.div
          className="subscribe-form"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Contact;
