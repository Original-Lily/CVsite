import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

import Cell from '../components/Contact/Cell';
import data from '../data/gallery';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Lily via email @ hi@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact & Gallery</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
        <p>Here are some other things I have gotten upto: </p>
      </div>
      {data.map((collage) => (
        <Cell
          data={collage}
          key={collage.title}
        />
      ))}
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
