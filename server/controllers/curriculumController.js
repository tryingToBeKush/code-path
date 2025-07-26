const Curriculum = require('../models/curriculumModel.js');

// @desc    Fetch the course curriculum
// @route   GET /api/curriculum
const getCurriculum = async (req, res) => {
  try {
    const curriculum = await Curriculum.findOne({});
    if (curriculum) {
      res.json(curriculum);
    } else {
      res.status(404).json({ message: 'Curriculum not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getCurriculum };