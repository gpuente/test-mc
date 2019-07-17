import { Router } from 'express';

import render from './render';

export default ({ clientStats }) => {
  const router = Router();

  router.get('/', async (req, res) => {
    const html = await render({ clientStats, req, res });
    res.send(html);
  });

  router.get('/items', async (req, res) => {
    const html = await render({ clientStats, req, res });
    res.send(html);
  });

  router.get('/items/:id', async (req, res) => {
    const html = await render({ clientStats, req, res });
    res.send(html);
  });

  return router;
};
