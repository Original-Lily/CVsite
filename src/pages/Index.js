import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import CutePixelImage from './CutePixel.gif';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
            or you can check out my {' '}
            <Link to="/resume">resume</Link>, {' '}
            <Link to="/contact">gallery</Link>, & {' '}
            <Link to="/projects">projects</Link>,... or just {' '}
            or <Link to="/contact">contact</Link> me!
          </p>
        </div>
      </header>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={CutePixelImage}
          alt="Cute Pixel"
          style={{ width: '100%', height: 'auto' }}
        />
      </div><br />
      <p> Source code available <a href="https://github.com/Original-Lily/CVsite">here</a>.</p>
    </article>
  </Main>
);

export default Index;
