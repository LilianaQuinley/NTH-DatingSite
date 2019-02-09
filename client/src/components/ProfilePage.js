
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from '@material-ui/core/AppBar';
import LeftPane from "../library/LeftPane"; 
import RightPane from "../library/RightPane";
import image from "../Assets/Images/beach.jpeg"
import ProfileAppBar from '../library/ProfileAppBar';
import ProfileLeftPane from './ProfileLeftPane';



export class ProfilePage extends Component {
  render() {
    //const {toggleFun} = this.props;
   

    return (

        <MuiThemeProvider>
            <React.Fragment>
                    
                    <ProfileAppBar />


            
                    <img src= {image}/>
                <Grid container style = {styles.container}>
            
                    <Grid item sm>
                    LeftPaneProfile 
                    <ProfileLeftPane />
            
                    </Grid>

                    <Grid item sm>
                        RightPaneProfile
                        {/* <RightPaneProfile  toggleFun = {toggleFun} />  */}
                    </Grid>
                </Grid>

            </React.Fragment>

    
        </MuiThemeProvider>
       

    )
  }
}
const styles = {


        backgroundImage: {image},



    




  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: "center",
    marginLeft : 50,
    color: "red"
  },
   
}

export default ProfilePage;
