import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const CoursesContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #6C63FF, #FF6B6B, #FFD166, #6C63FF);
  background-size: 300% 300%;
  color: #333333;
  padding: 40px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: gradientAnimation 15s ease infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 40px;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const CourseCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CourseTitle = styled(motion.h3)`
  font-size: 1.8rem;
  font-weight: 600;
  color: #6C63FF;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CourseDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555555;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FloatingCircle = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  z-index: 0;
`;

const FloatingTriangle = styled(motion.div)`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
  border-bottom: 150px solid rgba(255, 255, 255, 0.1);
  z-index: 0;
`;

// CoursesPage Component
const CoursesPage = () => {
  return (
    <CoursesContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating Elements */}
      <FloatingCircle
        initial={{ x: -100, y: -100, scale: 0 }}
        animate={{ x: 0, y: 0, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, type: 'spring' }}
        style={{ top: '10%', left: '10%' }}
      />
      <FloatingTriangle
        initial={{ x: 100, y: 100, scale: 0 }}
        animate={{ x: 0, y: 0, scale: 1 }}
        transition={{ duration: 2, delay: 0.7, type: 'spring' }}
        style={{ bottom: '10%', right: '10%' }}
      />

      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Courses
      </Title>
      <CourseGrid>
        <CourseCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CourseTitle>Grade 06 - 09</CourseTitle>
          <CourseDescription>
            Build a strong foundation in math with topics like algebra, geometry, and arithmetic.
          </CourseDescription>
        </CourseCard>
        <CourseCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <CourseTitle>Grade 10 - 11</CourseTitle>
          <CourseDescription>
            Prepare for exams with advanced topics like trigonometry, calculus, and statistics.
          </CourseDescription>
        </CourseCard>
        <CourseCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CourseTitle>University Students</CourseTitle>
          <CourseDescription>
            Master university-level math, including calculus, linear algebra, and differential equations.
          </CourseDescription>
        </CourseCard>
      </CourseGrid>
    </CoursesContainer>
  );
};

export default CoursesPage;