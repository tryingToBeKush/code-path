import React from 'react';


const BlogCard = ({ post }) => {
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
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const contentStyle = {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#111827',
  };

  const excerptStyle = {
    color: '#4b5563',
    flexGrow: 1,
    marginBottom: '1rem',
  };

  const authorStyle = {
    color: '#6b7280',
    fontSize: '0.875rem',
    borderTop: '1px solid #e2e8f0',
    paddingTop: '1rem',
  };

  return (
    <div style={cardStyle}>
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        style={imageStyle}
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/360x200/e2e8f0/6b7280?text=Image'; }}
      />
      <div style={contentStyle}>
        <h2 style={titleStyle}>{post.title}</h2>
        <p style={excerptStyle}>{post.excerpt}</p>
        <div style={authorStyle}>
          By {post.author} on {post.date}
        </div>
      </div>
    </div>
  );
};



const BlogsPage = () => {
 
  const posts = [
    {
      id: 1,
      title: 'Demystifying System Design Interviews',
      excerpt: 'System design interviews can be daunting. In this post, we break down the key concepts you need to know, from scalability to database choices.',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
      author: 'Jane Doe',
      date: 'July 15, 2025',
    },
    {
      id: 2,
      title: 'A Guide to Acing Your Next Coding Challenge',
      excerpt: 'Learn the patterns and strategies to confidently tackle any coding challenge. We cover common pitfalls and tips for writing clean, efficient code.',
      imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
      author: 'John Smith',
      date: 'July 10, 2025',
    },
    {
      id: 3,
      title: 'Why Full-Stack Development is More Relevant Than Ever',
      excerpt: 'Explore the benefits of being a full-stack developer in today\'s job market and how it can accelerate your career growth in the tech industry.',
      imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
      author: 'Emily White',
      date: 'July 5, 2025',
    }
  ];

  const pageStyle = {
    padding: '2rem',
    backgroundColor: '#ffffff',
  };

  const gridStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '1rem',
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', color: '#111827' }}>From the Blog</h1>
      <p style={{ textAlign: 'center', color: '#4b5563', marginTop: '0.5rem', maxWidth: '600px', margin: '0.5rem auto' }}>
        Insights, tutorials, and career advice from the Programming Pathshala team.
      </p>
      <div style={gridStyle}>
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;