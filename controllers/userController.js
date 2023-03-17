const User = require('../models/userModel');

exports.createUser = async (req, res, next) => {
    try {
      const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
      res.status(200).json(newUser);
    } catch (error) {
      res.status(400).json(error);
    }
  };

// get a single user
  exports.getUser = async ( req, res ) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(todo);
    } catch (error) {
      res.status(400).json(error);
    }
  }

// get all users
  exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json(error);
    }
  }
// Update users
exports.updateUser = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        useFindAndModify: false,
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json(error);
    }
  };

// Delete user
exports.deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndRemove(req.params.id);
      res.status(200).json({
        status: "successfully deleted"
      });
    } catch (error) {
      res.status(400).json(error);
    }
  };
 