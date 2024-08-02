import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const timelineData = [
  { year: '2020', event: 'Started learning React' },
  { year: '2021', event: 'Built my first React app' },
  { year: '2022', event: 'Started working as a React developer' },
  { year: '2023', event: 'Contributed to open source projects' },
];

const futureData = [
  { year: '2024', event: 'Future plan 1' },
  { year: '2025', event: 'Future plan 2' },
  { year: '2026', event: 'Future plan 3' },
];

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
`;

const AnimatedLine = styled(motion.div)`
  position: absolute;
  width: 2px; /* Thinner line */
  background: #d3d3d3; /* Lighter grey */
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const StaticDot = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background: red;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  background-color: red;
  z-index: 1;
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  padding: 20px;
  background-image: url('/images/projects/CloakRoom.png'); /* Added background image */
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  width: 100%;
  position: relative;
  color: white; /* Adjust text color for contrast */
`;

const FutureItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  padding: 20px;
  background-image: url('/images/projects/CloakRoom.png'); /* Added background image */
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  width: 100%;
  position: relative;
  color: white; /* Adjust text color for contrast */
  overflow: hidden;
  filter: grayscale(100%); /* Apply grayscale filter */
`;

const FutureOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Grey overlay with some transparency */
  z-index: 1;
  border-radius: 10px;
`;

const Content = styled.div`
  position: relative;
  z-index: 2; /* Ensures text is above the overlay */
`;

const Year = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;

const Event = styled.div`
  font-size: 1em;
  margin-top: 10px;
`;

const timelineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const lineVariants = {
  hidden: { height: 0 },
  visible: { height: '100%', transition: { duration: 1 } },
};

const Timeline = () => {
  const [dotTop, setDotTop] = useState('0px');
  const lastTimelineRef = useRef(null);
  const firstFutureRef = useRef(null);

  useEffect(() => {
    if (lastTimelineRef.current && firstFutureRef.current) {
      const lastTimelinePosition = lastTimelineRef.current
        .getBoundingClientRect().bottom;
      const firstFuturePosition = firstFutureRef.current
        .getBoundingClientRect().top;
      const dotPosition = lastTimelinePosition +
        (firstFuturePosition - lastTimelinePosition) / 2;

      setDotTop(`${dotPosition}px`);
    }
  }, []);

  return (
    <Container>
      <AnimatedLine
        initial="hidden"
        animate="visible"
        variants={lineVariants}
      />
      <StaticDot
        style={{ top: dotTop }}
      />
      {timelineData.map((item, index) => (
        <TimelineItem
          key={item.year}
          ref={index === timelineData.length - 1 ? lastTimelineRef : null}
          initial="hidden"
          animate="visible"
          variants={timelineVariants}
          transition={{ delay: index * 0.3 }}
        >
          <Year>{item.year}</Year>
          <Event>{item.event}</Event>
        </TimelineItem>
      ))}
      {futureData.map((item, index) => (
        <FutureItem
          key={item.year}
          ref={index === 0 ? firstFutureRef : null}
          initial="hidden"
          animate="visible"
          variants={timelineVariants}
          transition={{ delay: (timelineData.length + index) * 0.3 }}
        >
          <FutureOverlay />
          <Content>
            <Year>{item.year}</Year>
            <Event>{item.event}</Event>
          </Content>
        </FutureItem>
      ))}
    </Container>
  );
};

export default Timeline;
