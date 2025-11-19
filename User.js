const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  voterId: {
    type: String,
    required: true,
    unique: true,
    match: /^[A-Z]{3}[0-9]{7}$/ // Indian Voter ID format
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    match: /^[6-9]\d{9}$/ // Indian mobile number format
  },
  aadharNumber: {
    type: String,
    required: true,
    unique: true,
    match: /^\d{12}$/ // 12-digit Aadhar number
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  constituency: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  hasVoted: {
    type: Boolean,
    default: false
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    enum: ['voter', 'admin'],
    default: 'voter'
  }
}, {
  timestamps: true
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);