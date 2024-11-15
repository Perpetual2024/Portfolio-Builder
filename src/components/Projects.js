import React, { useState, useEffect } from 'react'; 
function Projects() { const [projects, setProjects] = useState([]); 
  useEffect(() => { fetch('http://localhost:3000/projects') 
    .then(response => response.json()) 
    .then(data => setProjects(data)); },
     []);