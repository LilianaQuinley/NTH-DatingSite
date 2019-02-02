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
import Picture from "../Assets/Images/Liliana_Quinley.jpg"


function LeftPane(props) {
  
  return (

    < Paper style = {styles.Paper}>
    Left Pane


    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
            
          height=""
          image= { Picture }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            my website
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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
    Paper : {padding: 20, marginTop: 10, marginBottom: 10 },
    
    card: {
        width: 151
      },
      media: {
        objectFit: 'cover',
      },
    };
    
    LeftPane.propTypes = {
        classes: PropTypes.object.isRequired,
      };

export default LeftPane



