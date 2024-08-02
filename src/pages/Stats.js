import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Timeline from '../components/Stats/Timeline';

const Stats = () => (
  <Main
    title="Timeline"
    description="Some statistics about lily & FabulousLily.com"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link to="/stats">Timeline</Link></h2>
        </div>
      </header>
      <Timeline />         {/* for stats add: <Personal /> OR <Site /> */}
    </article>
  </Main>
);

export default Stats;
