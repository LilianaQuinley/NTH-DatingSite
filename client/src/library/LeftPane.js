import React, { Component } from 'react';

import Paper from "@material-ui/core/Paper";


export class LeftPane extends Component {
  render() {
    return (
      <div>
         <Paper style = {styles.Paper}>
            Left Pane
        </Paper>
        </div>
    )
  }
}
const styles = {
    Paper : {padding: 20, marginTop: 10, marginBottom: 10 }
}

export default LeftPane



