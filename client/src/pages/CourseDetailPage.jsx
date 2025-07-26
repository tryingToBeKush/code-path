import React from 'react';

const CourseDetailPage = ({ course }) => {

  // A dummy course object if you don't have one yet
  if (!course) {
    course = {
      _id: 'course123',
      title: 'Swiggy Backend: End to End Project',
      description: 'This project will demonstrate your skills in web development, database integration, and security.',
      tags: ['Springdata JPA', 'MySQL or PostgreSQL', 'Spring Security']
    };
  }
  
  const handleEnroll = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      alert('You must be logged in to enroll!');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/enrollments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ courseId: course._id })
      });

      if (response.status === 400) {
        alert('You are already enrolled in this course.');
        return;
      }
      if (!response.ok) {
        throw new Error('Enrollment request failed');
      }

      alert('✅ Successfully enrolled! Check your History page.');
    } catch (error) {
      console.error('Enrollment Error:', error);
      alert('❌ Failed to enroll. Please try again.');
    }
  };

  return (
    <div className="course-detail-container">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <div>
        {course.tags.map(tag => <span key={tag} className="course-tag">{tag}</span>)}
      </div>
      <button onClick={handleEnroll} className="enroll-now-btn">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetailPage;
