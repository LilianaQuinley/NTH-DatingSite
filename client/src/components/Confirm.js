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
import Particles from 'react-particles-js';

const particleOpt =  {
    particles: {
      number: {
        value: 150,
        density : {
          enable: true,
          value_area: 600
        }
      }
    }
  }



export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        console.log("Save the user");
        console.log(this.props)
        api.createUserProfile(this.props.values, () => {this.props.toggleFun('profile', this.props.mail, this.props.values)})
        //PROCESS FORM //
        
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep ();
    };

    render() {
    const {classes} = this.props
    const { values : { birthday, gender, lookingFor, ethnic, relationshipStatus, relationshipLooking,
        haveChildren, educationLevel, employmentStatus, incomeRange, email, firstName, lastName } } = this.props;

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
                position="sticky"
                title= " Confirmation ">
                    <div style = {{color:"white"}}>
                    {email} 
                    </div>
            </AppBar>
                <List>

                    <ListItem
                        primaryText = {
                        <Typography variant="h6" style={{ color: 'white' }}>Birthday
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "display4" style={{ color: 'blue' }}>{ birthday } 
                        </Typography>
                        }
                    />

                    <ListItem
                        primaryText = {
                        <Typography variant="h6" style={{ color: 'white' }}>Gender
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "display4"  style={{ color: 'blue' }}>{ gender } 
                        </Typography>
                        }
                    />  
                    <ListItem
                         primaryText = {
                        <Typography variant="h6" style={{ color: 'white' }}>Looking For
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "display4" style={{ color: 'blue' }}>{ lookingFor } 
                        </Typography>
                        }
                    />        
                    <ListItem
                        primaryText = {
                        <Typography variant="h6" style={{ color: 'white' }}>Ethnic
                        </Typography>
                        }
                        primaryText = {
                        <Typography  component = "display4" style={{ color: "blue" }}>{ ethnic } 
                        </Typography>
                        }
                    />
                    <ListItem
                        primaryText = {
                        <Typography variant="h6" style={{ color: 'white' }}>Relationship Status
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "display4" style={{ color: 'blue' }}>{ relationshipStatus } 
                        </Typography>
                        }
                    />
                    <ListItem
                        primaryText = {
                        <Typography variant="h6" style={{ color: 'white' }}>Relationship Looking For
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "display4" style={{ color: 'blue' }}>{ relationshipLooking } 
                        </Typography>
                        }
                    />
                    <ListItem
                        primaryText = {
                        <Typography variant="h6" style={{ color: 'white' }}>Have Children
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "display4" style={{ color: 'blue' }}>{ haveChildren } 
                        </Typography>
                        }
                    />
                    <ListItem
                        primaryText = {
                        <Typography variant="h6" style={{ color: 'white' }}>Education Level
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "display4" style={{ color: 'blue' }}>{ educationLevel } 
                        </Typography>
                        }
                    />
                    <ListItem
                        primaryText = {
                        <Typography variant="h6" style={{ color: 'white' }}>Employment Status
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "display4" style={{ color: 'blue' }}>{ employmentStatus } 
                        </Typography>
                        }
                    />
                    <ListItem
                        primaryText = {
                        <Typography variant="h6" style={{ color: 'white' }}>Income Range
                        </Typography>
                        }
                        secondaryText = {
                        <Typography  component = "display4" style={{ color: 'blue' }}>{ incomeRange } 
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

                <Particles 
                        params={particleOpt}/> 

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
