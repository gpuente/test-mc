import { compose } from 'redux';
import queryString from 'query-string';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';

import { getResults } from '../../../requests';
import { withFetchData } from '../../hocs';
import presenter from './presenter';

import Results from './Results';
import styles from './styles';

const KEY = 'results';

const getFetcher = ({ location }) => {
  const query = queryString.parse(location.search);
  return getResults(query.search);
};

const skip = ({ initialData, location }) => {
  const query = queryString.parse(location.search);
  const result = !!initialData[KEY]
    && (initialData[KEY].data.query === query.search);

  return result;
};

const mapDataToProps = (props) => {
  return {
    ...props,
    ...presenter(props.initialData[KEY]),
  };
};

export default compose(
  withRouter,
  withStyles(styles),
  withFetchData(
    getFetcher,
    skip,
    mapDataToProps,
    KEY,
  ),
)(Results);
