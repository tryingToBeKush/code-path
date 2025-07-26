import React from 'react';

// --- Helper Component for the Event Card ---
const EventCard = ({ event }) => {
  return (
    // Card container
    <div className="bg-white border border-gray-200 rounded-lg shadow-md max-w-sm m-4 overflow-hidden flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
      {/* Event Image */}
      <img 
        className="w-full h-48 object-cover" 
        src={event.imageUrl} 
        alt={`${event.title} banner`}
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x225/e2e8f0/6b7280?text=Event'; }}
      />
      
      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Date and Time */}
        <p className="text-sm font-semibold text-indigo-600 mb-2">{event.date}</p>
        
        {/* Event Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
        
        {/* Location */}
        <div className="flex items-center text-gray-600 mb-4">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
          <span>{event.location}</span>
        </div>
        
        {/* Description */}
        <p className="text-gray-700 text-base mb-6 flex-grow">{event.description}</p>
        
        {/* Register Button */}
        <button className="mt-auto w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Register Now
        </button>
      </div>
    </div>
  );
};



const EventsPage = () => {
  
  const events = [
    {
      id: 1,
      title: 'Live Workshop: Mastering React Hooks',
      date: 'August 5, 2025 @ 7:00 PM IST',
      location: 'Online via Zoom',
      description: 'Join our senior instructor for a deep dive into React Hooks. Learn advanced patterns for state management and side effects.',
      imageUrl: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Career Talk: Landing a Job at a FAANG Company',
      date: 'August 12, 2025 @ 6:00 PM IST',
      location: 'Online via YouTube Live',
      description: 'Hear from our alumni working at top tech companies. Get insights into the interview process and what it takes to succeed.',
      imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Open House: Q&A with our Mentors',
      date: 'August 20, 2025 @ 8:00 PM IST',
      location: 'Online via Google Meet',
      description: 'Have questions about our courses? Join our open house session to talk directly with our experienced mentors and clear your doubts.',
      imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop',
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Upcoming Events
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Join our live events to learn from experts, interact with mentors, and connect with the community.
          </p>
        </div>
        
        {/* Grid for Event Cards */}
        <div className="flex justify-center flex-wrap">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
