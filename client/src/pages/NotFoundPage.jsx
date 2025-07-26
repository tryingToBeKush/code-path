import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-6xl font-extrabold text-indigo-600">404</h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-600">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;