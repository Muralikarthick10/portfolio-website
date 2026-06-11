import {
  FaPython,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt
} from "react-icons/fa";

import {
  SiDjango,
  SiMysql
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

function Skills() {

  const skills = [
    { icon: <FaPython />, name: "Python" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <TbApi />, name: "REST API" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" }
  ];

  return (
    <section className="skills-section" id="skills">

      <h2 className="section-title">
        Skills
      </h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;