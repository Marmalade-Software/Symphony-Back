const mongoose = require('mongoose');

const orgSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, default: '' },
  profile_pic: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Org', orgSchema);
