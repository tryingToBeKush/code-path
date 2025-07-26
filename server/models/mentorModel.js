// server/models/mentorModel.js
const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  company: { type: String },
  imageUrl: { type: String, required: true },
});

const Mentor = mongoose.model('Mentor', mentorSchema);
module.exports = Mentor;