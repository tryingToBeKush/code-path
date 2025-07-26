const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Import all routes
const mentorRoutes = require('./routes/mentorRoutes');
const faqRoutes = require('./routes/faqRoutes');
const curriculumRoutes = require('./routes/curriculumRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

connectDB();

const app = express();

// Middlewares must be here, BEFORE the routes
app.use(cors());
app.use(express.json()); // This line parses JSON bodies

// Routes
app.use('/api/mentors', mentorRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/curriculum', curriculumRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));