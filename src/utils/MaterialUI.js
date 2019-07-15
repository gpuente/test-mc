import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

export const jssID = 'jss-server-side';

export const createTheme = theme => createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: blue,
    type: 'light',
  },
  ...theme,
});

export class RemoveStylesOnClient extends React.Component {
  componentDidMount() {
    const jssStyles = document.getElementById(jssID);

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return this.props.children;
  }
}
