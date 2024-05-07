import React, { useState } from "react";

import "../CSS/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div className="contact-page">
      <h3>
        To discuss a comission or inquire about exhibitions please feel free to
        contact the artist via email
      </h3>
      <h3>Email: stadel.katja@gmx.de</h3>

      <form action="">
        <label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <div>
          <button className="submit-email-button">
            <strong>Send</strong>
          </button>
        </div>
      </form>
      <h2>Follow us on Instagram:</h2>
      <a
        href="https://www.instagram.com/art_by_katja_hh/?igshid=ZG5haXlzdDVmc2M5"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
    </div>
  );
}

export default Contact;
