const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const docs = await Model.findByIdAndDelete(req.params.id);

    if (!docs) {
      return next(new AppError('No todo found with that ID', 404));
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
      return next(new AppError('No todo found with that ID', 404));
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
    // To allow for nested GET reviews on tour (hack)

    const docs = await Model.find();

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      getRecords: docs.length,
      data: {
        data: docs,
      },
    });
  });
