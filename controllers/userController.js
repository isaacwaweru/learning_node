// const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');
const factory = require('./handlerFactory');

exports.createUser = factory.createOne(User);
exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);

/*
exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });
  res.status(200).json(newUser);
});

// get a single user
exports.getUser = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json(user);
});

// get all users
exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});
// Update users
exports.updateUser = catchAsync(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
  });
  res.status(200).json(user);
});

// Delete user
exports.deleteUser = catchAsync(async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  res.status(200).json({
    status: 'successfully deleted',
  });
});
*/
