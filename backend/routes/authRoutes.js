const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateRegistration, validateLogin } = require('../middleware/validation');
const { authLimiter, passwordResetLimiter } = require('../middleware/rateLimiter');

// POST /api/auth/register
router.post('/register', authLimiter, validateRegistration, authController.register);

// POST /api/auth/login
router.post('/login', authLimiter, validateLogin, authController.login);

// POST /api/auth/logout
router.post('/logout', authController.logout);

// GET /api/auth/me
router.get('/me', authController.getMe);

// POST /api/auth/forgot-password
router.post('/forgot-password', passwordResetLimiter, authController.forgotPassword);

// PUT /api/auth/reset-password/:token
router.put('/reset-password/:token', authController.resetPassword);

module.exports = router;