const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  topics: [{ type: String, required: true }],
});

const curriculumSchema = new mongoose.Schema({
  courseTitle: { type: String, required: true },
  modules: [moduleSchema],
});

const Curriculum = mongoose.model('Curriculum', curriculumSchema);

module.exports = Curriculum;