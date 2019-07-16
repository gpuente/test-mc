import { createStyles } from '@material-ui/core/styles';

export default () => createStyles({
  root: {
    backgroundColor: 'white',
    display: 'flex',
    borderRadius: 4,
    overflow: 'hidden',
  },
  input: {
    width: '100%',
    padding: 6,
    fontSize: 18,
  },
  button: {
    padding: '5px 10px',
    backgroundColor: '#EEE',
  },
  icon: {
    color: '#333',
  },
});
