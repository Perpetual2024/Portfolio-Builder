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
  
  const handleDelete = () => { setAboutData({ name: '', bio: '', profileImage: '' }); };
  

  const styles = {
    about: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f9f9f9',
    },
    section: {
      marginBottom: '20px',
      width: '100%',
      maxWidth: '600px',
      textAlign: 'center',
      backgroundColor: 'white',
      padding: '20px',
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
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      width: '100%',
      maxWidth: '600px',
    },
    input: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      fontSize: '1rem',
    },
    button: {
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.about}>
      <h1>About Me</h1>
      <div style={styles.section}>
        <img src={aboutData.profileImage} alt="Profile" style={styles.profileImage} />
        <p><strong>Name:</strong> {aboutData.name}</p>
        <p><strong>Bio:</strong> {aboutData.bio}</p>
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Name" 
          style={styles.input}
        />
        <input 
          type="text" 
          name="bio" 
          value={formData.bio} 
          onChange={handleChange} 
          placeholder="Bio" 
          style={styles.input}
        />
        <input 
          type="text" 
          name="profileImage" 
          value={formData.profileImage} 
          onChange={handleChange} 
          placeholder="Profile Image URL" 
          style={styles.input}
        />
        <button 
          type="submit" 
          style={styles.button}
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default About;
