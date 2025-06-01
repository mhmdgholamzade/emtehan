import React, { useState, useEffect } from 'react';

function SkillItem({ name, level }) {
  return (
    <div className="progress-item">
      <h6>{name}</h6>
      <div className="skills-progress">
        <span data-value={`${level}%`}></span>
      </div>
    </div>
  );
}

function useSkills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills([
      { name: 'Web Design', level: 95 },
      { name: 'Graphic Design', level: 80 },
      { name: 'Web Development', level: 90 },
      { name: 'Photoshop', level: 92 }
    ]);
  }, []);

  return skills;
}


function Skills() {
  const skills = useSkills();

  return (
    <section className="skills padding">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 mx-auto skills-left">
            <h2 className="heading-secondary mb-5">Our <span>Skills</span></h2>
            <div className="content">
              <div className="skill">
                {skills.map((skill, index) => (
                  <SkillItem key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 mx-auto skills-right">
            <h2 className="heading-secondary mb-5">Our Mission and <span>Vision</span></h2>
            <p>
              We are committed to delivering top-notch design and development services, ensuring our clients achieve their business objectives effectively.
            </p>
            <p>
              Our mission is to innovate and excel in every project, providing solutions that are not only functional but also aesthetically pleasing.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
