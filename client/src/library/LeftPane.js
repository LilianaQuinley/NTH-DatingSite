import React, { Component } from 'react';

import Paper from "@material-ui/core/Paper";

import picture from '../Assets/Images/Liliana_Quinley.jpg'



export class LeftPane extends Component {
  render() {
    return (
      <div>
         <Paper style = {styles.Paper}>
         
            <img src = {picture} alt = "picture"/>
         
            Left Pane
        </Paper>
        </div>
    )
  }
}
const styles = {
    Paper : {padding: 20, marginTop: 10, marginBottom: 10 },
    picture : {width : 250, height : 250}
}

export default LeftPane



