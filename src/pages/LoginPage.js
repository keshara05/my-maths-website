import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin

// Styled Components
const LoginContainer = styled(motion.div)`
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

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  z-index: 1;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Input = styled(motion.input)`
  padding: 15px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  color: #333333;
  outline: none;

  &::placeholder {
    color: #999999;
  }
`;

const Button = styled(motion.button)`
  background-color: #6C63FF;
  border: none;
  padding: 15px;
  font-size: 1.2rem;
  color: white;
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

const GoogleButton = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: none;
  padding: 15px;
  font-size: 1.2rem;
  color: #333333;
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

// LoginPage Component
const LoginPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Handle Google Sign-In success
  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google Sign-In Success:', credentialResponse);
    // Add your logic to handle the Google Sign-In response (e.g., send to backend)
  };

  // Handle Google Sign-In failure
  const handleGoogleFailure = () => {
    console.log('Google Sign-In Failed');
  };

  // Handle Sign Up button click
  const handleSignUp = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <LoginContainer
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
        Login
      </Title>

      {/* Form */}
      <Form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Input type="email" placeholder="Your Email" />
        <Input type="password" placeholder="Your Password" />
        <Button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Login
        </Button>

        {/* Google Sign-In Button */}
        <GoogleButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
            text="signin_with" // Use "signin_with" for "Sign in with Google"
            shape="pill" // Use "pill" for rounded corners
            theme="filled_blue" // Use "filled_blue" for a blue theme
          />
        </GoogleButton>

        {/* Sign Up Button */}
        <Button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          onClick={handleSignUp} // Add click handler
        >
          Sign Up
        </Button>
      </Form>
    </LoginContainer>
  );
};

export default LoginPage;