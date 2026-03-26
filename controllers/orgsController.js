const Org = require('../models/Org');

exports.getAll = async (req, res) => res.json(await Org.find());
exports.getById = async (req, res) => {
  const o = await Org.findById(req.params.id);
  if (!o) return res.status(404).json({ message: 'Org not found' });
  res.json(o);
};
exports.create = async (req, res) => {
  const org = new Org(req.body);
  await org.save();
  res.status(201).json(org);
};
exports.update = async (req, res) => {
  const org = await Org.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!org) return res.status(404).json({ message: 'Org not found' });
  res.json(org);
};
exports.remove = async (req, res) => {
  const org = await Org.findByIdAndDelete(req.params.id);
  if (!org) return res.status(404).json({ message: 'Org not found' });
  res.json({ message: 'Deleted' });
};
