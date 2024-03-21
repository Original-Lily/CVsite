// ContactIcons.js
import React from 'react';
import { FaGithub, FaEnvelope, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactIcons = () => (
  <div className="icons">
    <a
      href="https://www.instagram.com/_original_lily"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>
    <a
      href="https://github.com/Original-Lily"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <FaGithub />
    </a>
    <a href="mailto:buddie9173@gmail.com" aria-label="Email">
      <FaEnvelope />
    </a>
    <a
      href="https://www.linkedin.com/in/charlie-b-44a3231b9/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedinIn />
    </a>
  </div>
);

export default ContactIcons;
