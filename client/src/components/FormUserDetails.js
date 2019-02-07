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



export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep ();
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
                        title= " User Details"/>

                    <form className={classes.container} noValidate>

                        <Typography variant="h6" color="inherit" className={classes.grow}>
                        What is your 
                        <br/>
                        Birthday, 
                        <br/>
                        Gender and 
                        <br/>
                        Seeking for..
                        </Typography>
                  
                    <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" className={classes.formLabel}>Birthday</FormLabel>                      
                        <TextField
                            id="date"
                            label=".."
                            type="date"
                            // defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </FormControl>
                    
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend" className={classes.formLabel}>Gender</FormLabel>
                            <RadioGroup
                            aria-label="gender"
                            name="gender2"
                            className={classes.group}
                            value={value}
                            onChange={handleChange}
                            >
                            <FormControlLabel
                                value="female"
                                control={<Radio color="primary" />}
                                label="Female"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="male"
                                control={<Radio color="primary" />}
                                label="Male"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="other"
                                control={<Radio color="primary" />}
                                label="Other"
                                labelPlacement="start"
                            />
                            </RadioGroup>
                    </FormControl>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend"className={classes.formLabel}>Seeking for</FormLabel>
                            <RadioGroup
                            aria-label="gender"
                            name="gender2"
                            className={classes.group}
                            value={value}
                            onChange={handleChange}
                            >
                            <FormControlLabel
                                value="female"
                                control={<Radio color="primary" />}
                                label="Female"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="male"
                                control={<Radio color="primary" />}
                                label="Male"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="other"
                                control={<Radio color="primary" />}
                                label="Other"
                                labelPlacement="start"
                            />
                            </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend"className={classes.formLabel}> Ethnic origin</FormLabel>
                            <RadioGroup
                            aria-label="ethnic"
                            name="ethnic"
                            className={classes.group}
                            value={value}
                            onChange={handleChange}
                            >
                            <FormControlLabel
                                value="white"
                                control={<Radio color="primary" />}
                                label="White"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="hispanic"
                                control={<Radio color="primary" />}
                                label="Hispanic or Latino"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="black"
                                control={<Radio color="primary" />}
                                label="Black or African American"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="nativeAmerican"
                                control={<Radio color="primary" />}
                                label="Native American or American Indian"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="asianPacific"
                                control={<Radio color="primary" />}
                                label="Native Asian / Pacific Islander "
                                labelPlacement="start"
                            />
                             <FormControlLabel
                                value="other"
                                control={<Radio color="primary" />}
                                label="Other "
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
                    style = {styles.button}
                    onClick = {this.continue}
                    >
                    Continue
                </Button>

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
        height: 50,
        alignItems: "center",
      },

    button : {
        margin: 24,
    },
    
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      margin : 40
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


  FormUserDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FormUserDetails);


