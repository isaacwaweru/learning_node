const User = require('../models/userModel');

exports.createUser = async (req, res, next) => {
    try {
      const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
      res.status(200).json(newUser);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  //Get a single user
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