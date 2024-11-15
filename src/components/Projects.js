import React, { useState, useEffect } from 'react'; 
function Projects() { const [projects, setProjects] = useState([]); 
  useEffect(() => { fetch('http://localhost:3000/projects') 
    .then(response => response.json()) 
    .then(data => setProjects(data)); },
     []);
     return ( <div> <h1>My Projects</h1> 
     <ul> {projects.map(project => ( <li key={project.id}>
       <h2>{project.title}</h2>
        <img src={project.image} alt={project.title} />
         <p>{project.description}</p> 
         <a href={project.url}>View Project</a> 
         </li> 
        ))} 
         </ul>
          </div> ); }
          export default Projects;