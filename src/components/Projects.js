import React, { useState, useEffect } from 'react';
import '../Project.css'; // Import the external CSS

function Projects() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({ id: null, title: '', description: '', image: '', url: '' });
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch('https://backend-portfolio-builder.onrender.com/projects')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // If editing, send PATCH request
      fetch(`https://backend-portfolio-builder.onrender.com/projects/${formData.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(updatedProject => {
          setProjects(projects.map(proj => (proj.id === updatedProject.id ? updatedProject : proj)));
          setIsEditing(false);
        });
    } else {
      // If adding, send POST request
      fetch('https://backend-portfolio-builder.onrender.com/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(newProject => setProjects([...projects, newProject]));
    }

    setFormData({ id: null, title: '', description: '', image: '', url: '' });
  };

  const handleDelete = (id) => {
    fetch(`https://backend-portfolio-builder.onrender.com/projects/${id}`, {
      method: 'DELETE',
    }).then(() => setProjects(projects.filter(project => project.id !== id)));
  };

  const handleEdit = (project) => {
    setFormData(project);
    setIsEditing(true);
  };

  const handleViewProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="projects-container">
      <h1>{isEditing ? "Edit Project" : "My Projects"}</h1>

      {/* Selected Project Display */}
      {selectedProject && (
        <div className="project-details">
          <h2>{selectedProject.title}</h2>
          <img src={selectedProject.image} alt={selectedProject.title} />
          <p>{selectedProject.description}</p>
          <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">View Live</a>
          <button onClick={() => setSelectedProject(null)}>Close</button>
        </div>
      )}

      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <button className="edit-btn" onClick={() => handleEdit(project)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(project.id)}>Delete</button>
              <button className="view-btn" onClick={() => handleViewProject(project)}>View Project</button>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="project-form">
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Project Title" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Project Description" required />
        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Project Image URL" required />
        <input type="text" name="url" value={formData.url} onChange={handleChange} placeholder="Project URL" required />
        <button type="submit">{isEditing ? "Update Project" : "Add Project"}</button>
      </form>
    </div>
  );
}

export default Projects;
