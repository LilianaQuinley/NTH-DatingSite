
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from '@material-ui/core/Paper';
import image from "../Assets/Images/beach.jpeg"
import ProfileAppBar from '../library/ProfileAppBar';
import ProfileOnePane from './ProfileOnePane';



export class ProfilePage extends Component {
  render() {

    return (

        <MuiThemeProvider>
            <React.Fragment>
                
                <ProfileAppBar />

                <Grid container style = {styles.container}>
                    <Grid item sm>
                            <ProfileOnePane />
                    </Grid>
                </Grid>

            </React.Fragment>
        </MuiThemeProvider>
       

    )
  }
}
const styles = {

  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: "center",
    marginLeft : 50,
    color: "red"
  },
   
}

export default ProfilePage;
