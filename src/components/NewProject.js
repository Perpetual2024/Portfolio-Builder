import React, { useState } from 'react';

function AddProject({ addProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const newProject = { title, description, image, url };
    
    fetch('http://localhost:3000/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProject),
    })
    .then(response => response.json())
    .then(data => {
      addProject(data);
      setTitle(''); 
      setDescription('');
      setImage('');
      setUrl('');
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Project Title" 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Project Description"
      />
      <input 
        type="text" 
        value={image} 
        onChange={(e) => setImage(e.target.value)} 
        placeholder="Project Image URL"
      />
      <input 
        type="text" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        placeholder="Project URL"
      />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default AddProject;
