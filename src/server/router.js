import { Router } from 'express';

import { getResults, getProductInfo } from '../requests';
import render from './render';

export default ({ clientStats }) => {
  const router = Router();

  router.get('/', async (req, res) => {
    const html = await render({ clientStats, req, res });
    res.send(html);
  });

  router.get('/items', async (req, res) => {
    const initialData = await getResults(req.query.search);
    const html = await render({ clientStats, req, res, initialData });
    res.send(html);
  });

  router.get('/items/:id', async (req, res) => {
    const initialData = await getProductInfo(req.params.id);
    const html = await render({ clientStats, req, res, initialData });
    res.send(html);
  });

  return router;
};
