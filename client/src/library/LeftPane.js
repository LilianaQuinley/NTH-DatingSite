import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function LeftPane(props) {
  
  return (
      
   // < Paper style = {styles.Paper}>
    <Card style = {styles.card}>
              
                    <CardActionArea>
                        <CardContent>
                            <Typography variant = "display2" style={{ color: 'red', textAlign: "center"}}>
                            Welcome to NTH! !
                            </Typography>

                            <br/>
                            <br/>
                            <Typography variant = "h6" style={{ color: 'black', textAlign: "center"}}>
                                Welcome to Nothing to Hide! This dating site is the most efficient way to find that perfect someone. We've taken all of the pain and uncertainty you experience in other sites to ensure that what you see is what you expect to see when you first meet someone from here. Join now and take the guess work out of dating!
                            </Typography>

                            
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" component="h1" color="secondary">
                        Share
                        </Button>
                        <Button size="small" component="h1" color="secondary">
                        Learn More
                        </Button>
                    </CardActions>
  
        </Card>
   // </Paper>
  );
}

const styles = {    
  
    card: {
        width: 500,
        height: 400,
        backgroundColor: 'transparent', 
        marginLeft: 80, 
        marginTop: -150
       },
    
    media: {
        objectFit: 'cover',
      },
    };
    
    LeftPane.propTypes = {
        classes: PropTypes.object.isRequired,
      };

export default LeftPane



