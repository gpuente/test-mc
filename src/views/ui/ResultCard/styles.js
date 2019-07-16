import { createStyles } from '@material-ui/core/styles';

export default () => createStyles({
  root: {
    cursor: 'pointer',
    display: 'flex',
    padding: 16,
  },
  descriptionContainer: {
    marginLeft: 16,
    flex: 1,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 4,
    objectFit: 'cover',
  },
  price: {
    fontSize: 24,
    marginBottom: 32,
    marginTop: 16,
  },
  description: {
    fontSize: 18,
  },
  country: {
    marginTop: 24,
    fontSize: 12,
  },
  countryContainer: {
    width: 180,
  },
});
