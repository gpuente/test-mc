import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import SearchInput from './index';

const categoryName = 'SearchInput';

storiesOf(categoryName, module).add('default', () => {
  const defaultProps = {
    placeholder: text('placeholder', 'Nunca dejes de buscar'),
    onClick: action('onClick'),
  };

  return (
    <SearchInput {...defaultProps}/>
  );
});
