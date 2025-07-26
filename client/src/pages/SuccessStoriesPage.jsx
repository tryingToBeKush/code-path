import React from 'react';

// --- Helper Component for the Story Card ---
const StoryCard = ({ story }) => {
  const cardStyle = {
    border: '1px solid #e2e8f0',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    maxWidth: '350px',
    margin: '1rem',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  };

  const quoteStyle = {
    padding: '1.5rem',
    fontStyle: 'italic',
    color: '#374151',
    borderBottom: '1px solid #e2e8f0',
    flexGrow: 1,
  };

  const authorInfoStyle = {
    padding: '1rem 1.5rem',
    backgroundColor: '#f8fafc',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  };

  const avatarStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const nameStyle = {
    fontWeight: '600',
    fontSize: '1rem',
  };

  const companyStyle = {
    color: '#6b7280',
    fontSize: '0.875rem',
  };

  return (
    <div style={cardStyle}>
      <p style={quoteStyle}>"{story.quote}"</p>
      <div style={authorInfoStyle}>
        <img 
          src={story.imageUrl} 
          alt={story.name} 
          style={avatarStyle}
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/50x50/e2e8f0/6b7280?text=:)'; }}
        />
        <div>
          <div style={nameStyle}>{story.name}</div>
          <div style={companyStyle}>{story.company}</div>
        </div>
      </div>
    </div>
  );
};


// --- Main SuccessStoriesPage Component ---
const SuccessStoriesPage = () => {
  // Static data for success stories. This would come from your backend.
  const stories = [
    {
      id: 1,
      name: 'Priya Sharma',
      company: 'Placed at Google',
      quote: 'The data structures course was incredibly thorough. The mentors at Programming Pathshala helped me build the confidence to crack one of the toughest interviews.',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Rohan Verma',
      company: 'Placed at Amazon',
      quote: 'The end-to-end projects gave me the practical experience I needed. I could talk about my work with real conviction during the interviews.',
      imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Anjali Singh',
      company: 'Placed at Microsoft',
      quote: 'I was struggling with system design, but the structured curriculum and mock interviews made all the difference. Highly recommended!',
      imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop',
    }
  ];

  const pageStyle = {
    padding: '2rem',
    backgroundColor: '#f9fafb',
  };

  const gridStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '1rem',
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', color: '#111827' }}>Our Success Stories</h1>
      <p style={{ textAlign: 'center', color: '#4b5563', marginTop: '0.5rem', maxWidth: '600px', margin: '0.5rem auto' }}>
        We are proud of our students who have landed their dream jobs at top tech companies. Here are some of their stories.
      </p>
      <div style={gridStyle}>
        {stories.map(story => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default SuccessStoriesPage;