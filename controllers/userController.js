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
 
  /*
  // Get a single user
  exports.getUser = async ( req, res ) => {
    const id = req.params.id;

    await User.findById(id)
    .then(data => {
      if ( !data )
        res.status(404).send({ message: "Not found user with id" + id });
        else res.send(data);
    } )
    .catch(err => {
      res
       .status(500)
       .send({ message: "Error retrieving user with id=" +id });
    });
  }

// get all users

exports.getAllUsers = async (req, res) => {
  const  name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  await User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Update user details
exports.updateUser = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
  
    await User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update user with id=${id} Maybe Tutorial was not found!`
                });
            } else res.send({ message: "User was updated successfully" });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" +id
            });
        });
  };

  // Delete a user
  exports.deleteUser = async (req, res) => {
    const id = req.params.id;
  
  await User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete user with id=${id}. Maybe User was not found!`
        });
      } else {
        res.send({
          message: "user was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
  };
  */