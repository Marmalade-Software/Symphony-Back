const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  org_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Org', required: true },
  name: { type: String, required: true },
  event_pic: { type: String, default: '' },
  artists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }],
  date: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
