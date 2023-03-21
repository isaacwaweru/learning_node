// const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const viewController = require('./routes/viewRoutes');
const todoRouter = require('./routes/todoRoutes');
const tutorialRouter = require('./routes/tutorialRoutes');

// Start express app
const app = express();
const AppError = require('./utils/appError');

app.use(cors());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

//Routes
app.use('/', viewController);
app.use('/api/v1/todos', todoRouter);
app.use('/api/v1/tutorials', tutorialRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
