const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const docs = await Model.findByIdAndDelete(req.params.id);

    if (!docs) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const docs = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!docs) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: docs,
      },
    });
  });

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    const docs = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: docs,
      },
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const docs = await query;

    if (!docs) {
      return next(new AppError('No todo found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: docs,
      },
    });
  });

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    // const doc = await features.query.explain();
    const doc = await features.query;

    // To allow for nested GET reviews on tour (hack)

    const docs = await Model.find();

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      getRecords: docs.length,
      data: {
        data: doc,
      },
    });
  });
