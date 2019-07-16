import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import SearchBar from './index';

storiesOf('SearchBar', module).add('default', () => {
  const defaultProps = {
    placeholder: text('placeholder', 'Nunca dejes de buscar'),
    onSubmit: action('onSubmit'),
  };

  return (
    <SearchBar {...defaultProps}/>
  );
});
