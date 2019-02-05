import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import LeftPane from "../library/LeftPane"; 
import RightPane from "../library/RightPane";


export class MainPage extends Component {
  render() {
    const {toggleFun} = this.props;
    return (
      <div>
        <Grid container>
            <Grid item sm>
                <LeftPane styles = {styles} />   
            </Grid>

            <Grid item sm>
                <RightPane styles = {styles} toggleFun = {toggleFun} /> 
            </Grid>
        </Grid>
       
      </div>
    )
  }
}
const styles = {
    Paper : {padding: 25, margin: 10 }
}

export default MainPage;
