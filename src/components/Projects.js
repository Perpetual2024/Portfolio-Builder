import React, { useState, useEffect } from 'react';

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
    fetch('https://backend-portfolio-builder.onrender.com/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(newProject => setProjects([...projects, newProject]));
    setFormData({ title: '', description: '', image: '', url: '' });
  };

  const handleDelete = (id) => {
    fetch(`https://backend-portfolio-builder.onrender.com/projects/${id}`, {
      method: 'DELETE',
    })
    .then(() => setProjects(projects.filter(project => project.id !== id)));
  };

  return (
    <div style={{ padding: '20px' , backgroundImage : `url('http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTlB4oYLZO9CqtWbJRAjtUQd5Zgrq2yhLpf1qeN9Sr2oUfnng58PfEXf1MGURaYr58VJXFLh2rNGwoNgB2aDB0') `}  }>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>My Projects</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {projects.map(project => (
          <li key={project.id} style={{
            padding: '20px',
            backgroundColor: '#f9f9f9',
            marginBottom: '20px',
            borderRadius: '10px',
            position: 'relative'
          }}>
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px'
            }} />
            <p>{project.description}</p>
            <a href={project.url} style={{
              display: 'block',
              marginTop: '10px',
              color: '#007bff',
              textDecoration: 'none'
            }}>View Project</a>
            <button onClick={() => handleDelete(project.id)} style={{
              padding: '10px 20px',
              backgroundColor: '#ff1744',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              position: 'absolute',
              top: '10px',
              right: '10px'
            }}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <input 
          type="text" 
          name="title" 
          value={formData.title} 
          onChange={handleChange} 
          placeholder="Project Title" 
          style={{ padding: '10px' }}
        />
        <textarea 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          placeholder="Project Description" 
          style={{ padding: '10px' }}
        />
        <input 
          type="text" 
          name="image" 
          value={formData.image} 
          onChange={handleChange} 
          placeholder="Project Image URL" 
          style={{ padding: '10px' }}
        />
        <input 
          type="text" 
          name="url" 
          value={formData.url} 
          onChange={handleChange} 
          placeholder="Project URL" 
          style={{ padding: '10px' }}
        />
        <button type="submit" style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>Add Project</button>
      </form>
    </div>
  );
}

export default Projects;
