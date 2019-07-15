import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { changeSSR } from 'Redux/actions';

import { Title } from './Layout';

import * as styles from './styles.css';

export class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('Bar Component Mounted!'); // eslint-disable-line
  }

  onClick = () => {
    this.props.changeSSR(!this.props.isSSR);
  }

  render() {
    return (
      <div className={styles.tanBG}>
        <Grid container spacing={16} justify="center">
          <Grid item>
            <Title>Bar component loaded</Title>
            <span>this is an async component</span>
            <div>isSSR: {this.props.isSSR.toString()}</div>
            <Grid container spacing={16} justify="center">
              <Grid item>
                <Button variant="contained" color="secondary" onClick={this.onClick} className={styles.changeStateButton}>change state</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSSR: state.isSSR,
});

export default connect(mapStateToProps, { changeSSR })(Bar);
