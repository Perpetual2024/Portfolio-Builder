import React, { useState, useEffect } from 'react';

function Home() {
  const [homeData, setHomeData] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/home')
      .then(response => response.json())
      .then(data => setHomeData(data));
  }, []);

  const toggleTheme = () => { setIsDarkMode(!isDarkMode); };

  const styles = 
  { home: 
    { backgroundImage: `url(' https://stacycorwin.com/wp-content/uploads/2018/12/sunrise-sunset.jpg')` , 
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
        fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }, introduction: { fontSize: '1.5rem', lineHeight: '1.5', fontStyle: 'italic' } };

  return (
    <div className='home-container' style={styles.home}>
      <button style={styles.button} onClick={toggleTheme}> Switch to {isDarkMode ? 'Light' : 'Dark'} Mode </button>
      <h1 className='header' style={styles.welcomeMessage}>{homeData.welcomeMessage}</h1>
      <p className='header-info' style={styles.introduction}>{homeData.introduction}</p>
    </div>
  );
}

export default Home;

