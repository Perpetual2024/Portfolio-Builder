import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track successful login

  const navigate = useNavigate(); // React Router navigation

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setMessage("Error: Please insert login details.");
      setIsLoggedIn(false);
    } else {
      setMessage("Success: Login details submitted.");
      setIsLoggedIn(true); // Set login state to true
      // Additional logic to handle login can be added here (e.g., API request)
    }
  };

  const handleNext = () => {
    navigate("/about"); // Navigate to the About component
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
      padding: '2rem',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'pink',
      maxWidth: '400px',
      width: '100%',
    },
    input: {
      padding: '1rem',
      margin: '0.5rem 0',
      borderRadius: '5px',
      border: '1px solid #ddd',
      fontSize: '1rem',
    },
    button: {
      padding: '1rem',
      margin: '1rem 0',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    message: {
      marginTop: '1rem',
      textAlign: 'center',
      fontSize: '1rem',
    },
    error: {
      color: 'red',
    },
    success: {
      color: 'green',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          style={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
        >
          Login
        </button>
        {message && (
          <p
            style={{
              ...styles.message,
              ...(message.startsWith("Error")
                ? styles.error
                : styles.success),
            }}
          >
            {message}
          </p>
        )}
        {isLoggedIn && (
          <button
            onClick={handleNext}
            style={{
              ...styles.button,
              backgroundColor: '#28a745',
              onMouseEnter: (e) => e.target.style.backgroundColor = '#1e7e34',
              onMouseLeave: (e) => e.target.style.backgroundColor = '#28a745',
            }}
          >
            Next
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
