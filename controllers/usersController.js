const User = require('../models/User');

exports.getAll = async (req, res, next) => {
  const users = await User.find();
  res.json(users);
};

exports.getById = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

exports.create = async (req, res, next) => {
  try {
    const { name, email, balance, profile_pic } = req.body;
    const user = new User({ name, email, balance, profile_pic });
    await user.save();
    return res.status(201).json(user);
  } catch (err) {    
    // Duplicate key (unique index) for email
    if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
      return res.status(409).json({ message: 'Email already in use' });
    }    
    // Validation or other mongoose errors    
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });    
    }    
    // Pass other errors to centralized error handler    
    return next(err);  }
};

exports.update = async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

exports.remove = async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'Deleted' });
};
