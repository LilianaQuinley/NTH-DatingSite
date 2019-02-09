import React, { Component } from "react";
import { Formik } from "formik";
import { FormMain } from "./form";
import * as Yup from "yup"

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

class InputForm extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }

 render() {
   console.log(this.props)
  const classes = this.props;
  const {toggleFun} =this.props;
  const values = { firstName:"", lastName: "", 
  email: "", confirmPassword: "", password: "" };
  return (
<React.Fragment>

    <div >     
        <h1 style={{ marginTop: 80, marginRight: 90}}>Sign UP !</h1>
         <h2 style={{ marginRight: 90}}> There is Nothing to Loose! </h2>
         
  
        <Formik
            render={props => <FormMain {...props} toggleFun = {toggleFun} />}
            initialValues={values}
            validationSchema={validationSchema}
        />
       
    </div>
</React.Fragment>
);
}
}

export default InputForm;
