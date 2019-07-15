import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { withKnobs } from '@storybook/addon-knobs/react';
import { configure, addDecorator } from '@storybook/react';
import blue from '@material-ui/core/colors/blue';


const theme =  createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: blue,
    type: 'light'
  },
});

const req = require.context('../src/views', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

const withProviders = (story) => (
  <MuiThemeProvider theme={theme}>
    {story()}
  </MuiThemeProvider>
);

addDecorator(withKnobs({ escapeHTML: false }));
addDecorator(withProviders);

configure(loadStories, module);
