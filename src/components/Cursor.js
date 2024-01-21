import React, { useEffect, useState } from 'react';
import './Cursor.css';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [largecircle, setlargecircle] = useState({ x: 0, y: 0 });
  const [smallcircle, setsmallcircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e) => {
      setlargecircle({ x: e.clientX, y: e.clientY });
      setsmallcircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mousemove);

    return () => {
      window.removeEventListener('mousemove', mousemove);
    };
  }, []);

  return (
    <div>
      {/* eslint-disable-next-line react/self-closing-comp */}
      <motion.div animate={{ x: largecircle.x - 32, y: largecircle.y - 32, transition: { type: 'spring', mass: 3 } }} className="Large_circle" />
      {/* eslint-disable-next-line react/self-closing-comp */}
      <motion.div animate={{ x: smallcircle.x - 8, y: smallcircle.y - 8, transition: { type: 'spring', mass: 2 } }} className="Small_circle" />
    </div>
  );
};

export default Cursor;
