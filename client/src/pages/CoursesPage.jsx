import React from 'react';


const CourseCard = ({ course }) => {
  const cardStyle = {
    border: '1px solid #e2e8f0',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    maxWidth: '360px',
    margin: '1rem',
    backgroundColor: 'white',
    overflow: 'hidden', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const imageContainerStyle = {
    padding: '2rem',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc'
  };

  const contentStyle = {
    padding: '1.5rem',
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem'
  };

  const descriptionStyle = {
    color: '#4b5563',
    marginBottom: '1.5rem'
  };

  const tagsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  };

  const tagStyle = {
    backgroundColor: '#eef2ff',
    color: '#4f46e5',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px', // Pill shape
    fontSize: '0.875rem',
    fontWeight: '500'
  };

  return (
    <div style={cardStyle}>
      <div>
        <div style={imageContainerStyle}>
          {/* Using a placeholder for the logo */}
          <img 
            src={course.imageUrl} 
            alt={`${course.title} logo`} 
            style={{ height: '40px' }} 
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x40/f8fafc/4f46e5?text=Logo&font=lato'; }}
          />
        </div>
        <div style={contentStyle}>
          <h2 style={titleStyle}>{course.title}</h2>
          <p style={descriptionStyle}>{course.description}</p>
          <div style={tagsContainerStyle}>
            {course.tags.map(tag => (
              <span key={tag} style={tagStyle}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Main CoursesPage Component ---
const CoursesPage = () => {
  // We'll use static data that matches your screenshot.
  // Later, this data will come from your backend API.
  const courses = [
    {
      id: 'swiggy-backend-1',
      title: 'Swiggy Backend: End to End Project',
      description: 'This project will demonstrate your skills in web development, database integration, and security.',
      imageUrl: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza',
      tags: ['Springdata JPA', 'MySQL or PostgreSQL', 'Spring Security']
    },
  
  ];

  const pageStyle = {
    padding: '2rem',
  };

  const gridStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '1rem',
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700' }}>Explore Our Courses</h1>
      <div style={gridStyle}>
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
