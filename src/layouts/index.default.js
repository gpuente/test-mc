import { jssID } from 'Utils/MaterialUI';

/* eslint-disable import/prefer-default-export */
export const layout = (config) => {
  const {
    js,
    cache,
    styles,
    cssHash,
    content,
    materialCSS,
    initialData,
    reduxInitialState,
    i18nInitialState,
    i18nInitialLanguage,
  } = config;

  return `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>react-universal-component-boilerplate</title>
      ${styles}
    </head>
    <body>
      <div id="root">${content}</div>
      <style id="${jssID}">${materialCSS}</style>
      <script>
        window.__REDUX_STATE__ = ${JSON.stringify(reduxInitialState).replace(/</g, '\\u003c')};
        window.__I18N_STATE__ = ${JSON.stringify(i18nInitialState).replace(/</g, '\\u003c')};
        window.__I18N_LANGUAGE__ = ${JSON.stringify(i18nInitialLanguage).replace(/</g, '\\u003c')};
        window.__AXIOS_HOOKS_CACHE__ = ${JSON.stringify(cache).replace(/</g, '\\u003c')};
        window.__INITIAL_DATA__ = ${JSON.stringify(initialData).replace(/</g, '\\u003c')};
      </script>
      ${cssHash}
      ${js}
    </body>
  </html>`;
};
