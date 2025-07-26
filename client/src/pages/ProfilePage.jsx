
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user, isLoggedIn } = useAuth();

  // If the user is not logged in, redirect them to the login page
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Name</h2>
          <p className="text-gray-900">{user.name}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Email</h2>
          <p className="text-gray-900">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;