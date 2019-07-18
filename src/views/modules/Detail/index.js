import { compose } from 'redux';
import { withI18n } from 'react-i18next';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import Detail from './Detail';
import { getProductInfo } from '../../../requests';
import { withFetchData } from '../../hocs';
import presenter from './presenter';

const KEY = 'detail';

const getFetcher = ({ match }) => {
  const { params } = match;
  return getProductInfo(params.id);
};

// This skip fetchig data when data comes from SSR
const skip = ({ initialData, match }) => {
  const result = !!initialData[KEY]
    && (initialData[KEY].data.detail.id === match.params.id);

  return result;
};

const mapDataToProps = (props) => {
  return {
    ...props,
    ...presenter(props.initialData[KEY], props.t),
  };
};

export default compose(
  withRouter,
  withI18n(),
  withStyles(styles),
  withFetchData(
    getFetcher,
    skip,
    mapDataToProps,
    KEY,
  ),
)(Detail);
