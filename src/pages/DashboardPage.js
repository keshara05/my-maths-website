import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBook, FaCalendarAlt, FaChartLine, FaCog, FaUser } from 'react-icons/fa'; // Import icons

// Styled Components
const DashboardContainer = styled(motion.div)`
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
  margin-bottom: 40px;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const WelcomeMessage = styled(motion.div)`
  font-size: 1.5rem;
  margin-bottom: 40px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ProgressSection = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  margin-bottom: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ProgressTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #6C63FF;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: #6C63FF;
  border-radius: 10px;
`;

const ProgressText = styled.p`
  font-size: 1.2rem;
  color: #555555;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const RecentCoursesSection = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  margin-bottom: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CourseList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const CourseCard = styled(motion.div)`
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CourseIcon = styled(FaBook)`
  font-size: 2rem;
  color: #6C63FF;
  margin-bottom: 10px;
`;

const CourseTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CourseDescription = styled.p`
  font-size: 1rem;
  color: #555555;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const QuickLinksSection = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const QuickLinksTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #6C63FF;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const QuickLinksList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
`;

const QuickLink = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const QuickLinkIcon = styled.div`
  font-size: 2rem;
  color: #6C63FF;
  margin-bottom: 10px;
`;

const QuickLinkText = styled.p`
  font-size: 1.2rem;
  color: #333333;

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

// DashboardPage Component
const DashboardPage = () => {
  const progress = 75; // Example progress percentage
  const recentCourses = [
    { id: 1, title: 'Algebra Basics', description: 'Learn the fundamentals of algebra.' },
    { id: 2, title: 'Geometry Essentials', description: 'Master the basics of geometry.' },
    { id: 3, title: 'Calculus Intro', description: 'Get started with calculus concepts.' },
  ];

  const quickLinks = [
    { id: 1, icon: <FaBook />, text: 'Courses' },
    { id: 2, icon: <FaCalendarAlt />, text: 'Schedule' },
    { id: 3, icon: <FaChartLine />, text: 'Progress' },
    { id: 4, icon: <FaUser />, text: 'Profile' },
    { id: 5, icon: <FaCog />, text: 'Settings' },
  ];

  return (
    <DashboardContainer
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
        Dashboard
      </Title>

      <WelcomeMessage
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Welcome back, Student! Here's your progress and updates.
      </WelcomeMessage>

      {/* Progress Section */}
      <ProgressSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <ProgressTitle>Your Progress</ProgressTitle>
        <ProgressBar>
          <ProgressFill
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </ProgressBar>
        <ProgressText>{progress}% completed</ProgressText>
      </ProgressSection>

      {/* Recent Courses Section */}
      <RecentCoursesSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <ProgressTitle>Recent Courses</ProgressTitle>
        <CourseList>
          {recentCourses.map((course) => (
            <CourseCard
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + course.id * 0.1 }}
            >
              <CourseIcon />
              <CourseTitle>{course.title}</CourseTitle>
              <CourseDescription>{course.description}</CourseDescription>
            </CourseCard>
          ))}
        </CourseList>
      </RecentCoursesSection>

      {/* Quick Links Section */}
      <QuickLinksSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <QuickLinksTitle>Quick Links</QuickLinksTitle>
        <QuickLinksList>
          {quickLinks.map((link) => (
            <QuickLink
              key={link.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 + link.id * 0.1 }}
            >
              <QuickLinkIcon>{link.icon}</QuickLinkIcon>
              <QuickLinkText>{link.text}</QuickLinkText>
            </QuickLink>
          ))}
        </QuickLinksList>
      </QuickLinksSection>
    </DashboardContainer>
  );
};

export default DashboardPage;