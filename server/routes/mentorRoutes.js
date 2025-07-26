// server/routes/mentorRoutes.js
const express = require('express');
const router = express.Router();
const { getMentors } = require('../controllers/mentorController.js');

router.get('/', getMentors);

module.exports = router;