import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ResultCard from './index';

const categoryName = 'ResultCard';

storiesOf(categoryName, module).add('default', () => {
  const defaultProps = {
    imageUrl: text('imageUrl', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/r/ef/refurb/iphoneX/refurb-iphoneX-silver_FMT_WHH?wid=400&hei=400&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1546626276301'),
    price: number('price', 799000),
    description: text('description', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'),
    description2: text('description2', 'Lorem ipsum dolor.'),
    country: text('country', 'Mendoza'),
  };

  return (
    <ResultCard {...defaultProps} />
  );
});
