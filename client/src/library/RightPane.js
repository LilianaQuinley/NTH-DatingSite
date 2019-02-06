import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import InputFormMain from '../InputFormMain';


export class RightPane extends Component {
  render() {
    const {toggleFun} = this.props;

    return (
      
     < Paper style = {styles.Paper}>
        <InputFormMain  toggleFun = {toggleFun}/>  
     </Paper>
     
    )
  }
}
const styles = {
    Paper : {
    padding: 20,
    margin: 50,
    backgroundColor: 'transparent'
    },

     media: {
      objectFit: 'cover',
    },
   
}

export default RightPane;
  


