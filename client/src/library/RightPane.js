import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import InputFormMain from '../InputFormMain';
import Card from '@material-ui/core/Card';

export class RightPane extends Component {
  render() {
    return (
      < Paper style = {styles.Paper}>
        <Card style = {styles.card}>
             <InputFormMain />  
        </Card>
      </Paper>
     
    )
  }
}
const styles = {
    Paper : {padding: 20, margin: 50 },
    card: {
      width: 500,
      height: 350
     },
     media: {
      objectFit: 'cover',
    },
   
}

export default RightPane;
  


