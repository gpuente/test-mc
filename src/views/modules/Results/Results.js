import React from 'react';
import { get } from 'Config';
import PropTypes from 'prop-types';
import useAxios from 'axios-hooks';
import queryString from 'query-string';
import ResultList from 'UI/ResultList';
import { Link } from 'react-router-dom';

const API_ENDPOINT = get('apiEndpoint');

const Results = (props) => {
  const { location, classes } = props;
  const searchValue = queryString.parse(location.search);
  const api = `${API_ENDPOINT}/sites/MLA/search?q=${searchValue.search}`;
  const [{ data, loading, error }] = useAxios(encodeURI(api));

  if (loading) return 'Loading...';
  if (error) return 'Error';

  const items = data.results.map(result => ({
    id: result.id,
    imageUrl: result.thumbnail,
    price: result.price,
    description: result.title,
    country: result.address.state_name,
    component: Link,
    componentProps: {
      to: `/items/${result.id}`,
    },
  }));

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
