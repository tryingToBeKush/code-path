// =================================================================
// FILE: src/main.jsx
// PURPOSE: This is the entry point of your application.
// It's the ONLY place where <BrowserRouter> should be used.
// =================================================================

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter here

import App from './App.jsx'; // Import the main App component
import './index.css'; // Import global styles

// Find the root element in your public/index.html
const rootElement = document.getElementById('root');

// Create the root of your React application
const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
  <React.StrictMode>
    {/* The ONE AND ONLY router for the entire app. It wraps the App component. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
