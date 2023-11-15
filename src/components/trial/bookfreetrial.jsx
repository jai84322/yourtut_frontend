// BookFreeTrial.jsx

import React, { useState } from 'react';
import './bookfreetrial.css';

const BookFreeTrial = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // You can access form data using formData.name, formData.email, formData.phoneNumber
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Book Your Free Trial</h1>
      </header>
      <main className="content">
        <form className="trial-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Your Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Book Free Trial</button>
        </form>
        {/* <p>Already have an account? <a href="/login">Log in here</a></p> */}
      </main>
    </div>
  );
};

export default BookFreeTrial;
