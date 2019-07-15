import React, { Component } from 'react';

class ApolloFoo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(this.props); //eslint-disable-line
  }

  render() {
    return (
      <div>
        <h2>Apollo Foo Component</h2>
      </div>
    );
  }
}

export default ApolloFoo;
