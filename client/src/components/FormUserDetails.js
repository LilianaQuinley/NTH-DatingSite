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

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep ();
    }

    render() {
        const { classes, value, values, handleChange } = this.props;

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
                        title= " User Details">
                         <div style = {{color:"white"}}>
                         {values.email}
                         </div>
                        </AppBar>
                    
                    <form className={classes.container} noValidate>

                        <Typography variant="h6" color="inherit" className={classes.grow}>
                        What is your Birthday
                        <br/>
                        Gender and 
                        <br/>
                        what are your looking for..
                        </Typography>
                  
                    <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" className={classes.formLabel}>Birthday</FormLabel>                      
                        <TextField
                            id="birthday"
                            label=".."
                            type="date"
                            onChange={handleChange ('birthday')}
                            defaultValue= {values.birthday}
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
                            name="gender"
                            onChange={handleChange ('gender')}
                            defaultValue= {values.gender}
                            className={classes.group}
                            >
                            <FormControlLabel
                                value="Female"
                                control={<Radio color="primary" />}
                                label="Female"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Male"
                                control={<Radio color="primary" />}
                                label="Male"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Other"
                                control={<Radio color="primary" />}
                                label="Other"
                                labelPlacement="start"
                            />
                            </RadioGroup>
                    </FormControl>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend"className={classes.formLabel}>Looking for</FormLabel>
                            <RadioGroup
                            aria-label="lookingFor"
                            name="lookingFor"
                            onChange={handleChange ('lookingFor')}
                            defaultValue= {values.lookingFor}
                            className={classes.group}
                            >
                            <FormControlLabel
                                value="Female"
                                control={<Radio color="primary" />}
                                label="Female"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Male"
                                control={<Radio color="primary" />}
                                label="Male"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Both Men or Woman "
                                control={<Radio color="primary" />}
                                label="Either"
                                labelPlacement="start"
                            />
                            </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend"className={classes.formLabel}> Ethnic origin</FormLabel>
                            <RadioGroup
                            aria-label="ethnic"
                            name="ethnic"
                            onChange={handleChange ('ethnic')}
                            defaultValue= {values.ethnic}
                            className={classes.group}
                            >
                            <FormControlLabel
                                value="White"
                                control={<Radio color="primary" />}
                                label="White"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Hispanic or Latino"
                                control={<Radio color="primary" />}
                                label="Hispanic or Latino"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Black or African American"
                                control={<Radio color="primary" />}
                                label="Black or African American"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Native American or American Indian"
                                control={<Radio color="primary" />}
                                label="Native American or American Indian"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="Native Asian / Pacific Islander"
                                control={<Radio color="primary" />}
                                label="Native Asian / Pacific Islander "
                                labelPlacement="start"
                            />
                             <FormControlLabel
                                value="Other"
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


