import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


export class UserNamePassword extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep ();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep ();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title= "Create Username and Password"/>
                    <TextField
                        hintText = "Enter your UserName"
                        floatingLabelText=" UserName"
                        onChange = {handleChange ('userName')}
                        defaultValue = {values.userName}
                    />
                    <br/>
                    <TextField
                        hintText = "Enter your Password"
                        floatingLabelText="Password"
                        onChange = {handleChange ('password')}
                        defaultValue = {values.password}
                    />
                    <br/>
                    <TextField
                        hintText = "Re-enter your Password"
                        floatingLabelText="Re-enter Password"
                        onChange = {handleChange ('reenterPassword')}
                        defaultValue = {values.reenterPassword}
                    />
                    <br/>

                    <RaisedButton 
                        label = "Back"
                        primary = {false}
                        style = {styles.button}
                        onClick = {this.back}
                    />
                    
                    <RaisedButton 
                        label = "Continue"
                        primary = {true}
                        style = {styles.button}
                        onClick = {this.continue}
                    />

                </React.Fragment>
            </MuiThemeProvider>
       
        )
  }
}

const styles = {
    button : {
        margin: 24,
    }
}



export default UserNamePassword;
