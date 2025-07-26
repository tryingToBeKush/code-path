const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  enrollUser,
  getUserProfile, // <-- Import
} = require('../controllers/userController.js');
const { protect } = require('../middleware/authMiddleware.js');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/enroll', protect, enrollUser);
router.get('/profile', protect, getUserProfile); // <-- ADDED

module.exports = router;