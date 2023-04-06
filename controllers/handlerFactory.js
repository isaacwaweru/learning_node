const fs = require('fs');
//const util = require('util');
//const unlinkFile = util.promisify(fs.unlink);
//const path = require("path");
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const { uploadFile, getFileStream } = require('../utils/s3');

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No joke found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError('no joke found with that id', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    upload.single('image');
    const meme = req.file;
    console.log(req.body);
    const result = await uploadFile(req.file);
    await unlinkFile(meme.path);
    //const result = await uploadFile(meme);
    const doc = await Model.create({
      ...req.body,
      image: result.key // assuming the Model has an "image" field that stores the uploaded file's filename
    });
    //const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    // To allow for nested GET reviews on tour (hack)
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    // const doc = await features.query.explain();
    const doc = await features.query;

    const totalItems = await Model.find(filter);

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      totalRecords: totalItems.length,
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });
