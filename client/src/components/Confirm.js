import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from "material-ui/AppBar";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

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
    const {classes} = this.props
    const { values : { birthday, gender, lookingFor, ethnic, relationshipStatus, relationshipLooking,
        haveChildren, educationLevel, employmentStatus, incomeRange } } = this.props;

    const muiTheme = getMuiTheme({
        
        appBar: {
          height: 50,
          textColor: "white",
          color: "blue",
          position: "fixed"
        },
      });


    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <React.Fragment>
                <AppBar 
                        title= "Personal Details"/>
                <List>

                    <ListItem
                        primaryText = {
                        <Typography variant="p" style={{ color: 'blue' }}>Birthday
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "h1" style={{ color: 'black' }}>{ birthday } 
                        </Typography>
                        }
                    />

                    <ListItem
                        primaryText = {
                        <Typography variant="p" style={{ color: 'blue' }}>Gender
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "h1" style={{ color: 'black' }}>{ gender } 
                        </Typography>
                        }
                    />  
                    <ListItem
                        primaryText = {
                        <Typography variant="h6" style={{ color: 'blue' }}>Looking For
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "h1" style={{ color: 'black' }}>{ lookingFor } 
                        </Typography>
                        }
                    />        
                    <ListItem
                        primaryText = {
                        <Typography variant="h6" style={{ color: 'blue' }}>Ethnic
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "h1" style={{ color: 'black' }}>{ ethnic } 
                        </Typography>
                        }
                    />
                    <ListItem
                        primaryText = {
                        <Typography variant="h6" style={{ color: 'blue' }}>Relationship Status
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "h1" style={{ color: 'black' }}>{ relationshipStatus } 
                        </Typography>
                        }
                    />
                    <ListItem
                        primaryText = {
                        <Typography variant="h6" style={{ color: 'blue' }}>Relationship Looking For
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "h1" style={{ color: 'black' }}>{ relationshipLooking } 
                        </Typography>
                        }
                    />
                    <ListItem
                        primaryText = {
                        <Typography variant="h6" style={{ color: 'blue' }}>Have Children
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "h1" style={{ color: 'black' }}>{ haveChildren } 
                        </Typography>
                        }
                    />
                    <ListItem
                        primaryText = {
                        <Typography variant="h6" style={{ color: 'blue' }}>Education Level
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "h1" style={{ color: 'black' }}>{ educationLevel } 
                        </Typography>
                        }
                    />
                    <ListItem
                        primaryText = {
                        <Typography variant="h6" style={{ color: 'blue' }}>Employment Status
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "h1" style={{ color: 'black' }}>{ employmentStatus } 
                        </Typography>
                        }
                    />
                    <ListItem
                        primaryText = {
                        <Typography variant="h6" style={{ color: 'blue' }}>Income Range
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "h1" style={{ color: 'black' }}>{ incomeRange } 
                        </Typography>
                        }
                    />

                        
                </List>

                <Button
                    type="submit" 
                    variant="raised"
                    color="primary"
                    //disabled={!isValid}
                    className={classes.button}
                    onClick = {this.back}
                    >
                    Back
                </Button>
                
                <Button
                    type="submit" 
                    variant="raised"
                    color="primary"
                    //disabled={!isValid}
                    className={classes.button}
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

      listItem: {
          color: "red"
      }


  });


  Confirm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Confirm);
