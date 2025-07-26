const User = require('../models/userModel.js');
const generateToken = require('../utils/generateToken.js');

// @desc    Register a new user
const registerUser = async (req, res) => {
  // ... (existing registerUser function code)
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isEnrolled: user.isEnrolled,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Auth user & get token
const loginUser = async (req, res) => {
  // ... (existing loginUser function code)
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isEnrolled: user.isEnrolled,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Enroll a user in the course
const enrollUser = async (req, res) => {
  // ... (existing enrollUser function code)
  try {
        const user = await User.findById(req.user._id);

        if (user) {
            user.isEnrolled = true;
            const updatedUser = await user.save();
            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                isEnrolled: updatedUser.isEnrolled,
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// ADD THIS FUNCTION
// @desc    Get user profile
// @route   GET /api/users/profile
const getUserProfile = async (req, res) => {
    // req.user is set by the protect middleware
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isEnrolled: user.isEnrolled,
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

module.exports = { registerUser, loginUser, enrollUser, getUserProfile };