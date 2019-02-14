import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from "material-ui/AppBar";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep ();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep ();
    }

    render() {
        const { classes, value, values, handleChange } = this.props;
        // function handleChange (e) {
        //     setValue (e.target.value);
        // }
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
                    title= " Personal Details">
                        <div style = {{color:"white"}}>
                        {values.email}
                        </div>
                </AppBar>

                    <form className={classes.container} noValidate>

                        <Typography variant="h6" color="inherit" className={classes.grow}>
                        <br/>
                        Some 
                        <br/>
                        More, 
                        <br/>
                       About
                        <br/>
                        You
                        </Typography>
                  
                    
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend"className={classes.formLabel}
                        >What is your relationship status?</FormLabel>
                            <RadioGroup
                            aria-label="relationship Status"
                            name="relationshipStatus"
                            className={classes.group}
                            onChange={handleChange ('relationshipStatus')}
                            defaultValue= {values.relationshipStatus}

                            >
                            <FormControlLabel
                                value="Single (Never married)"
                                control={<Radio color="primary" />}
                                label="Single (Never married)"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Divorced"
                                control={<Radio color="primary" />}
                                label="Divorced"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Separated"
                                control={<Radio color="primary" />}
                                label="Separated"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="It's Complicated"
                                control={<Radio color="primary" />}
                                label="It's Complicated"
                                labelPlacement="start"
                            />
                            </RadioGroup>              
                    </FormControl>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend" className={classes.formLabel}>
                        What type of relationship would you like </FormLabel>
                            <RadioGroup
                            aria-label="relationshipLooking"
                            name="relationshipLooking"
                            className={classes.group}
                            onChange={handleChange ('relationshipLooking')}
                            defaultValue= {values.relationshipLooking}
                            >
                            <FormControlLabel
                                value="Casual Dating"
                                control={<Radio color="primary" />}
                                label="Casual Dating"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Long-Term Relationship"
                                control={<Radio color="primary" />}
                                label="Long-Term Relationship"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Marriage"
                                control={<Radio color="primary" />}
                                label="Marriage"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="No-Preference"
                                control={<Radio color="primary" />}
                                label="No Preference"
                                labelPlacement="start"
                            />
                            </RadioGroup>
                    </FormControl>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend" className={classes.formLabel}>
                        Do you have children?</FormLabel>
                            <RadioGroup
                            aria-label="have Children"
                            name="haveChildren"
                            className={classes.group}
                            onChange={handleChange ('haveChildren')}
                            defaultValue= {values.haveChildren}
                            >
                            <FormControlLabel
                                value="No"
                                control={<Radio color="primary" />}
                                label="No"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Yes (Living at home full time)"
                                control={<Radio color="primary" />}
                                label="Yes (Living at home full time)"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Yes (Living at home part time)"
                                control={<Radio color="primary" />}
                                label="Yes (Living at home part time)"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Yes (Not Living at home)"
                                control={<Radio color="primary" />}
                                label="Yes (Not Living at home)"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="No-Preference)"
                                control={<Radio color="primary" />}
                                label="No Preference"
                                labelPlacement="start"
                            />
                            </RadioGroup>                        
                    </FormControl>

                </form>

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
                    Continue
                </Button>

                     <Particles 
                        params={particleOpt}/> 

                </React.Fragment>
            </MuiThemeProvider>    
        )
  }
}


const styles = theme => ({

    grow: {
        color: "teal"
    },

    appBar: {
        backGroundColor: 'red',
        height: 50,
        alignItems: "center",
        textColor: "red"
      },

      button: {
        margin: theme.spacing.unit,
      
      },
    
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: 40

    },

    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },

    root: {
        display: 'flex',
      },
      formControl: {
        margin: theme.spacing.unit * 3,
      },
      formLabel: {
        color: "blue"
      },
      group: {
        margin: `${theme.spacing.unit}px 0`,
      },
  });


  FormPersonalDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FormPersonalDetails);


