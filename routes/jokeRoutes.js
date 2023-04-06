const express = require('express');
const multer = require('multer');
const fs = require('fs');

const util = require('util');

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
  async (req, res) => {
    const file = req.file;
    //console.log(req.body);
    //console.log(req.file);
    const result = await uploadFile(file);
    await unlinkFile(file.path);
    console.log(result.Key);
    //const description = req.body.description;
    // if (!req.file) {
    //   return res.status(400).send('No file uploaded');
    // }
    pic = { meme: result.Key };
    // eslint-disable-next-line no-undef
    req.body = JSON.stringify(pic);

    // Do something with the uploaded file
    //console.log(req.file.filename);
    const update = jokeController.updateJoke;
    // eslint-disable-next-line no-unused-expressions
    //res.send`${update}`;
  },
  jokeController.updateJoke
);

router.route('/').post(jokeController.createJoke);

router.route('/get').get(jokeController.getAllJokes);

router
  .route('/:id')
  .get(jokeController.getJoke)
  .patch(jokeController.updateJoke)
  .delete(jokeController.deleteJoke);

module.exports = router;
