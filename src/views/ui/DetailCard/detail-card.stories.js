import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import DetailCard from './index';

const categoryName = 'DetailCard';

storiesOf(categoryName, module).add('default', () => {
  const defaultProps = {
    imageUrl: text('imageUrl', 'https://images.idgesg.net/images/article/2017/11/iphonex-100741931-orig.jpg'),
    imageAlt: text('imageAlt', 'product image'),
    title: text('title', 'Lorem ipsum dolor, sit.'),
    label: text('label', 'Lorem ipsum dolor sit amet.'),
    price: number('price', 890000),
    onSubmit: action('onSubmit'),
    description: text('description', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores a dolores sed eveniet, consequuntur accusantium tempora voluptatibus, iusto eaque sint deleniti quas dignissimos aperiam facere. Dolores architecto repudiandae veritatis consequatur?'),
    i18n: {
      description: text('i18n.description', 'Descripción del producto'),
      cta: text('i18n.cta', 'Comprar'),
    },
  };

  return (
    <DetailCard {...defaultProps} />
  );
});
