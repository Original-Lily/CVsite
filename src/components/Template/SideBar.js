import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Lily Bradshaw</h2>
        <p>My email can be found: <a href="here">buddie9173@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p> Hello there! Im Lily, a passionate student at the <a href="https://www.kent.ac.uk/">University of Kent</a> </p>
      <p> embarking on a journey with a solid foundation as a Cyber Security Analyst, I bring hands-on experience and </p>
      <p> a keen interest in the ever-evolving realm of computer science. </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
