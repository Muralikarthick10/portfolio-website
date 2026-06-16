function Projects() {

  const projects = [
    {
     title: "ShopKart E-Commerce",
     image: "/ecommerce.png",
     description:
      "Full-stack E-Commerce platform with authentication, cart, wishlist, orders, admin dashboard and Cloudinary image hosting.",
    tech: "Django • PostgreSQL • Bootstrap • Cloudinary",
    github: "https://github.com/Muralikarthick10/ecommerce-main",
    demo: "https://ecommerce-main-mu.vercel.app"
    },

    {
      title: "AI Resume Analyzer",
      image: "/ai-resume.png",
      description:
        "AI-powered resume analysis and ATS score evaluation system.",
      tech: "Python • OpenAI • Django",
      github: "https://github.com/yourusername/ai-resume-analyzer",
      demo: "#"
    },

    {
      title: "Portfolio Website",
      image: "/portfolio.png",
      description:
        "Modern personal portfolio website built using React and CSS.",
      tech: "React • CSS • Framer Motion",
      github: "https://github.com/yourusername/portfolio",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">

      <h2 className="section-title">
        Projects
      </h2>

      <div className="project-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span className="tech-badge">
              {project.tech}
            </span>

            <div className="project-buttons">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <button className="github-btn">
                  GitHub
                </button>
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                <button className="demo-btn">
                  Live Demo
                </button>
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;