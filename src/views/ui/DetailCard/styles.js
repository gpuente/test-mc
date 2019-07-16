import { createStyles } from '@material-ui/core/styles';
import { height } from 'window-size';

export default () => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 32,
  },
  imageContainer: {
    width: '100%',
    maxWidth: 680,
    marginRight: 24,
  },
  image: {
    width: '100%',
    objectFit: 'cover',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  label: {
    fontSize: 14,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 32,
    fontWeight: 600,
  },
  price: {
    fontSize: 46,
    marginBottom: 32,
  },
  cta: {
    backgroundColor: '#3483FA',
    width: '100%',
    height: 50,
  },
  detailContainer: {
    maxWidth: 280,
  },
  descriptionTitle: {
    fontSize: 28,
    marginBottom: 32,
  },
  description: {
    fontSize: 16,
    color: '#999',
    width: '70%',
  },
});
