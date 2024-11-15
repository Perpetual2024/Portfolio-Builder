import React, { useState, useEffect } from 'react';
function Home() {
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/home')
      .then(response => response.json())
      .then(data => setHomeData(data));
  }, []);

  return (
    <div>
      <h1>{homeData.welcomeMessage}</h1>
      <p>{homeData.introduction}</p>
    </div>
  );
}

export default Home;

