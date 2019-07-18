import React from 'react';
import { renderToString } from 'react-dom/server';
import { flushChunkNames, clearChunks } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { serializeCache } from 'axios-hooks';
import { getInitialLanguage, getInitialState } from 'Utils/I18nSSR';
import layout from 'Layouts/index';

import buildApp from './app';

export default async (data) => {
  try {
    const { clientStats, req, initialData = {} } = data;

    const {
      app,
      store,
      sheetsRegistry,
    } = buildApp(req, initialData);

    clearChunks();

    const content = renderToString(app);

    const chunkNames = flushChunkNames();
    const chunks = flushChunks(clientStats, { chunkNames });
    const materialCSS = sheetsRegistry.toString();
    const cache = await serializeCache();


    const layoutConfig = Object.assign({}, chunks, {
      cache,
      content,
      materialCSS,
      initialData,
      reduxInitialState: store.getState(),
      i18nInitialState: getInitialState(req),
      i18nInitialLanguage: getInitialLanguage(req),
    });

    const html = layout(layoutConfig, 'default');
    return html;
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
};
