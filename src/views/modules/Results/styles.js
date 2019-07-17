import { createStyles } from '@material-ui/core/styles';

export default () => createStyles({
  root: {
    borderRadius: 4,
    backgroundColor: 'white',
    '& a': {
      textDecoration: 'none',
    },
  },
});
