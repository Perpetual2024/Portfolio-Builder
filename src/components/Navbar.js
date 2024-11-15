import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const styles = {
    navbar: {
      position: 'absolute',
      top: '0',
      right: '0',
      display: 'flex',
      padding: '1rem',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    navList: {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%', // Adjust as needed
    },
    navItem: {
      margin: '0 1rem',
      color: 'white',
      cursor: 'pointer',
      padding: '0.5rem 1rem',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
    hoverEffect: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '5px',
    }
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li>
          <Link 
            to="/" 
            style={styles.navItem} 
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverEffect.backgroundColor} 
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/login" 
            style={styles.navItem} 
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverEffect.backgroundColor} 
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Login
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            style={styles.navItem} 
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverEffect.backgroundColor} 
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/projects" 
            style={styles.navItem} 
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverEffect.backgroundColor} 
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="/skills" 
            style={styles.navItem} 
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverEffect.backgroundColor} 
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            style={styles.navItem} 
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverEffect.backgroundColor} 
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
