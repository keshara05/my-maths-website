import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to right, #E6F4F1, #FFFFFF);
  color: #333333;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  color: #6C63FF;
  margin-bottom: 40px;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Content = styled(motion.div)`
  max-width: 800px;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const Text = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555555;
`;

// AboutPage Component
const AboutPage = () => {
  return (
    <AboutContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </Title>
      <Content
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Text>
          At K-Maths, we are dedicated to helping students of all ages master mathematics. Our team of experienced tutors provides personalized lessons tailored to each student's needs. Whether you're preparing for exams or just want to improve your math skills, we're here to help you succeed.
        </Text>
      </Content>
    </AboutContainer>
  );
};

export default AboutPage;