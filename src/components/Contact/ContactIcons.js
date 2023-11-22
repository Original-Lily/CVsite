// ContactIcons.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactIcons = () => (
  <div className="icons">
    <a
      href="https://www.linkedin.com/in/lily-bradshaw-03a28b1b7/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
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
  </div>
);

export default ContactIcons;
