import React, { useState, useEffect } from 'react';


function Contact() {
  const [contact, setContact] = useState({ email: '', phone: '', address: '' });
  const [formData, setFormData] = useState({ email: '', phone: '', address: '' });

  useEffect(() => {
    fetch('https://backend-portfolio-builder.onrender.com/contact')
      .then(response => response.json())
      .then(data => setContact(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://backend-portfolio-builder.onrender.com/contact', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => setContact(data));
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Address: {contact.address}</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Email"
        />
        <input 
          type="text" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          placeholder="Phone"
        />
        <input 
          type="text" 
          name="address" 
          value={formData.address} 
          onChange={handleChange} 
          placeholder="Address"
        />
        <button type="submit">Update Contact</button>
      </form>
    </div>
  );
}

export default Contact;
