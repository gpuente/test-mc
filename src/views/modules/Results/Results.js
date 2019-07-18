import React from 'react';
import { get } from 'Config';
import PropTypes from 'prop-types';
import useAxios from 'axios-hooks';
import queryString from 'query-string';
import ResultList from 'UI/ResultList';
import { Link } from 'react-router-dom';

const API_ENDPOINT = get('apiEndpoint');

const Results = (props) => {
  const {
    error,
    items,
    classes,
    loading,
  } = props;

  if (loading) return 'Loading...';
  if (error) return 'Error';

  return (
    <div className={classes.root}>
      <ResultList items={items} />
    </div>
  );
};

Results.propTypes = {
  location: PropTypes.object.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
};

export default Results;
