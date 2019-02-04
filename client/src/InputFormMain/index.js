import React, { Component } from "react";
import { Formik } from "formik";
import { FormMain } from "./form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup"
import green from '@material-ui/core/colors/green';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



const validationSchema = Yup.object({
  firstName: Yup.string("Enter your First Name")
  .required("First Name is required"),
  lastName: Yup.string("Enter a Last Name")
  .required("Last Name is required"),
  email: Yup.string("Enter your email")
  .email("Enter a valid email")
  .required("Email is required"),
  password: Yup.string("")
  .min(8, "Password must contain at least 8 characters")
  .required("Enter your password"),
  confirmPassword: Yup.string("Enter your password")
  .required("Confirm your password")
  .oneOf([Yup.ref("password")], "Password does not match")
});



const styles = theme => ({
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
        .spacing.unit * 5}px`
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: "100",
      marginRight: "100",
    }
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
});



class InputForm extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }

 render() {
   console.log(this.props)
  const classes = this.props;
  console.log("classes in index.js")
  console.log(classes)
  const values = { firstName:"", lastName: "", email: "", confirmPassword: "", password: "" };
  return (
<React.Fragment>
    <div className={classes.container}>
        <Paper elevation={1} className={classes.paper}>
        <h1>Sign UP </h1>
        <h2>There is Nothing to Loose! @@</h2>
      
        <Formik
            render={props => <FormMain {...props} />}
            initialValues={values}
            validationSchema={validationSchema}
        />
        </Paper>
    </div>
</React.Fragment>
);
}
}

export default withStyles(styles)(InputForm);
// export default indexForm;