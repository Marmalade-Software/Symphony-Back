const Cart = require('../models/Cart');

exports.getAll = async (req, res) => {
  const carts = await Cart.find().populate('user_id event_id');
  res.json(carts);
};

exports.getByUser = async (req, res) => {
  const carts = await Cart.find({ user_id: req.params.userId }).populate('event_id');
  res.json(carts);
};

exports.create = async (req, res) => {
  const { user_id, event_id } = req.body;
  const cart = new Cart({ user_id, event_id });
  await cart.save();
  res.status(201).json(cart);
};

exports.remove = async (req, res) => {
  const c = await Cart.findByIdAndDelete(req.params.id);
  if (!c) return res.status(404).json({ message: 'Cart not found' });
  res.json({ message: 'Deleted' });
};
