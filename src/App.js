import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Login from './components/Login';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

