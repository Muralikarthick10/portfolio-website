import { motion } from "framer-motion";

function About() {
  return (
    <section className="about-section">

      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <h4>ABOUT ME</h4>

        <h2>
          Building modern and responsive
          <span> web applications</span>
        </h2>

        <p>
          I'm Murali Karthick, a Python Full Stack Developer
          and AI Enthusiast with 6 months of internship
          experience at Tamil Info Technology.
          I specialize in Python, Django, React.js,
          REST APIs, MySQL and modern web development.
        </p>

        <div className="stats">

          <div>
            <h3>6+</h3>
            <p>Months Internship</p>
          </div>

          <div>
            <h3>3+</h3>
            <p>Projects Completed</p>
          </div>

          <div>
            <h3>10+</h3>
            <p>Technologies</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Dedication</p>
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;