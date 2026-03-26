const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  balance: { type: Number, default: 0 },
  profile_pic: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
