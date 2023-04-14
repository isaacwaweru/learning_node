const express = require('express');
const multer = require('multer');
const fs = require('fs');
const util = require('util');
const Joke = require('../models/JokeModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const unlinkFile = util.promisify(fs.unlink);

const upload = multer({ dest: 'uploads/' });

const jokeController = require('../controllers/jokeController');

const { uploadFile, getFileStream } = require('../utils/s3');

const router = express.Router();

//creating a joke no need to be looged in
router.get('/', (req, res) => {
  res.render('jokes');
});
///home/joe_maina/Projects/jokes/learning_node/views/static/jokes

//router.route('/add').post(jokeController.createJoke);
router.post(
  '/add/:id',
  upload.single('image'),
  catchAsync(async (req, res, next) => {
    const file = req.file;
    console.log(file);
    const result = await uploadFile(file);
    await unlinkFile(file.path);
    console.log(result.Key);
    // eslint-disable-next-line no-undef
    pic = { meme: result.Key };
    const doc = await Joke.findByIdAndUpdate(
      req.params.id,
      { meme: result.Key },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!doc) {
      return next(new AppError('no joke found with that id', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  })
);

router.route('/').post(jokeController.createJoke);

router.route('/get').get(jokeController.getAllJokes);

router
  .route('/:id')
  .get(jokeController.getJoke)
  .patch(jokeController.updateJoke)
  .delete(jokeController.deleteJoke);

module.exports = router;
