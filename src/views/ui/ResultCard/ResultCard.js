import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import currency from 'currency.js';

import { resultType } from './types';

const ResultCard = (props) => {
  const {
    price,
    classes,
    country,
    altImage,
    imageUrl,
    component,
    description,
    description2,
    componentProps,
  } = props;

  const Component = component;

  const priceFormatted = currency(price, {
    formatWithSymbol: true,
    separator: '.',
    decimal: ',',
    precision: 0,
  }).format();

  return (
    <Component className={classes.root} {...componentProps}>
      <div>
        {imageUrl && (
          <img src={imageUrl} alt={altImage} className={classes.image}/>
        )}
      </div>
      <div className={classes.descriptionContainer}>
        <Typography className={classes.price}>{priceFormatted}</Typography>
        <Typography className={classes.description}>{description}</Typography>
        <Typography className={classes.description}>{description2}</Typography>
      </div>
      <div className={classes.countryContainer}>
        <Typography className={classes.country}>{country}</Typography>
      </div>
    </Component>
  );
};

ResultCard.defaultProps = {
  price: 0,
  country: '',
  altImage: '',
  imageUrl: null,
  description: '',
  description2: '',
  component: 'div',
  componentProps: {},
};

ResultCard.propTypes = {
  ...resultType,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    countryContainer: PropTypes.string.isRequired,
    descriptionContainer: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResultCard;
