import { Router } from 'express';

const route = Router();

export default (app) => {
  app.use('/users', route);

  route.get('/', async (req, res, next) => {
    try {
      const stmt = req.db.prepare(
        'SELECT name,username,picture_url from users',
      );
      const users = stmt.all();
      res.status(200).json(users);
    } catch (e) {
      next(e);
    }
  });

  route.get('/:name', async (req, res, next) => {
    try {
      const stmt = req.db.prepare(
        'SELECT name,username,picture_url from users WHERE name = ?',
      );
      const user = stmt.get(req.params.id);

      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (e) {
      next(e);
    }
  });

  route.get('/:name/tweets', async (req, res, next) => {
    try {
      const stmt = req.db.prepare('SELECT * from tweets WHERE user_id = ?');
      const tweets = stmt.all(req.params.id);

      res.status(200).json(tweets);
    } catch (e) {
      next(e);
    }
  });
};
