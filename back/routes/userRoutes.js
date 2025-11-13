const express = require('express');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const router = express.Router();

// @route   POST /api/users/signup
// @desc    Register a new user
router.post('/signup', async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: "A user with this email already exists." });
        }

        const user = await User.create({
            username,
            email,
            password,
            role
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ message: "Invalid user data." });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error during signup.", error: error.message });
    }
});

// @route   POST /api/users/login
// @desc    Authenticate user and get token
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: "Invalid email or password." });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error during login.", error: error.message });
    }
});

module.exports = router;
