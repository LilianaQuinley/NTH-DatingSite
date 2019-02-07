import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from "material-ui/AppBar";
import Button from "@material-ui/core/Button";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {List, ListItem} from "material-ui/List";
import api from '../library/API';


export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        console.log("Save the user");
        console.log(this.props)
        api.createUser(this.props)
        // PROCESS FORM //
        this.props.nextStep ();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep ();
    };

    render() {
    const { values : { firstName, lastName, email, occupation, city, bio, userName, password, reenterPassword } } = this.props;

    const muiTheme = getMuiTheme({
        
        appBar: {
          height: 50,
          textColor: "white",
          color: "blue"
          
        },
      });


    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <React.Fragment>
                <AppBar 
                        position="sticky"
                        title= "Personal Details"/>
                <List>
                    <ListItem
                    primaryText = "First Name"
                    secondaryText = { firstName }
                    />
                    <ListItem
                    primaryText = "Last Name"
                    secondaryText = { lastName }
                    />
                    <ListItem
                    primaryText = "Email"
                    secondaryText = { email }
                    />
                    <ListItem
                    primaryText = "User Name"
                    secondaryText = { userName }
                    />
                    <ListItem
                    primaryText = "Password"
                    secondaryText = { password }
                    />
                    <ListItem
                    primaryText = "Reenter Password"
                    secondaryText = { reenterPassword }
                    />
                    <ListItem
                    primaryText = "Occupation"
                    secondaryText = { occupation }
                    />
                    <ListItem
                    primaryText = "City"
                    secondaryText = { city }
                    />
                    <ListItem
                    primaryText = "About YOU"
                    secondaryText = { bio }
                    />
                        
                </List>

                <Button
                    type="submit" 
                    variant="raised"
                    color="primary"
                    //disabled={!isValid}
                    //className={classes.button}
                    onClick = {this.back}
                    >
                    Back
                </Button>
                
                <Button
                    type="submit" 
                    variant="raised"
                    color="primary"
                    //disabled={!isValid}
                    //className={classes.button}
                    onClick = {this.continue}
                    >
                    Confirm & Continue
                </Button>
            </React.Fragment>
        </MuiThemeProvider>

        )
  }
}
const styles = theme => ({

    appBar: {
        height: 50,
        alignItems: "center",
      },

      button: {
        margin: theme.spacing.unit,
      
      },


  });


  Confirm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Confirm);
