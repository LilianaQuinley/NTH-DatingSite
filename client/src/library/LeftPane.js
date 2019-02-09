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
                <Typography gutterBottom variant="display1" component="h5" color="primary">
                    Welcome to NTH!
                </Typography>
                <Typography component="h1">
                    The NEW and IMPROVE way to Find the Right Person for you!
                    Nothing to Hide offers the most Safe and Sound way to know and meet people !
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
        width: 400,
        height: 200,
        backgroundColor: 'transparent', 
        marginLeft: 100      
       },
    
    media: {
        objectFit: 'cover',
      },
    };
    
    LeftPane.propTypes = {
        classes: PropTypes.object.isRequired,
      };

export default LeftPane



