import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.js';

function Home() {
  const [home, setHome] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://backend-portfolio-builder.onrender.com/home`) 
      .then(response => response.json())
      .then(data => setHome(data))
      .catch(error => console.error("Error fetching home data:", error));
  }, []);

  function handleNavigateToSignUp() {
    navigate('/login');
  }

  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          {home ? (
            <>
              <h1>{home.welcomeMessage}</h1>
              <p>{home.introduction}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
          <button onClick={handleNavigateToSignUp} className="hero-button">
            Get Started
          </button>
         
        </div> 
        <Footer />
      </div>
     
    </div> 
    
  );
}

export default Home;
