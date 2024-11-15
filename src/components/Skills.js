import React, { useState, useEffect } from 'react';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/skills')
      .then(response => response.json())
      .then(data => setSkills(data));
  }, []);

  return (
    <div>
      <h1>My Skills</h1>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>
            {skill.name} - {skill.level}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
