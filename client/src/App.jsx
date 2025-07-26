
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';
import SuccessStoriesPage from './pages/SuccessStoriesPage.jsx';
import BlogsPage from './pages/BlogsPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import HistoryPage from './pages/HistoryPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;