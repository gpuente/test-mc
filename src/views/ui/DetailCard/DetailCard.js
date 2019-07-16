import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import currency from 'currency.js';

const DetailComponent = (props) => {
  const {
    i18n,
    label,
    title,
    price,
    classes,
    imageUrl,
    imageAlt,
    onSubmit,
    description,
  } = props;

  const priceFormatted = currency(price, {
    formatWithSymbol: true,
    separator: '.',
    decimal: ',',
    precision: 0,
  }).format();

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <div className={classes.imageContainer}>
          <img src={imageUrl} alt={imageAlt} className={classes.image}/>
        </div>
        <div className={classes.detailContainer}>
          <Typography className={classes.label}>{label}</Typography>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.price}>{priceFormatted}</Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.cta}
            onClick={onSubmit}
          >
            {i18n.cta}
          </Button>
        </div>
      </div>
      <div>
        <Typography className={classes.descriptionTitle}>{i18n.description}</Typography>
        <Typography className={classes.description}>{description}</Typography>
      </div>
    </div>
  );
};

DetailComponent.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  description: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    description: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailComponent;
