import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const categoriesQuery = gql`
  query Categories($businessUnitInput: BusinessUnitInput) {
    categories(businessUnitInput: $businessUnitInput) {
      id
      code
      order
      url
      name
      with_redirect
      business_unit {
        category
        code
        logo
        name
        slug
      }
    }
  }
`;

class ApolloBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h2>Apollo Bar Component</h2>
      </div>
    );
  }
}

export default graphql(categoriesQuery, {
  options: {
    variables: {
      businessUnitInput: {
        country_code: 'cl',
        slug: 'seguro-obligatorio-soap',
      }
    }
  }
})(ApolloBar);
