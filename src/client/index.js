import { render, hydrate } from 'react-dom';
import App from 'Views/index';
import buildApp from './app';

const renderApp = !!process.env.SPA_MODE ? render : hydrate;

const renderClient = (app) => {
  renderApp(
    app,
    document.getElementById('root'),
  );
};

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('../views/index.js', () => {
    const _AppComponent = require('../views/index.js').default; // eslint-disable-line
    const app = buildApp(_AppComponent);

    renderClient(app);
  });
}

renderClient(buildApp(App));
