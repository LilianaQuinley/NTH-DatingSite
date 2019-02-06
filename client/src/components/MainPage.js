import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import LeftPane from "../library/LeftPane"; 
import RightPane from "../library/RightPane";


export class MainPage extends Component {
  render() {
    const {toggleFun} = this.props;
    return (
      <div>
        <Grid container style = {styles.container}>
            <Grid item sm>
                <LeftPane  />   
            </Grid>

            <Grid item sm>
                <RightPane  toggleFun = {toggleFun} /> 
            </Grid>
        </Grid>
       
      </div>
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

export default MainPage;
