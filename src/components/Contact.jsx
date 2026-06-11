import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <h2 className="section-title">
        Contact Me
      </h2>

      <div className="contact-card">

        <h3>Murali Karthick</h3>

        <p>Python Full Stack Developer</p>

        <div className="social-icons">

          <a href=" https://github.com/Muralikarthick10  ">
            <FaGithub />
          </a>

          <a href="www.linkedin.com/in/murali-karthick-v-0b3607325">
            <FaLinkedin />
          </a>

          <a href="mailto:muralikarthick9843@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;