// const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const viewController = require('./routes/viewRoutes');
const todoRouter = require('./routes/todoRoutes');
const jokeRouter = require('./routes/jokeRoutes');
const userRouter = require('./routes/userRoutes');
const coachRouter = require('./routes/coachRoutes');

// Start express app
const app = express();

app.set('views', path.join(__dirname, 'views/static'));
app.set('view engine', 'ejs');
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
app.use('/api/v1/jokes', jokeRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/coaches', coachRouter);
// app.use('/api/v1/tutorials', tutorialRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
