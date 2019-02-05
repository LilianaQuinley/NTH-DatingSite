// import React from "react";
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";


import React from 'react';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';


const styles = theme => ({
  container: {
    display: 'box',
    flexWrap: 'wrap',
    color: "red",
    background: "red"
  },
  textField: {
    marginLeft: "100",
    marginRight: "100",
  },
});

const mystyles = {
  container: {
    display: "box",
    flexWrap: 'wrap',
    color: "red",
    background: "red"
  },
  textField: {
    marginLeft: "1",
    marginRight: "100",
    background: "red"
  },
};

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
});


export const FormMain = (props) => {
  const { classes } = props;
  const {toggleFun} = props;


  const {
    values: { firstName, lastName, email, password, confirmPassword },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched
    } = props;
    
    
    const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
    };


  return (
    <form noValidate autoComplete="off" onSubmit={(e) => {
      e.preventDefault();
      toggleFun ('registering')
      //go to Step 1
    }}>
     
      <TextField
        required
        id="firstName-required"
        name="firstName"
        helperText={touched.name ? errors.name : ""}
        error={touched.name && Boolean(errors.name)}
        label="First Name"
        value={firstName}
        onChange={change.bind(null, "name")}
        style={{ margin: 8, padding:8, width:200}}
        variant="outlined"
      />
      
      <TextField
        required
        id="lastName-required"
        name="lastName"
        helperText={touched.name ? errors.name : ""}
        error={touched.name && Boolean(errors.name)}
        label="Last Name"
        value={lastName}
        onChange={change.bind(null, "name")}
        style={{ margin: 8, padding:8, width:200}}
        variant="outlined"
      />
    
     <TextField
       required
       id="outlined-full-width"
       name="email"
       style={{ margin: 8, marginRight: 8,  padding:10}}
       helperText={touched.email ? errors.email : ""}
       error={touched.email && Boolean(errors.email)}
       label="Email"
       fullWidth
       value={email}
       variant="outlined"
       onChange={change.bind(null, "email")}

     />
     <TextField
      required
       id="password"
       name="password"
       helperText={touched.password ? errors.password : ""}
       error={touched.password && Boolean(errors.password)}
       label="Password"
       style={{ margin: 8, padding:8, width:200}}
       variant="outlined"
       type="password"
       value={password}
       onChange={change.bind(null, "password")}

     />
     <TextField
       required
       id="confirmPassword"
       name="confirmPassword"
       helperText={touched.confirmPassword ? errors.confirmPassword : ""}
       error={touched.confirmPassword && Boolean(errors.confirmPassword)}
       label="Confirm Password"
       style={{ margin: 8, padding:8, width:200}}
       variant="outlined"
       type="password"
       value={confirmPassword}
       onChange={change.bind(null, "confirmPassword")}

     />
     <Button
       type="submit" 
       variant="raised"
       color="primary"
       disabled={!isValid}
     >
       Submit
     </Button>
  
   </form>
 );
};