const Artist = require('../models/Artist');

exports.getAll = async (req, res) => res.json(await Artist.find());
exports.getById = async (req, res) => {
  const a = await Artist.findById(req.params.id);
  if (!a) return res.status(404).json({ message: 'Artist not found' });
  res.json(a);
};
exports.create = async (req, res) => {
  const artist = new Artist(req.body);
  await artist.save();
  res.status(201).json(artist);
};
exports.update = async (req, res) => {
  const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!artist) return res.status(404).json({ message: 'Artist not found' });
  res.json(artist);
};
exports.remove = async (req, res) => {
  const artist = await Artist.findByIdAndDelete(req.params.id);
  if (!artist) return res.status(404).json({ message: 'Artist not found' });
  res.json({ message: 'Deleted' });
};
