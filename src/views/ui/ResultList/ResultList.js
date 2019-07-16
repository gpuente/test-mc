import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';

import ResultCard, { resultType } from '../ResultCard';

const ResultList = (props) => {
  const { items, classes } = props;
  const lastItemIndex = items.length - 1;

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <ResultCard {...item} />
          {index !== lastItemIndex && (
            <Divider className={classes.divider} />
          )}
        </div>
      ))}
    </div>
  );
};

ResultList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(resultType)
  ).isRequired,
  classes: PropTypes.shape({
    divider: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResultList;
