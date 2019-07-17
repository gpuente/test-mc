import { compose } from 'redux';
import { withI18n } from 'react-i18next';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Detail from './Detail';

export default compose(
  withRouter,
  withI18n(),
  withStyles(styles),
)(Detail);
