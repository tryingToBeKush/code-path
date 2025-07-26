// server/controllers/mentorController.js
const Mentor = require('../models/mentorModel');

// @desc    Fetch all mentors
// @route   GET /api/mentors
const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find({});
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getMentors };