const Joke = require('../models/JokeModel');

exports.createJoke = async (req, res, next) => {
    try {
      const newJoke = await Joke.create({
      text: req.body.joke,
      category: req.body.category,
      //userName : req.body.userName,
    });
      res.status(200).json(newJoke);
    } catch (error) {
      res.status(400).json(error);
    }
  };

// exports.createJoke = factory.createOne(Joke);
 //exports.getJoke = factory.getOne(Joke);
// exports.getAllJoke = factory.getAll(Joke);
// exports.updateJoke = factory.updateOne(Joke);
// exports.deleteJoke = factory.deleteOne(Joke);

// exports.findOne = (req, res) => {
//   const id = req.params.joke;

//   Joke.findById(joke)
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found joke" + joke });
//       else res.send(data);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send({ message: " none in our db with id=" + joke });
//     });
// };