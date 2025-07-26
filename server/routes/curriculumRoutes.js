const express = require('express');
const router = express.Router();
const { getCurriculum } = require('../controllers/curriculumController.js');

router.get('/', getCurriculum);

module.exports = router;