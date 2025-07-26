const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const Mentor = require('./models/mentorModel.js');
const FAQ = require('./models/faqModel.js');
const Curriculum = require('./models/curriculumModel.js'); // <-- ADDED
const mentors = require('./data/mentors.js');
const faqs = require('./data/faqs.js');
const curriculum = require('./data/curriculum.js'); // <-- ADDED

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Mentor.deleteMany();
    await FAQ.deleteMany();
    await Curriculum.deleteMany(); // <-- ADDED

    await Mentor.insertMany(mentors);
    await FAQ.insertMany(faqs);
    await Curriculum.create(curriculum); // <-- Use .create for single object

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Mentor.deleteMany();
    await FAQ.deleteMany();
    await Curriculum.deleteMany(); // <-- ADDED

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}