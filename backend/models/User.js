const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name cannot exceed 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [50, 'Last name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false
  },
  phone: {
    type: String,
    trim: true,
    match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
  },
  graduationYear: {
    type: Number,
    min: [2010, 'Graduation year must be 2010 or later'],
    max: [new Date().getFullYear() + 4, 'Invalid graduation year']
  },
  degreeProgram: {
    type: String,
    enum: [
      'BS Computer Science',
      'BS Electrical Engineering', 
      'BS Mechanical Engineering',
      'BBA',
      'MBA',
      'MS Computer Science',
      'MS Electrical Engineering',
      'Other'
    ]
  },
  currentPosition: {
    type: String,
    trim: true,
    maxlength: [200, 'Current position cannot exceed 200 characters']
  },
  currentLocation: {
    type: String,
    trim: true,
    maxlength: [100, 'Current location cannot exceed 100 characters']
  },
  membershipType: {
    type: String,
    enum: ['Basic', 'Premium', 'Lifetime'],
    default: 'Basic'
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  profilePicture: {
    type: String
  },
  bio: {
    type: String,
    maxlength: [500, 'Bio cannot exceed 500 characters']
  },
  socialLinks: {
    linkedin: String,
    twitter: String,
    facebook: String,
    website: String
  },
  skills: [{
    type: String,
    trim: true
  }],
  interests: [{
    type: String,
    trim: true
  }],
  lastLogin: {
    type: Date
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  emailVerificationToken: String,
  passwordResetToken: String,
  passwordResetExpires: Date
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for full name
userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// Index for better query performance
userSchema.index({ email: 1 });
userSchema.index({ graduationYear: 1 });
userSchema.index({ degreeProgram: 1 });
userSchema.index({ currentLocation: 1 });
userSchema.index({ membershipType: 1 });
userSchema.index({ 
  firstName: 'text', 
  lastName: 'text', 
  currentPosition: 'text',
  currentLocation: 'text'
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Update lastLogin on successful authentication
userSchema.methods.updateLastLogin = function() {
  this.lastLogin = new Date();
  return this.save({ validateBeforeSave: false });
};

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  if (!this.password) return false;
  return await bcrypt.compare(candidatePassword, this.password);
};

// Generate email verification token
userSchema.methods.generateEmailVerificationToken = function() {
  const crypto = require('crypto');
  const token = crypto.randomBytes(32).toString('hex');
  this.emailVerificationToken = crypto.createHash('sha256').update(token).digest('hex');
  return token;
};

// Generate password reset token
userSchema.methods.generatePasswordResetToken = function() {
  const crypto = require('crypto');
  const resetToken = crypto.randomBytes(32).toString('hex');
  
  this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
  
  return resetToken;
};

module.exports = mongoose.model('User', userSchema);