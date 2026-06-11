import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiDjango } from "react-icons/si";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-container">

        {/* LEFT SIDE */}

        <div className="hero-left">

          <h3>Hey, I am Murali</h3>

          <h1>
            Python Full Stack
            <br />
            <span>Developer</span>
          </h1>

          <p>
            Building scalable web applications and
            AI-powered solutions using Python,
            Django, React and modern technologies.
          </p>

          <div className="hero-buttons">

            <a href="mailto:muralikarthick9843@gmail.com">
              <button className="hire-btn">
                Hire Me
              </button>
            </a>

            <a href="#contact">
              <button className="contact-btn">
                Contact Me
              </button>
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-right">

          <img
            src="/avatar1.png"
            alt="Murali Avatar"
          />

          <div className="floating-icons">

            <FaHtml5 className="icon html" />

            <FaCss3Alt className="icon css" />

            <SiJavascript className="icon js" />

            <FaReact className="icon react" />

            <SiDjango className="icon django" />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;