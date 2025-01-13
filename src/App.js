import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  const googleClientId = '1055214343351-hvj81eri2cfc7977o5c9kmhubkeja9ra.apps.googleusercontent.com'; // Replace with your Google Client ID

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Ensure this is correct */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </GoogleOAuthProvider>
  );
};

export default App;