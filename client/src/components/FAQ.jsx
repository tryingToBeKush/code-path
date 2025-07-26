import React, { useState, useEffect } from 'react';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    const fetchFaqs = async () => {
      const response = await fetch('http://localhost:5000/api/faqs');
      const data = await response.json();
      setFaqs(data);
    };
    fetchFaqs();
  }, []);

  return (
    <div>
    
      <h2>Frequently Asked Questions</h2>
      {faqs.map(faq => (
        <div key={faq._id}>
          <h4>{faq.question}</h4>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};
export default FAQ;