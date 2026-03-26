const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profile_pic: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Artist', artistSchema);
