import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Login from './components/Login';
import NavBar from './components/NavBar';
import AddProject from './components/AddProject';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/projects')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-project" element={<AddProject addProject={addProject} />} />
      </Routes>
    </Router>
  );
}

export default App;

