const Event = require('../models/Event');

exports.getAll = async (req, res) => {
  const events = await Event.find().populate('org_id artists');
  res.json(events);
};

exports.getById = async (req, res) => {
  const ev = await Event.findById(req.params.id).populate('org_id artists');
  if (!ev) return res.status(404).json({ message: 'Event not found' });
  res.json(ev);
};

exports.create = async (req, res) => {
  const { org_id, name, event_pic, artists, date } = req.body;
  const ev = new Event({ org_id, name, event_pic, artists, date });
  await ev.save();
  res.status(201).json(ev);
};

exports.update = async (req, res) => {
  const ev = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!ev) return res.status(404).json({ message: 'Event not found' });
  res.json(ev);
};

exports.remove = async (req, res) => {
  const ev = await Event.findByIdAndDelete(req.params.id);
  if (!ev) return res.status(404).json({ message: 'Event not found' });
  res.json({ message: 'Deleted' });
};
