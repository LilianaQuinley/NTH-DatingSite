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



export class FormFinancialDetails extends Component {

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
                        title= " Financial Details">
                         <div style = {{color:"white"}}>
                         {values.email}
                         </div>
                </AppBar>

                    <form className={classes.container} noValidate>

                        <Typography variant="h6" color="inherit" className={classes.grow}>
                        <br/>
                        A Little
                        <br/>
                        More, 
                        <br/>
                       About
                        <br/>
                        You
                        </Typography>
                  
                    
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend" className={classes.formLabel}>
                        What is your education level? </FormLabel>
                            <RadioGroup
                            aria-label="education"
                            name="education"
                            className={classes.group}
                            onChange={handleChange ('educationLevel')}
                            defaultValue= {values.educationLevel}
                            >
                            <FormControlLabel
                                value="Masters / Professional / Ph.D’s degree"
                                control={<Radio color="primary" />}
                                label="Masters / Professional / Ph.D’s degree"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Bachelorette / Associate’s degree"
                                control={<Radio color="primary" />}
                                label="Bachelorette / Associate’s degree"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Some College/Trade/technical/vocational training"
                                control={<Radio color="primary" />}
                                label="Some College/Trade/technical/vocational training"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="High School"
                                control={<Radio color="primary" />}
                                label="High School"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Less than high school"
                                control={<Radio color="primary" />}
                                label="Less than high school"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="No answer"
                                control={<Radio color="primary" />}
                                label="Prefer Not to Answer"
                                labelPlacement="start"
                            />
                        </RadioGroup>
                        
                    </FormControl>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend" className={classes.formLabel}>
                        Are you currently..? </FormLabel>
                            <RadioGroup
                            aria-label="employment"
                            name="employmentStatus"
                            className={classes.group}
                            onChange={handleChange ('employmentStatus')}
                            defaultValue= {values.employmentStatus}
                            >
                            <FormControlLabel
                                value="Employed"
                                control={<Radio color="primary" />}
                                label="Employed"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Self-employed"
                                control={<Radio color="primary" />}
                                label="Self-employed"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Not Working"
                                control={<Radio color="primary" />}
                                label="Not Working"
                                labelPlacement="start"
                            />
                             <FormControlLabel
                                value="PreferNoAnswer"
                                control={<Radio color="primary" />}
                                label="Prefer Not to answer"
                                labelPlacement="start"
                            />
                            
                            </RadioGroup>
                        
                    </FormControl>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend" className={classes.formLabel}>
                        What is your income range? </FormLabel>
                            <RadioGroup
                            aria-label="incomeRange"
                            name="incomeRange"
                            className={classes.group}
                            onChange={handleChange ('incomeRange')}
                            defaultValue= {values.incomeRange}
                            >
                            <FormControlLabel
                                value="Over $150,000"
                                control={<Radio color="primary" />}
                                label="Over $150,000"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Between $100,000 - $150,000"
                                control={<Radio color="primary" />}
                                label="$100,000 - $150,000"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Between $50,000 - $100,000"
                                control={<Radio color="primary" />}
                                label="$50,000 - $100,000"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Between $25,000 - $50,000"
                                control={<Radio color="primary" />}
                                label="$25,000 - $50,000"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Under $25,000"
                                control={<Radio color="primary" />}
                                label="Under $25,000"
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


  FormFinancialDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FormFinancialDetails);
