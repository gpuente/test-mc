import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route, withRouter } from 'react-router-dom';

import 'Assets/css/styles.css';
import img from 'Assets/img/200.png';

import UniversalComponent from './UniversalComponent';

const Home = () => <UniversalComponent page="modules/Home" />;

const AppComponent = () => (
  <div>
    <CssBaseline />
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </div>
);

export default withRouter(AppComponent);
