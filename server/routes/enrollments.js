const express = require('express');
const router = express.Router();

// --- In-Memory Database (for demonstration purposes) ---
// In a real application, this data would be in a database like MongoDB or PostgreSQL.
const enrollmentsDB = [
    // This array will be populated when users enroll.
    // Example entry: { userId: 'user789', courseId: 'course456', enrollmentDate: new Date() }
];

// In a real application, you would also have a courses database.
const coursesDB = [
    { _id: 'course123', title: 'Swiggy Backend: End to End Project' },
    { _id: 'course456', title: 'Full Stack Web Development' },
    { _id: 'course789', title: 'Data Structures and Algorithms' }
];


// --- Authentication Middleware (Placeholder) ---
// This function simulates checking a token and adding the user's info to the request.
// In a real app, you would use a library like 'jsonwebtoken' to verify a real token.
const authMiddleware = (req, res, next) => {
  // For this example, we'll hardcode a user ID onto the request object.
  // This simulates a user being successfully logged in.
  req.user = { id: 'user789' }; 
  console.log('Auth Middleware: User user789 authenticated.');
  next(); // Pass control to the next handler (the route logic).
};


// --- LOGIC FOR "ENROLL NOW" ---
// @route   POST /api/enrollments
// @desc    Enroll a user in a course
router.post('/', authMiddleware, async (req, res) => {
  const { courseId } = req.body;
  const userId = req.user.id; // Extracted from middleware

  if (!courseId) {
    return res.status(400).json({ msg: 'Course ID is required.' });
  }

  // 1. Check if enrollment already exists in our fake database.
  const existingEnrollment = enrollmentsDB.find(
    (enrollment) => enrollment.userId === userId && enrollment.courseId === courseId
  );

  if (existingEnrollment) {
    console.log(`Enrollment failed: User ${userId} already enrolled in course ${courseId}.`);
    return res.status(400).json({ msg: 'User is already enrolled in this course.' });
  }
  
  // 2. Create and save the new enrollment.
  const newEnrollment = {
    userId: userId,
    courseId: courseId,
    enrollmentDate: new Date()
  };
  enrollmentsDB.push(newEnrollment);

  console.log(`✅ Enrollment successful: User ${userId} enrolled in course ${courseId}.`);
  console.log('Current Enrollments:', enrollmentsDB);
  res.status(201).json({ msg: 'Enrollment successful', enrollment: newEnrollment });
});


// --- LOGIC FOR "HISTORY" ---
// @route   GET /api/enrollments/me
// @desc    Get all courses a user is enrolled in
router.get('/me', authMiddleware, async (req, res) => {
    const userId = req.user.id;

    // 1. Find all enrollments for this user in our fake database.
    const userEnrollments = enrollmentsDB.filter(enrollment => enrollment.userId === userId);

    // 2. "Populate" the course data for each enrollment by looking it up in the coursesDB.
    const populatedEnrollments = userEnrollments.map(enrollment => {
        const courseDetails = coursesDB.find(course => course._id === enrollment.courseId);
        return {
            enrollmentDate: enrollment.enrollmentDate,
            course: courseDetails || { _id: enrollment.courseId, title: 'Unknown Course' }
        };
    });

    console.log(`✅ Fetched history for user ${userId}. Found ${populatedEnrollments.length} enrollments.`);
    res.status(200).json(populatedEnrollments);
});


// Export the router so it can be used in your main server file (e.g., app.js or server.js)
module.exports = router;