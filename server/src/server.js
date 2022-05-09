import express from 'express';
import bodyParser from 'body-parser';
import { errorHandler, logErrors } from './middlewares/error';
import db from './db';
import routes from './routes';

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Routes
app.use('/', routes());

/// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(logErrors);
app.use(errorHandler);

export default app;
