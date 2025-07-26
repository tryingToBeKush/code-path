import React, { useState, useEffect } from 'react';

const HistoryPage = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError("You must be logged in to view your history.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('http://localhost:8080/api/enrollments/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch history from the server.');
        }
        
        const data = await response.json();
        setEnrollments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []); // The empty array [] means this runs once when the component loads

  if (loading) return <p>Loading your history...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="history-container">
      <h1>My Enrolled Courses</h1>
      {enrollments.length === 0 ? (
        <p>You haven't enrolled in any courses yet.</p>
      ) : (
        <div className="course-list">
          {enrollments.map(item => (
            <div key={item.course._id} className="course-card">
              <h3>{item.course.title}</h3>
              <p>Enrolled on: {new Date(item.enrollmentDate).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryPage;