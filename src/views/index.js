import React from 'react';
import { compose } from 'redux';
import { withI18n } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import SearchBar from 'UI/SearchBar';
import 'Assets/css/styles.css';

import styles from './styles';
import UniversalComponent from './UniversalComponent';

const Home = () => <UniversalComponent page="modules/Home" />;
const Detail = () => <UniversalComponent page="modules/Detail" />;
const Results = () => <UniversalComponent page="modules/Results" />

const AppComponent = (props) => {
  const { t, classes, history } = props;

  const onSubmit = value => {
    const searchURL = encodeURI(`/items?search=${value}`);
    history.push(searchURL);
  };

  return (
    <div>
      <CssBaseline />
      <SearchBar
        placeholder={t('components:searchbar:placeholder')}
        onSubmit={onSubmit}
        linkComponent={Link}
        linkProps={{ to: '/' }}
      />
      <div className={classes.container}>
        <Grid container spacing={24}>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/items" component={Results} exact />
              <Route path="/items/:id" component={Detail} exact />
            </Switch>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default compose(
  withRouter,
  withI18n(),
  withStyles(styles),
)(AppComponent);
