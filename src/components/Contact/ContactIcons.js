// ContactIcons.js
import React from 'react';
import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
} from 'react-icons/fa';

const ContactIcons = () => (
  <div className="icons">
    <a
      href="https://github.com/Original-Lily"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <FaGithub />
    </a>
    <a href="mailto:Contact@FabulousLily.com" aria-label="Email">
      <FaEnvelope />
    </a>
    <a
      href="https://www.linkedin.com/in/charlie-b-44a3231b9/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
    </a>
  </div>
);

export default ContactIcons;
