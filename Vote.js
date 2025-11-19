const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  voterId: {
    type: String,
    required: true,
    unique: true
  },
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Candidate',
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
  timestamp: {
    type: Date,
    default: Date.now
  },
  ipAddress: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Ensure one vote per voter
voteSchema.index({ voterId: 1 }, { unique: true });

module.exports = mongoose.model('Vote', voteSchema);