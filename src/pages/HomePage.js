import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// Styled Components
const HomeContainer = styled(motion.div)`
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

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SpecialK = styled(motion.span)`
  font-size: 4rem;
  font-weight: 900;
  color: #ffffff;
  margin-right: 10px;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LogoText = styled(motion.span)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 20px;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 40px;
  color: #ffffff;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Button = styled(motion.button)`
  background-color: #ffffff;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  color: #6C63FF;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
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

// HomePage Component
const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  // Simulate loading data (e.g., from an API)
  useEffect(() => {
    console.log('HomePage useEffect triggered'); // Debugging

    // Simulate an async operation (e.g., fetching data)
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
      setIsLoaded(true); // Update state after "loading" is complete
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  // Handle "Get Started" button click
  const handleGetStarted = () => {
    navigate('/login'); // Navigate to the dashboard page
  };

  return (
    <HomeContainer
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

      {/* Title */}
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Welcome to K-Maths
      </Title>

      {/* Subtitle */}
      <Subtitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Your journey to mastering mathematics starts here.
      </Subtitle>

      {/* Button */}
      <Button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={handleGetStarted} // Add click handler
      >
        Get Started
      </Button>
    </HomeContainer>
  );
};

export default HomePage;