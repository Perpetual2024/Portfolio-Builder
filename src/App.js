import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NewProject from './components/NewProject';
import Portfolio from './components/Portfolio';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://backend-portfolio-builder.onrender.com/projects')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  function NewProjectProject(newProject) {
    setProjects([...projects, newProject]);
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-project" element={<NewProjectProject addProject={NewProject} />} />
        <Route path="/portfolio" element={<Portfolio projects={projects} />} />
      </Routes>
    </Router>
  );
}

export default App;

