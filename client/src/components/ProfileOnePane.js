
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Picture from "../Assets/Images/beach.jpeg"

//////PANE #2
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



const styles = theme => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    toolbarMain: {
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
    },
    mainFeaturedPost: {
      backgroundColor: theme.palette.white,
      color: theme.palette.common.black,
      marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
      padding: `${theme.spacing.unit * 6}px`,
      [theme.breakpoints.up('md')]: {
        paddingRight: 0,
      },
    },
    mainGrid: {
      marginTop: theme.spacing.unit * 3,
    },


    //////////////////////////
    card: {
      display: "flex"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },

    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },

    
    //////////////////////////

    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
    markdown: {
      padding: `${theme.spacing.unit * 3}px 0`,
    },
    sidebarAboutBox: {
      padding: theme.spacing.unit * 2,
      backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
      marginTop: theme.spacing.unit * 3,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing.unit * 8,
      padding: `${theme.spacing.unit * 6}px 0`,
    },
  });

  
  const social = ['GitHub', 'Twitter', 'Facebook'];

  function ProfileOnePane(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    
    return (
      <React.Fragment>
     
        <div className={classes.layout}>
              <Typography variant="h6" gutterBottom>
              NTH - Relleno
              </Typography>

          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={8}>
              <div className={classes.mainFeaturedPostContent}>
                  <Typography variant="h5" color="inherit" paragraph>
                    My Profile
                    </Typography>
                          <Card className={classes.card}>
                              <div className={classes.details}>
                                <CardContent className={classes.content}>

                                <CardMedia
                                    component="img"
                                    alt="Use Picture"
                                    height=""
                                    image= { Picture }
                                    title="UserPicture"
                                  />
                                  <Typography component="h5" variant="h5">
                                    "Your Nickname"
                                  </Typography>
                                  <Typography variant="subtitle1" color="textSecondary">
                                    "Your Email"
                                  </Typography>
                                </CardContent>
                              </div>
                           </Card>
                           <br/>
                           <Divider />
                           
          
                           <Card className={classes.card}>
                              <div className={classes.details}>
                                <CardContent className={classes.content}>
                                  <Typography component="h5" variant="h5">
                                      ABOUT ME
                                      </Typography>
                                    <br/>
        {/* const { values : { birthday, gender, lookingFor, ethnic, relationshipStatus, relationshipLooking,
        haveChildren, educationLevel, employmentStatus, incomeRange, email


 */}

                                    <Grid container>
                                      <Grid item md={6}>
                                        <Typography component="h6" variant="h6">
                                        I am Looking For ....
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                          "Female, men, both"
                                        </Typography>
                                      </Grid>
                                      <Grid item md={6}>
                                        <Typography component="h6" variant="h6">
                                        My Relationship Status is.....
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                          "Divorce, Single.."
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography component="h6" variant="h6">
                                        I an interested on ....
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                        "RelationShip that I am looking for"
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography component="h6" variant="h6">
                                        I have children .....
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                          "Yes / No"
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography component="h6" variant="h6">
                                        My education level is .....
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                          "High School, PHD"
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                      <Typography component="h6" variant="h6">
                                      My am currently .....
                                      </Typography>
                                      <Typography variant="subtitle1" color="textSecondary">
                                        "employee, looking for job"
                                      </Typography>
                                    </Grid>
  
                                  </Grid>
                                
                                </CardContent>
                              </div>
                           </Card>
                </div>
              </Grid>


              <Grid item md={4}>
                <div className={classes.mainFeaturedPostContent}>
                  <Card className={classes.card} >
                      <div className={classes.details}>
                          <CardContent className={classes.content}>
                              <Typography variant="h5" color="inherit" paragraph>
                                Profile Status
                              </Typography>
                            <FormControl component="fieldset" className={classes.formControl}>
                                  <RadioGroup
                                  aria-label="Profile Status"
                                  name="profileStatus"
                                  className={classes.group}
                                  // onChange={handleChange ('relationshipStatus')}
                                  // defaultValue= {values.relationshipStatus}

                                  >
                                  <FormControlLabel
                                      value="Visible"
                                      control={<Radio color="primary" />}
                                      label="Anyone can see you"
                                      labelPlacement="start"
                                  />
                                  <FormControlLabel
                                      value="Invisible"
                                      control={<Radio color="primary" />}
                                      label="No one can see you"
                                      labelPlacement="start"
                                  />
                                  <FormControlLabel
                                      value="ChooseViewYou"
                                      control={<Radio color="primary" />}
                                      label="Choose who sees you"
                                      labelPlacement="start"
                                  /> 
                              </RadioGroup>              
                            </FormControl>
                          </CardContent>
                      </div>
                  </Card>
                  
                </div>
              </Grid>
            </Grid>
          </Paper>



        </div>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
              </Typography>
              {social.map(network => (
                <Typography key={network}>{network}</Typography>
              ))}
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}

      
    </React.Fragment>
  );
}

ProfileOnePane.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileOnePane);