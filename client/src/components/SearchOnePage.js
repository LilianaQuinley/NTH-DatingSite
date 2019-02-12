import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

import Picture from "../Assets/Images/beach.jpeg"

//////SEARCH





//////PANE #2
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';


//////FOOTER
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';


    const styles = theme => ({

    mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
        paddingRight: 0,
        },
    },

    toolbarMain: {
        //borderBottom: `1px solid ${theme.palette.grey[300]}`,
        alignItems: "right"
    },

    card: {
        display: "flex",
        boxShadow: 'rgba(255, 0, 0, 0.117647) 0px 1px 6px, rgba(255, 0, 0, 0.117647) 0px 1px 4px',
    },

    BioCard: {
        boxShadow: 'rgba(255, 0, 0, 0.117647) 0px 1px 6px, rgba(255, 0, 0, 0.117647) 0px 1px 4px',
    },

    footerCard: {
        boxShadow: 'rgba(255, 0, 0, 0.117647) 0px 1px 6px, rgba(255, 0, 0, 0.117647) 0px 1px 4px',
    },
    specialBorderCard:{
        margin: 25 ,
        boxShadow: 'rgba(255, 0, 0, 0.117647) 0px 1px 6px, rgba(255, 0, 0, 0.117647) 0px 1px 4px',
        display: "relative"
    },


    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 2,
        padding: `${theme.spacing.unit * 6}px 0`,
    }
    });


  ////END STYLES //  
  
  
  const social = ['GitHub', 'Twitter', 'Facebook'];

  function SearchOnePage(props) {

    const { classes } = props;    

    return (
      <React.Fragment>
     
        <div >
              <Typography variant="h6" gutterBottom>
              NTH - Relleno - This needs to be here
              </Typography>

          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={8}>
                <div className={classes.mainFeaturedPostContent}>
                <Toolbar className={classes.toolbarMain}>
                    <IconButton>
                    <Typography variant="h5" color="error" paragraph>
                      Search 
                    </Typography>
                      <FaceIcon />
                    </IconButton>

                    <IconButton>
                    <Typography variant="h5" color="primary" paragraph >
                        Profile
                    </Typography> 
                        <PersonPinIcon />
                    </IconButton>
                  </Toolbar>
                      

{/* SEARCH  */}


      {/* Profile Image CARD  */}
      <Grid container className={classes.root} spacing={16}>

                      <Grid item sm={4}>   
                        <Card className={classes.card}>
                            <div >
                              <CardContent>
                                <CardMedia
                                    component="img"
                                    alt="Use Picture"
                                    height=""
                                    image= { Picture }
                                    title="UserPicture"
                                  />
                                  <Typography variant="subtitle1" color="textSecondary">
                                    "Value Member since May 2019"
                                  </Typography>
                              </CardContent>
                            </div>
                          </Card>
                      </Grid>
                      
           {/* ////////AGE CARD       */}
                      <Grid item sm={8}>   
                        <Card className={classes.card}>
                            <div >
                              <CardContent>
                              <TextField
                                    id="outlined-full-width"
                                    label="Name"
                                    placeholder="Nickname"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                  />
                              <TextField
                                    id="outlined-full-width"
                                    label="Gender & Age"
                                   //defaultValue= {gender}
                                    placeholder= "Female 35 years old.."
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                  />
                              <TextField
                                    id="outlined-full-width"
                                    label="Ethnic"
                                    placeholder="Caucasian"
                                    //defaultValue= {ethnic}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                  />
                              <TextField
                                    id="outlined-full-width"
                                    label="Interested"
                                   //defaultValue= {lookingFor}
                                    placeholder="Seeking men 44 - 58 within 50 miles"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                  />
                              </CardContent>
                            </div>
                          </Card>
                      </Grid>
      </Grid>
      <br/>
      {/* /////BIO CARD */}
                           <Card className={classes.BioCard}>
                              <div >
                                <CardContent >
                                <TextField
                                    id="outlined-full-width"
                                    label="Bio"
                                    placeholder="I am fun, energetic, animal lover.."
                                    //helperText="Special Instructions!"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                  />
                                </CardContent>
                              </div>
                           </Card>
                           <br />
     {/* /////My Pictures Card */}
                          <Card className={classes.card}>
                            <div className={classes.specialBorderCard}>
                              <CardContent>
                                <CardMedia
                                    component="img"
                                    alt="Use Picture"
                                    height=""
                                    image= { Picture }
                                    title="UserPicture"
                                  />
                                  <Typography variant="subtitle1" color="textSecondary">
                                    "Something about this picture"
                                  </Typography>
                                  
                              </CardContent>
                            </div>
                          </Card>
                           <br />

     




                </div>
              </Grid>


{/* RIGHT PANE */}
{/* /////STATUS CARD */}

              <Grid item md={4}>
                <div className={classes.mainFeaturedPostContent}>
                  <Card  >
                      <div className={classes.specialBorderCard}>
                          <CardContent >
                              <Typography variant="h5" color="inherit" paragraph>
                                Profile Status
                              </Typography>
                            <FormControl component="fieldset" >
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
{/* /////FOOTER CARD */}
    <footer className={classes.footer}>
      <Card className={classes.footerCard}>
       <Tabs
            value = {0}      
            indicatorColor="primary" 
            textColor = "blue"
            centered
            style={{ marginTop:2}}
          >
        <Tab icon={<FavoriteIcon />} />
        <Tab icon={<PersonPinIcon />} />
        <Tab icon={<HelpIcon />} />
        <Tab icon={<ShoppingBasket />} />
        <Tab icon={<ThumbDown />} />
        <Tab icon={<ThumbUp />} />
      </Tabs>
{/* 
      <Typography variant="h6" align="center" color="textSecondary" gutterBottom >
              ...
            </Typography> */}
            {social.map(network => (
              <Typography color="textSecondary" key={network}>{network}</Typography>
            ))}
      </Card>
    </footer>
    {/* End footer */}


  </React.Fragment>
  );
}

SearchOnePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchOnePage);