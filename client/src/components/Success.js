import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export class Success extends Component {

    render() {
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
                        title= "Success"/>
                    <h1>Thank You For Your Submission </h1>
                    <p>you will get an email with further instrucctions</p>

                </React.Fragment>
            </MuiThemeProvider>
       
        )
  }
}


export default Success;