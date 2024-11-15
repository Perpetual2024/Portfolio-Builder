import React, { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', image: '', url: '' });

  useEffect(() => {
    fetch('http://localhost:3000/projects')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(newProject => setProjects([...projects, newProject]));
    setFormData({ title: '', description: '', image: '', url: '' });
  };

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} className="projectImage" />
            <p>{project.description}</p>
            <a href={project.url} className="projectLink">View Project</a>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="title" 
          value={formData.title} 
          onChange={handleChange} 
          placeholder="Project Title"
        />
        <textarea 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          placeholder="Project Description"
        />
        <input 
          type="text" 
          name="image" 
          value={formData.image} 
          onChange={handleChange} 
          placeholder="Project Image URL"
        />
        <input 
          type="text" 
          name="url" 
          value={formData.url} 
          onChange={handleChange} 
          placeholder="Project URL"
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default Projects;
