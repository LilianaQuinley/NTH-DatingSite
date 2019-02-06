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
    height:30,
    background: white,
  },
});


function MenuAppBar (props) {
  const { classes } = props;
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
              // value={values.name}
              // onChange={handleChange('name')}
            
            />
            <TextField
              id="login-password"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              
            />
            <Button color="inherit" onClick={() => { alert("Clicked!"); }}>Login</Button>
            
        </Toolbar>
      </AppBar>
    </div>
  );
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);