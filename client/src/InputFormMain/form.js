
import Button from "@material-ui/core/Button";
import React from 'react';
import TextField from '@material-ui/core/TextField';
import API from '../library/API';
import Typography from '@material-ui/core/Typography';

export const FormMain = (props) => {
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
    <form style={{ marginTop: 10, width:500}} noValidate autoComplete="off" onSubmit={(e) => {
      e.preventDefault();
      const body = {lastName: lastName, firstName: firstName, email: email, password: password};
      API.createUser(body, () => {toggleFun ('registering', email, null, firstName, lastName)})
      
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
        style={{ padding:8, width:200}}
        variant="standard"
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
        style={{ padding:8, width:200}}
        variant="standard"
      />
    
     <TextField
       required
       id="outlined-full-width"
       name="email"
       style={{ marginRight: 8,  padding:10}}
       helperText={touched.email ? errors.email : ""}
       error={touched.email && Boolean(errors.email)}
       label="Email"
       fullWidth
       value={email}
       variant="standard"
       onChange={change.bind(null, "email")}

     />
     <br/>
     <TextField
      required
       id="password"
       name="password"
       helperText={touched.password ? errors.password : ""}
       error={touched.password && Boolean(errors.password)}
       label="Password"
       style={{padding:8, width:200}}
       variant="standard"
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
       style={{ padding:8, width:200}}
       variant="standard"
       type="password"
       value={confirmPassword}
       onChange={change.bind(null, "confirmPassword")}

     />

     <br/>

        <Typography variant="p" align="center" color="textSecondary" gutterBottom >
        By clicking Continue, I agree to the Terms of Use
        </Typography> 


     <Button
       type="submit" 
       variant="raised"
       color="primary"
       style={{ marginTop: 25, padding:10}}
       disabled={!isValid}
     >
       Continue
     </Button>
  
   </form>
 );
};