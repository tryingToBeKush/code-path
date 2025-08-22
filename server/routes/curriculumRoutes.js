const express = require('express');
const router = express.Router();
const { getCurriculum } = require('../controllers/curriculumController.js');

router.get('/', getCurriculum);

module.exports = router;

// const Course = require('../models/Course'); // Make sure you have a Course model

// // @desc    Get curriculum data
// // @route   GET /api/curriculum
// // @access  Public
// const getCurriculum = async (req, res) => {
//   // THIS IS THE MOST IMPORTANT LINE TO ADD
//   console.log("--- INSIDE getCurriculum CONTROLLER ---"); 

//   try {
//     const course = await Course.findOne(); // findOne() gets the single course document
//     if (!course) {
//       return res.status(404).json({ success: false, message: "Course data not found in database" });
//     }
//     res.status(200).json({ success: true, course });
//   } catch (error) {
//     console.error("Error fetching curriculum from DB:", error);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };

// module.exports = {
//   getCurriculum,
// };