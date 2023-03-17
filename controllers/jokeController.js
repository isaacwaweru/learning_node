const Joke = require('../models/JokeModel');

exports.createJoke = async (req, res, next) => {
    try {
      const newJoke = await Joke.create({
      text: req.body.joke,
      category: req.body.category,
      user : req.body.user,
    });
      res.status(200).json(newJoke);
    } catch (error) {
      res.status(400).json(error);
    }
  };
// Get a Joke
exports.getJoke = async ( req, res ) => {
  try {
    const joke = await Joke.findById(req.params.id);
    res.status(200).json(joke);
  } catch (error) {
    res.status(400).json(error);
  }
}

exports.getAllJoke = async (req, res) => {
const  name = req.query.joke;
var condition = name ? { title: { $regex: new RegExp(joke), $options: "i" } } : {};

await Joke.find(condition)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving todos."
    });
  });
};

// exports.updateTodo = factory.updateOne(Todo);
exports.updateJoke = async (req, res) => {
if (!req.body) {
    return res.status(400).send({
        message: "Data to update can not be empty!"
    });
}

const id = req.params.id;

await Joke.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Todo with id=${id} Maybe Tutorial was not found!`
            });
        } else res.send({ message: "Todo was updated successfully" });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Todo with id=" +id
        });
    });
};
// exports.deleteTodo = factory.deleteOne(Todo);
exports.deleteJoke = async (req, res) => {
const id = req.params.id;

await Joke.findByIdAndRemove(id)
.then(data => {
  if (!data) {
    res.status(404).send({
      message: `Cannot delete Joke with id=${id}. Maybe joke was not found!`
    });
  } else {
    res.send({
      message: "Joke was deleted successfully!"
    });
  }
})
.catch(err => {
  res.status(500).send({
    message: "Could not delete joke with id=" + id
  });
});
};