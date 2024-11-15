import React, { useState, useEffect } from 'react';


function About() {
  const [aboutData, setAboutData] = useState({ name: '', bio: '', profileImage: '' });
  const [formData, setFormData] = useState({ name: '', bio: '', profileImage: '' });

  useEffect(() => {
    fetch('http://localhost:3000/about')
      .then(response => response.json())
      .then(data => setAboutData(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/about', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => setAboutData(data));
  };

  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={aboutData.profileImage} alt="Profile" className="profileImage" />
      <p>Name: {aboutData.name}</p>
      <p>Bio: {aboutData.bio}</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Name"
        />
        <input 
          type="text" 
          name="bio" 
          value={formData.bio} 
          onChange={handleChange} 
          placeholder="Bio"
        />
        <input 
          type="text" 
          name="profileImage" 
          value={formData.profileImage} 
          onChange={handleChange} 
          placeholder="Profile Image URL"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default About;
