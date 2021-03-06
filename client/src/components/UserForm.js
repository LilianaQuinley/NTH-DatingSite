import React, { Component } from 'react'
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import FormFinancialDetails from './FormFinancialDetails';



export class UserForm extends Component {

    state  = {
        step: 1,
        birthday: '',
        gender: '',
        lookingFor: '',
        ethnic: '',
        relationshipStatus: '',
        relationshipLooking: '',
        haveChildren : '',
        educationLevel : '',
        employmentStatus: '',
        incomeRange: '',
        email: this.props.email,
        firstName: this.props.firstName, 
        lastName: this.props.lastName
    }

    // proceede to next step:

    nextStep = () => {
        const { step } = this.state;
        this.setState ({
            step : step + 1
        });
    }


    // go back to previouse step:

    prevStep = () => {
        const { step } = this.state;
        this.setState ({
            step : step - 1
        });
    }

    // handle fields change

    handleChange = input => e => {
        this.setState({ [input]: e.target.value});
    }

  render() {
    const { step } = this.state;
    const {toggleFun} = this.props;
    const { birthday, gender, lookingFor, ethnic, relationshipStatus, relationshipLooking, haveChildren,
    educationLevel, employmentStatus, incomeRange, email, firstName, lastName} = this.state; 
    const values = { birthday, gender, lookingFor, ethnic, relationshipStatus, relationshipLooking, haveChildren,
        educationLevel, employmentStatus, incomeRange, email, firstName, lastName }
    
    switch (step) {
        case 1: 
            return (
                <FormUserDetails 
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
            />
        )
        case 2:
            return (
                <FormPersonalDetails 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                />
         )
         case 3:
            return (
                <FormFinancialDetails 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                />
        )
        case 4:
            return (
                <Confirm 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                toggleFun = {toggleFun}
                />
        )
        
        case 5:
            return <Success />
    }

  }
}

export default UserForm;
