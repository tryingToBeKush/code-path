
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to home after logout
  };

  const handleStartTrial = () => {
    if (!isLoggedIn) {
        alert('Please log in to start a free trial.');
        navigate('/login');
    } else {
        alert('Starting your free trial...');
        // Add payment gateway logic here
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link to="/" className="text-gray-800">Programming Pathshala</Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/courses" className="text-gray-600 hover:text-blue-600">Explore Courses</Link>
          <Link to="/success-stories" className="text-gray-600 hover:text-blue-600">Success Stories</Link>
          <Link to="/blogs" className="text-gray-600 hover:text-blue-600">Blogs</Link>
          <Link to="/events" className="text-gray-600 hover:text-blue-600">Events</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link>
          <Link to="/history" className="text-gray-600 hover:text-blue-600">History</Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="font-semibold text-gray-600">Profile</Link>
              <button onClick={handleLogout} className="font-semibold text-gray-600">Log Out</button>
            </>
          ) : (
            <>
              <Link to="/login" className="font-semibold text-gray-600">Log In</Link>
              <Link to="/signup" className="font-semibold text-gray-600">Sign Up</Link>
            </>
          )}
           <button 
            onClick={handleStartTrial} 
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
