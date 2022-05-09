import { Router } from 'express';

const route = Router();

export default (app) => {
  app.use('/activity', route);

  route.get('/', async (req, res, next) => {
    try {
      const stmt = req.db.prepare('SELECT * from tweets');
      const tweets = stmt.all();
      res.status(200).json(tweets);
    } catch (e) {
      next(e);
    }
  });
};
