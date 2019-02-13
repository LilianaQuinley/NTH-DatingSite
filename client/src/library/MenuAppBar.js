import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import { white } from 'material-ui/styles/colors';
import API from "./API";


const styles = theme => ( {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    height: 25,
    background: white,
    padding: 10,
    width:200,

  },
});


function MenuAppBar (props) {
  const { classes } = props;
  const toggleFun = props.toggleFun;
  
  let password = "";
  let email = "";

  const sucess = (target, profile) => {toggleFun (target, email, profile )};
  const failure =  () => alert ("Incorrect username / password");


  const handleClick = () => {
    const body = {email: email, password: password}
    API.login (body, sucess, failure)
  };

  const handleChangePW = e => {
    password = e.target.value;
  };

  const handleChangeEmail = e => {
    email = e.target.value;
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
            <Typography variant="h6" color="inherit" className={classes.grow}>
            </Typography>
            
            <TextField
              id="login-email"
              label="Email Address"
              className={classes.textField}
              autoComplete="email"  
              margin="normal"
              variant="outlined"
              // value={values.name}
              onChange={handleChangeEmail}
            
            />
            <TextField
              id="login-password"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              onChange={handleChangePW}
              
            />
            <Button color="inherit" onClick={() => { handleClick() }}>Login</Button>
            
        </Toolbar>
      </AppBar>
    </div>
  );
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);