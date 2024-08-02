import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';
import Timeline from '../components/Stats/Timeline';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about lily & FabulousLily.com"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
      <Site />
      <Timeline /> {/* Add the Timeline component here */}
    </article>
  </Main>
);

export default Stats;
