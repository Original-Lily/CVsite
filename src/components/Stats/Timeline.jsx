import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Define your timeline and future data with image URLs
const timelineData = [
  { year: '2015', event: 'Chosen Hill School', image: '/images/timeline/chosen.png' },
  { year: '2022', event: 'University of Kent', image: '/images/timeline/kent.png' },
  { year: '2024', event: '[redacted] Internship', image: '/images/timeline/tower.png' },
];

const futureData = [
  { year: '2025', event: '[redacted] Year in Industry', image: '/images/timeline/yearin.png' },
  { year: '2026', event: 'Imperial College London', image: '/images/timeline/imperial.png' },
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

const TimelineItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  padding: 20px;
  background-image: url(${(props) => props.image}); /* Unique background image */
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
  align-items: center; /* Center alignment */
  margin: 40px 0;
  padding: 20px;
  background-image: url(${(props) => props.image}); /* Unique background image */
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
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the text content */
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
  const lastTimelineRef = useRef(null);
  const firstFutureRef = useRef(null);

  return (
    <Container>
      <AnimatedLine
        initial="hidden"
        animate="visible"
        variants={lineVariants}
      />
      {timelineData.map((item, index) => (
        <TimelineItem
          key={item.year}
          ref={index === timelineData.length - 1 ? lastTimelineRef : null}
          image={item.image} /* Pass the unique image URL */
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
          image={item.image} /* Pass the unique image URL */
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
