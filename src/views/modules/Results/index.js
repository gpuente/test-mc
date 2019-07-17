import { compose } from 'redux';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';

import Results from './Results';
import styles from './styles';

export default compose(
  withRouter,
  withStyles(styles),
)(Results);
