import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import SearchInput from '../SearchInput';
import logo from '../../../../assets/img/logoML.png';

const SearchBar = (props) => {
  const {
    classes,
    onSubmit,
    linkProps,
    placeholder,
    linkComponent,
  } = props;

  const Link = linkComponent;

  return (
    <AppBar
      classes={{
        colorPrimary: classes.colorPrimary,
      }}
    >
      <Toolbar>
        <Grid container spacing={24}>
          <Grid item xs={1} />
          <Grid item xs={1}>
            <Link className={classes.link} {...linkProps}>
              <img src={logo} alt="logo" className={classes.logo}/>
            </Link>
          </Grid>
          <Grid item xs={9}>
            <SearchInput placeholder={placeholder} onClick={onSubmit} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

SearchBar.defaultProps = {
  linkProps: {},
  placeholder: '',
  linkComponent: 'a',
};

SearchBar.propTypes = {
  linkProps: PropTypes.object,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  linkComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  classes: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    colorPrimary: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchBar;
