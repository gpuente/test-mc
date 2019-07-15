import React, { Component } from 'react';
import { Title } from './Layout';

class ApolloBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(this.props); // eslint-disable-line
  }

  render() {
    return (
      <div>
        <Title>Apollo Bar Component</Title>
      </div>
    );
  }
}

export default ApolloBar;
