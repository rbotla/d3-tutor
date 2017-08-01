import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

const muiTheme = getMuiTheme({
  palette: {
    textColor: Colors.white,
    primary1Color: "#F3294D",
    primary2Color: "#F3294D",
    accent1Color: "#010144",
    pickerHeaderColor: Colors.darkBlack,
    alternateTextColor: Colors.white
  },
  appBar: {
    height: 60,
  }
});

const styles = {
  toolbar: {
    backgroundColor: "#F3294D",
    color: Colors.grey50
  },
  notifications: {

  }
}

class Nav extends Component {  
  constructor(props) {
    super(props);
  }

  render () {

    const navToolbar = (
        <Toolbar style={styles.toolbar}>
          <ToolbarGroup>
            <ToolbarSeparator />
          </ToolbarGroup>
        </Toolbar>
      );

    return (
    	<div>
        <MuiThemeProvider muiTheme={muiTheme}>
      	  <AppBar
            title="D3 Tutors"
            href="/"
            showMenuIconButton={false}
            iconElementRight={navToolbar}
      	  />
      	</MuiThemeProvider>
      </div>
    )
  }
}

// Redux hook functions to connect and fetch data from the store
export const mapStateToProps = ( state ) => {
  return (
    { 

    }
  )
}

export const mapDispatchToProps = (dispatch) => ({

});

export default connect (mapStateToProps, mapDispatchToProps) (Nav);
