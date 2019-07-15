/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '@material-ui/core/Typography';

const TestComponent = ({ bar, foo }) => (
  <div>
    <Typography>
      <div>bar is: {bar}</div>
      <div>foo is: {foo}</div>
    </Typography>
  </div>
);

storiesOf('TestComponent', module).add('JSX', () => (
  <TestComponent bar={10} foo="simple text" />
));
