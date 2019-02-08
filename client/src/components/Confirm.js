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
    const { values : { birthday, gender, lookingFor, ethnic, relationshipStatus, relationshipLooking,
        haveChildren, educationLevel, employmentStatus, incomeRange } } = this.props;

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
                    primaryText = "Birthday"
                    secondaryText = { birthday }
                    />
                    <ListItem
                    primaryText = "Gender"
                    secondaryText = { gender }
                    />
                    <ListItem
                    primaryText = "Looking For"
                    secondaryText = { lookingFor }
                    />
                    <ListItem
                    primaryText = "Ethnic"
                    secondaryText = { ethnic }
                    />
                    <ListItem
                    primaryText = "Relationship Status"
                    secondaryText = { relationshipStatus }
                    />
                    <ListItem
                    primaryText = "Relationship Looking For"
                    secondaryText = { relationshipLooking }
                    />
                    <ListItem
                    primaryText = "Do you Have Children"
                    secondaryText = { haveChildren }
                    />
                    <ListItem
                    primaryText = "Education Level"
                    secondaryText = { educationLevel }
                    />
                    <ListItem
                    primaryText = "Employment Status"
                    secondaryText = { employmentStatus }
                    />
                    <ListItem
                    primaryText = "Income Range"
                    secondaryText = { incomeRange }
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
