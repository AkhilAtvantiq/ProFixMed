import { motion } from "framer-motion";
import Footer from "./Footer";

const Features = () => (
  <div>
    <section className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Advanced Features
        </motion.h2>
        <div className="grid">
          {[
            {
              title: "AI Documentation",
              desc: "Generate progress notes and discharge summaries effortlessly.",
            },
            {
              title: "Revenue Dashboard",
              desc: "Real-time insights to optimize billing and track performance.",
            },
            {
              title: "Clinical Support",
              desc: "Context-aware suggestions for orders and care gaps.",
            },
            {
              title: "Voice Commands",
              desc: "Natural voice-activated orders for seamless workflow.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: "64rem", margin: "3rem auto" }}
        >
          <img
            src="/images/feature-screenshot.jpg"
            alt="AVA Dashboard"
            style={{
              width: "100%",
              borderRadius: "1rem",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            }}
          />
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Features;
