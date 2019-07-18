import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { getInitialState, configureStore } from 'Utils/ReduxSetup';
import { StaticRouter } from 'react-router-dom';
import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createTheme } from 'Utils/MaterialUI';

import App from '../views';

export default (req, initialData) => {
  const initialState = getInitialState({ req });
  const store = configureStore(initialState);

  const context = {};

  const sheetsRegistry = new SheetsRegistry();
  const sheetsManager = new Map();
  const theme = createTheme();

  const generateClassName = createGenerateClassName();

  const app = (
    <Provider store={store}>
      <I18nextProvider i18n={req.i18n}>
        <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
          <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
            <StaticRouter location={req.url} context={context}>
              <App initialData={initialData}/>
            </StaticRouter>
          </MuiThemeProvider>
        </JssProvider>
      </I18nextProvider>
    </Provider>
  );

  return {
    app,
    store,
    sheetsRegistry,
  };
};
