import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { white } from 'material-ui/styles/colors';


const styles = theme => ( {

    appBar: {
    background: 'linear-gradient(pink 10%, 30%, blue 90%)',
    height: 70,
    color: "white"   
  },
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


function ProfileAppBar (props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className = {classes.appBar}>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
            <Typography variant="h6" color="inherit" className={classes.grow}>
              NTH Your Perfect Match
            </Typography>
            
                <MenuItem>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
            <MenuItem>
              <IconButton color="inherit">
                <Badge badgeContent={11} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <p>Notifications</p>
            </MenuItem>
           {/* // <MenuItem onClick={handleProfileMenuOpen}> */}
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
              <p>Profile</p>
            {/* //</MenuItem> */}
            
        </Toolbar>
      </AppBar>
    </div>
  );
}

ProfileAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileAppBar);


