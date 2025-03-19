import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  const [home, setHome] = useState(null); // Initialize with null to avoid undefined errors
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
            {home ? <h1>{home.welcomeMessage}</h1> : <p>Loading...</p>}
            {home ? <h1>{home.introduction}</h1> : <p>Loading...</p>}
            <button onClick={handleNavigateToSignUp}>Get Started</button>

            
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default Home;
