function Services() {
  return (
    <section className="services-section">
      <h2 className="section-title">Services</h2>

      <div className="services-grid">

        <div className="service-card">
          <h3>🌐 Web Development</h3>
          <p>Responsive and modern websites using React & Django.</p>
        </div>

        <div className="service-card">
          <h3>⚙️ API Development</h3>
          <p>REST APIs using Django REST Framework.</p>
        </div>

        <div className="service-card">
          <h3>🤖 AI Integration</h3>
          <p>AI-powered web applications and automation.</p>
        </div>

      </div>
    </section>
  );
}

export default Services;