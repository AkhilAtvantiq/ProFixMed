import { motion } from "framer-motion";
import Footer from "./Footer";

const About = () => (
  <div>
    <section className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Vision
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: "48rem",
            margin: "1.5rem auto",
            textAlign: "center",
            color: "#4a5568",
          }}
        >
          ProFixMed.AI was founded by physicians frustrated by paperwork
          stealing time from patients. We created AVA to redefine clinical
          efficiency.
        </motion.p>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            maxWidth: "48rem",
            margin: "1rem auto",
            textAlign: "center",
            color: "#4a5568",
          }}
        >
          AVA automates documentation, streamlines orders, and provides
          real-time insights, integrating seamlessly with your EHR to put
          patients first.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: "64rem", margin: "3rem auto" }}
        >
          <video
            style={{
              width: "100%",
              borderRadius: "1rem",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            }}
            controls
          >
            <source src="/videos/ava-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
