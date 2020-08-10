/*
 Copyright © 2020 BYTEPAL AI, LLC And Its Affiliates. All rights reserved.
*/

import React from 'react';
import { makeStyles, useTheme, createMuiTheme  } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Send from '@material-ui/icons/Send';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import axios from 'axios';
import {green, purple } from '@material-ui/core/colors';


const useStyles2 = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 275,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 2,
  },
  iconButton: {
    padding: 8,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export const CustomizedInputBase = () => {
  const classes = useStyles2();
  var email = "hi"

  function ValidateEmail(mail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(mail.match(mailformat)) {
      return true;
    }
    else {
      alert("You have entered an invalid email address");
      return false;
    }
  }

  const handleChange = (event) => {
    email = event.target.value;
    //console.log(email)
  }

 const handleSubmit = (event) => {
    //Make a network call somewhere
    if(ValidateEmail(email) == false) {
      event.preventDefault();
    }
    else {
      event.preventDefault();
      console.log(email)
      console.log("i was clicked")
      const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json' },
        body: JSON.stringify({ email:email})
      };
      fetch('https://api.bytepal.io/mailchimp', requestOptions)
      alert("Email Sent");
    }
  }

  return (
    <Paper component="form" className={classes.root} style={{marginLeft:15}}>
      <InputBase
        className={classes.input}
        placeholder="Enter Email To Receive App Link"
        inputProps={{'aria-label': 'search google maps'}}
        onChange={handleChange}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton type="submit" className={classes.iconButton} aria-label="search"  onClick={handleSubmit}>
        <Send/>
      </IconButton>
    </Paper>
  );
}
