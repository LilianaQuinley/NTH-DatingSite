import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import InputFormMain from '../InputFormMain';
import Card from '@material-ui/core/Card';

export class RightPane extends Component {
  render() {
    const {toggleFun} = this.props;

    return (
     // < Paper style = {styles.Paper}>
        <Card style = {styles.card}>
             <InputFormMain  toggleFun = {toggleFun}/>  
        </Card>
     // </Paper>
     
    )
  }
}
const styles = {
    Paper : {padding: 20, margin: 50,
    backgroundColor: 'transparent'
    },

    card: {
      margin: 10,
      width: 500,
      height: 800,
      backgroundColor: 'transparent',

     },
     media: {
      objectFit: 'cover',
    },
   
}

export default RightPane;
  


