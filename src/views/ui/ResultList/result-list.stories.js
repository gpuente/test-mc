import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import ResultList from './index';

const categoryName = 'ResultList';

storiesOf(categoryName, module).add('default', () => {
  const defaultProps = {
    items: object('items', [
      {
        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/r/ef/refurb/iphoneX/refurb-iphoneX-silver_FMT_WHH?wid=400&hei=400&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1546626276301',
        price: 799000,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        description2: 'Lorem ipsum dolor.',
        country: 'Mendoza',
      },
      {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPpSf96KoZwikZcAaJgl7XkJoKNIFQDHxOxDlwF5RBgJhcV7d',
        price: 599000,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        description2: 'Lorem ipsum dolor.',
        country: 'Mendoza',
      },
      {
        imageUrl: 'https://deplatec.com/13939-home_default/apple-iphone-xr-128gb-blanco-mryd2ql-a.jpg',
        price: 1200000,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        description2: 'Lorem ipsum dolor.',
        country: 'Mendoza',
      },
      {
        imageUrl: 'https://cdn.shopify.com/s/files/1/0101/2522/products/Captura_de_pantalla_2018-11-09_00.53.05_grande.png?v=1541746412',
        price: 850000,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        description2: 'Lorem ipsum dolor.',
        country: 'Mendoza',
      },
    ]),
  };

  return (
    <ResultList {...defaultProps} />
  );
});
