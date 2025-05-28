import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import "./styles.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen">
        {/* Navigation */}
        <motion.nav
          className="navbar"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <div className="nav-content">
              <motion.div
                className="logo"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src="/images/logo.png" alt="ProFixMed.AI Logo" />
              </motion.div>
              <div className="nav-links hidden sm:flex">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/features", label: "Features" },
                  { to: "/contact", label: "Contact" },
                ].map((item) => (
                  <Link key={item.label} to={item.to} className="nav-link">
                    <motion.span
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                ))}
                <Link to="/contact">
                  <motion.button
                    className="demo-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request Demo
                  </motion.button>
                </Link>
              </div>
              <motion.button
                className="mobile-menu-btn sm:hidden"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="mobile-menu sm:hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="container">
                  {[
                    { to: "/", label: "Home" },
                    { to: "/about", label: "About" },
                    { to: "/features", label: "Features" },
                    { to: "/contact", label: "Contact" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="mobile-menu-link"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    className="mobile-menu-link demo-btn"
                    onClick={() => setIsOpen(false)}
                  >
                    Request Demo
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Routes */}
        <motion.div
          className="pt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </motion.div>
      </div>
    </Router>
  );
};

export default App;
