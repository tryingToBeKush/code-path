const FAQ = require('../models/faqModel.js');

// @desc    Fetch all FAQs
// @route   GET /api/faqs
const getFaqs = async (req, res) => {
  try {
    const faqs = await FAQ.find({});
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getFaqs };