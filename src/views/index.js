import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Switch, Route, withRouter } from 'react-router-dom';

import img from 'Assets/img/200.png';
import 'Assets/css/styles.css';


import UniversalComponent from './UniversalComponent';

const styles = theme => createStyles({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  card: {
    padding: '20px',
    marginTop: '20px',
  },
  bottom: {
    marginBottom: '50px',
  }
});

export class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = (route) => {
    const { history } = this.props;
    history.push(route);
  }

  render() {
    const { classes } = this.props;

    const buttons = [
      <Button variant="contained" color="primary" onClick={() => this.onClick('/route/a')}>Bar</Button>,
      <Button variant="contained" color="primary" onClick={() => this.onClick('/route/b')}>Foo</Button>,
      <Button variant="contained" color="primary" onClick={() => this.onClick('/route/apollo/a')}>ApolloBar</Button>,
      <Button variant="contained" color="primary" onClick={() => this.onClick('/route/apollo/b')}>ApolloFoo</Button>,
    ];

    const Root = () => <UniversalComponent page="common/Root" />
    const Bar = () => <UniversalComponent page="common/Bar" />;
    const Foo = () => <UniversalComponent page="common/Foo" />;
    const ApolloA = () => <UniversalComponent page="common/ApolloBar" />;
    const ApolloB = () => <UniversalComponent page="common/ApolloFoo" />

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <HomeIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              React SSR
            </Typography>
          </Toolbar>
        </AppBar>

        <main className={classes.bottom}>
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                React SSR ⚛
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                This React SSR boilerplate support: TypeScript, Babel7, Webpack4, CodeSplitting, SSR, SPA, and more... ❤️
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  {buttons.map((element, index) => <Grid item key={index}>{element}</Grid>)}
                </Grid>
              </div>
            </div>
          </div>
          <Grid container spacing={16} justify="center">
            <Grid item>
              <Card className={classes.card}>
                <Switch>
                  <Route path="/home" component={Root} exact />
                  <Route path="/route/a" component={Bar} exact/>
                  <Route path="/route/b" component={Foo} exact/>
                  <Route path="/route/apollo/a" component={ApolloA} exact/>
                  <Route path="/route/apollo/b" component={ApolloB} exact/>
                </Switch>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={16} justify="center">
            <Grid item>
              <img src={img} alt="" style={{ display: 'block', marginTop: '30px' }} />
            </Grid>
            <Grid item>
              <img src={img} alt="" style={{ display: 'block', marginTop: '30px' }} />
            </Grid>
            <Grid item>
              <img src={img} alt="" style={{ display: 'block', marginTop: '30px' }} />
            </Grid>
            <Grid item>
              <img src={img} alt="" style={{ display: 'block', marginTop: '30px' }} />
            </Grid>
          </Grid>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(withRouter(AppComponent));
