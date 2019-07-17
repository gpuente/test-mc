import PropTypes from 'prop-types';

export const resultType = {
  price: PropTypes.number,
  country: PropTypes.string,
  imageUrl: PropTypes.string,
  altImage: PropTypes.string,
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  description: PropTypes.string,
  description2: PropTypes.string,
  componentProps: PropTypes.object,
};
