const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  party: {
    type: String,
    required: true,
    trim: true
  },
  symbol: {
    type: String,
    required: true
  },
  constituency: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 25
  },
  education: {
    type: String,
    required: true
  },
  criminalRecord: {
    type: Boolean,
    default: false
  },
  assets: {
    type: Number,
    default: 0
  },
  manifesto: {
    type: String,
    maxlength: 1000
  },
  photoUrl: {
    type: String,
    default: ''
  },
  voteCount: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Candidate', candidateSchema);