import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import InputFormMain from '../InputFormMain';

export class RightPane extends Component {
  render() {
    return (
      <div>
        < Paper style = {styles.Paper}>
        Right Pane
        <InputFormMain />

         
        </Paper>
      </div>
    )
  }
}
const styles = {
    Paper : {padding: 20, margin: 10 }
}

export default RightPane;
  


