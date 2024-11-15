import React, { useState, useEffect } from 'react';
import './Skills.css';

function Skills() {
  const [skills, setSkills] = useState([]);
  const [formData, setFormData] = useState({ name: '', level: '' });

  useEffect(() => {
    fetch('http://localhost:3000/skills')
      .then(response => response.json())
      .then(data => setSkills(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const = handleSubmit=(e) => {
    e.preventDefault();
    fetch('http://localhost:3000/skills', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(newSkill => setSkills([...skills, newSkill]));
    setFormData({ name: '', level: '' });
  };

  return (
    <div className="skills">
      <h1>My Skills</h1>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>
            {skill.name} - {skill.level}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Skill Name"
        />
        <input 
          type="text" 
          name="level" 
          value={formData.level} 
          onChange={handleChange} 
          placeholder="Skill Level"
        />
        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
}

export default Skills;

