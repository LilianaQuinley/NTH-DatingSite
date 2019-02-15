import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import LeftPane from "../library/LeftPane"; 
import RightPane from "../library/RightPane";
import Particles from 'react-particles-js';
import Typography from '@material-ui/core/Typography';

const particleOpt =  {
  particles: {
    number: {
      value: 150,
      density : {
        enable: true,
        value_area: 700
      }
    }
  }
}

export class MainPage extends Component {
  render() {
    const {toggleFun} = this.props;
    return (
      <div>
    
        <Grid container >
            <Grid item sm>
            <Particles 
                params={particleOpt}
              /> 
                <LeftPane  />  
                
            </Grid>

            <Grid item sm>
                <RightPane  toggleFun = {toggleFun} /> 
            </Grid>
             
        </Grid>
        <Particles 
                params={particleOpt}
            />   
      </div>
    )
  }
}
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: "center",
    color: "red"
  },
   
}

export default MainPage;
