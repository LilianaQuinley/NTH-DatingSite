import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import Picture from "../Assets/Images/Liliana_Quinley.jpg"


function LeftPane(props) {
  
  return (

    < Paper style = {styles.Paper}>
        <Card >
            <CardActionArea>
                {/* <CardMedia
                component="img"
                alt="Contemplative Reptile"
                    
                height=""
                // image= { Picture }
                title="Contemplative Reptile"
                /> */}
                <CardContent>
                <Typography gutterBottom variant="display4" component="h2" color="primary">
                    Welcome to NTH!
                </Typography>
                <Typography variant="h6">
                    The NEW and IMPROVE way to Find the Right Person for you!
                    Nothing to Hide offers the most Safe and Sound way to know and meet people !
                
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </Card>
    </Paper>
  );
}

const styles = {
    Paper : {padding: 20, margin: 50},
    
     card: {
        width: 200
       },
       media: {
        objectFit: 'cover',
      },
    };
    
    LeftPane.propTypes = {
        classes: PropTypes.object.isRequired,
      };

export default LeftPane



