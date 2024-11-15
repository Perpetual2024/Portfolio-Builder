import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom/dist';
function Home() {
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    fetch('https://backend-portfolio-builder.onrender.com/home')
      .then(response => response.json())
      .then(data => setHomeData(data));
  }, []);
  const navigate = useNavigate();


  const styles = 
  { home: 
    { backgroundImage: `url(' http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTlB4oYLZO9CqtWbJRAjtUQd5Zgrq2yhLpf1qeN9Sr2oUfnng58PfEXf1MGURaYr58VJXFLh2rNGwoNgB2aDB0')` , 
       backgroundSize: 'cover', backgroundPosition: 'center',
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
         alignItems: 'center',
          color: 'black', 
          textAlign: 'center', 
          padding: '20px' 
        },
       welcomeMessage: { 
        fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', fontSize: ' 100px' }, 
        introduction: { fontSize: '1.5rem', lineHeight: '1.5', fontStyle: 'italic' 

        },
        button: {
          padding: '10px 20px',  
          border: 'none', borderRadius: '5px',
           cursor: 'pointer', marginTop: '20px',
            transition: 'background-color 0.3s ease'
        }
       };

  return (
    <div className='home-container' style={styles.home}>
      <h1 className='header' style={styles.welcomeMessage}>{homeData.welcomeMessage}</h1>
      <p className='header-info' style={styles.introduction}>{homeData.introduction}</p>
      <p  style={{fontFamily: 'fantasy', fontSize: '2rem'}}>

Unleash Your Potential, Build Your Future

Are you a student looking to stand out in today’s competitive world? The Student Portfolio Builder app is your one-stop solution to showcase your skills, achievements, and projects like a pro! Whether you're applying for internships, jobs, or academic programs</p>
      
      <button style={styles.button} onClick={() => navigate('/login')}> Get Started </button>
    </div>
  );
}

export default Home;

