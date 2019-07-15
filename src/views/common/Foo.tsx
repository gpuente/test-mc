import React from 'react';
import { withI18n } from 'react-i18next';

class Foo extends React.Component<> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('Foo Component Mounted!'); // eslint-disable-line
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <h2>Foo component loaded</h2>
        <span>this is an async component</span>
        <p>{ t('text') }</p>
      </div>
    );
  }
}


export default withI18n()(Foo);
