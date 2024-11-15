import React, { useState, useEffect } from 'react';

function Portfolio() {
  const [home, setHome] = useState({});
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch home data
    fetch('https://backend-portfolio-builder.onrender.com/home')
      .then(response => response.json())
      .then(data => setHome(data));

    // Fetch about data
    fetch('https://backend-portfolio-builder.onrender.com/about')
      .then(response => response.json())
      .then(data => setAbout(data));

    // Fetch skills data
    fetch('https://backend-portfolio-builder.onrender.com/skills')
      .then(response => response.json())
      .then(data => setSkills(data));

    // Fetch projects data
    fetch('https://backend-portfolio-builder.onrender.com/projects')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div style={styles.portfolio}>
      <section style={styles.section}>
        <h1>{home.welcomeMessage}</h1>
        <p>{home.introduction}</p>
      </section>
      
      <section style={styles.section}>
        <img src={about.profileImage} alt={about.name} style={styles.profileImage} />
        <h1>{about.name}</h1>
        <p>{about.bio}</p>
      </section>
      
      <section style={styles.section}>
        <h2>Skills</h2>
        <ul>
          {skills.map(skill => (
            <li key={skill.id}>
              <p>{skill.name} - {skill.level}</p>
            </li>
          ))}
        </ul>
      </section>
      
      <section style={styles.section}>
        <h2>Projects</h2>
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.image && <img src={project.image} alt={project.title} style={styles.projectImage} />}
              {project.url && <a href={project.url}>View Project</a>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

const styles = {
  portfolio: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  section: {
    marginBottom: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  projectImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '10px',
  },
};

export default Portfolio;
