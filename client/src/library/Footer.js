import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';

export class Footer extends Component {
  render() {
    return (
      <div>
         <Paper style = {{  backgroundColor: 'transparent'}}>
            <Tabs
                value = {0}      
                indicatorColor="primary" 
                centered
                style={{ marginTop: 150}}
             >
            <Tab icon={<FavoriteIcon />} />
            <Tab icon={<PersonPinIcon />} />
            <Tab icon={<HelpIcon />} />
            <Tab icon={<ShoppingBasket />} />
            <Tab icon={<ThumbDown />} />
            <Tab icon={<ThumbUp />} />
          </Tabs>

        </Paper>
      </div>
    )
  }
}


export default Footer



