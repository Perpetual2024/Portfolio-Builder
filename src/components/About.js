import React, { useState, useEffect } from 'react';

function About() {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/about')
      .then(response => response.json())
      .then(data => setAboutData(data));
  }, []);

  return (
    <div>
      <h1>About Me</h1>
      <img src={aboutData.profileImage} alt="Profile" />
      <p>Name: {aboutData.name}</p>
      <p>Bio: {aboutData.bio}</p>
    </div>
  );
}

export default About;
