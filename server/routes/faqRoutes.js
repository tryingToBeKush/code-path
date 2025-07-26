const express = require('express');
const router = express.Router();
const { getFaqs } = require('../controllers/faqController.js');

router.get('/', getFaqs);

module.exports = router;
