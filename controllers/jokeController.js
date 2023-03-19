const Joke = require('../models/JokeModel');
const catchAsync = require('../utils/catchAsync');

exports.createJoke = catchAsync(async (req, res, next) => {
  const data = await Joke.create({
    joke: req.body.joke,
    category: req.body.category,
    // user: req.body.user,
  });
  res.status(200).json(data);
});

exports.getJoke = catchAsync(async (req, res) => {
  const joke = await Joke.findById(req.params.id);
  res.status(200).json(joke);
});

exports.getAllJoke = catchAsync(async (req, res) => {
  const { name } = req.query;
  const condition = name
    ? { title: { $regex: new RegExp(name), $options: 'i' } }
    : {};
  await Joke.find(condition).then(data => {
    res.send(data);
  });
});
// exports.updateTodo = factory.updateOne(Todo);
exports.updateJoke = catchAsync(async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }
  const { id } = req.params;

  await Joke.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(
    data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Joke with id=${id} Maybe Joke was not found!`,
        });
      } else res.send({ message: 'Joke was updated successfully' });
    }
  );
});
// exports.deleteTodo
exports.deleteJoke = catchAsync(async (req, res) => {
  const { id } = req.params;
  await Joke.findByIdAndRemove(id).then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot delete Joke with id=${id}. Maybe Joke was not found!`,
      });
    } else {
      res.send({
        message: 'Joke was deleted successfully!',
      });
    }
  });
});
