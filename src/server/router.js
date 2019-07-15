import { Router } from 'express';

import render from './render';

export default ({ clientStats }) => {
  const router = Router();

  router.get('/home', async (req, res) => {
    const html = await render({ clientStats, req, res });
    res.send(html);
  });

  router.get('/route/a', async (req, res) => {
    const html = await render({ clientStats, req, res });
    res.send(html);
  });

  router.get('/route/b', async (req, res) => {
    const html = await render({ clientStats, req, res });
    res.send(html);
  });

  router.get('/route/apollo/a', async (req, res) => {
    const html = await render({ clientStats, req, res });
    res.send(html);
  });

  router.get('/route/apollo/b', async (req, res) => {
    const html = await render({ clientStats, req, res });
    res.send(html);
  });

  return router;
};
