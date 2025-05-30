import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Home = () => (
  <div>
    {/* Hero Section */}
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Revolutionize Healthcare with ProFixMed.AI
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Empower providers with AI-driven automation, clinical insights, and
          revenue optimization.
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link to="/contact">Request a Demo</Link>
          <Link to="/features">Explore Features</Link>
        </motion.div>
      </div>
    </motion.section>

    {/* Why Section */}
    <section className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why ProFixMed.AI?
        </motion.h2>
        <div className="grid">
          {[
            {
              title: "Maximize Productivity",
              desc: "Reduce documentation time by 60%, freeing providers to focus on patients.",
            },
            {
              title: "Boost Revenue",
              desc: "Enhance coding accuracy and minimize denials for faster revenue cycles.",
            },
            {
              title: "Intelligent Insights",
              desc: "Real-time AI-driven clinical support for better decision-making.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="section section-bg">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          How AVA Works
        </motion.h2>
        <div className="grid">
          {[
            {
              title: "Capture",
              desc: "Record visits via phone or mic with seamless EHR integration.",
            },
            {
              title: "Analyze",
              desc: "Real-time AI analysis of patient data and workflows.",
            },
            {
              title: "Assist",
              desc: "Auto-generates notes, orders, and risk alerts instantly.",
            },
            {
              title: "Optimize",
              desc: "Tracks KPIs and suggests improvements for efficiency.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Results */}
    <section className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Proven Results
        </motion.h2>
        <div className="grid">
          {[
            {
              title: "60% Faster Documentation",
              desc: "Complete notes in half the time.",
            },
            {
              title: "Reduced Burnout",
              desc: "Lower stress for happier providers.",
            },
            {
              title: "Improved Revenue",
              desc: "Faster collections with optimized billing.",
            },
            {
              title: "Fewer Denials",
              desc: "Minimize claim rejections on first pass.",
            },
          ].map((result, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3>{result.title}</h3>
              <p>{result.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Security & Integrations */}
    <section className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Secure & Integrated
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          HIPAA-compliant with enterprise-grade encryption and seamless
          integration with Epic and Cerner.
        </motion.p>
        <motion.div
          className="flex justify-center gap-8 mt-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/epic-logo.jpg"
            alt="Epic"
            style={{ height: "3.5rem" }}
          />
          <img
            src="/images/cerner-logo.jpg"
            alt="Cerner"
            style={{ height: "3.5rem" }}
          />
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Home;
