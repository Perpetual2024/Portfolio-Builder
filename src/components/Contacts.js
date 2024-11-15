import React, { useState, useEffect } from 'react';

function Contact() {
  const [contact, setContact] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/contact')
      .then(response => response.json())
      .then(data => setContact(data));
  }, []);

  return (
    <div>
      <h1>Contact Me</h1>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Address: {contact.address}</p>
    </div>
  );
}

export default Contact;
