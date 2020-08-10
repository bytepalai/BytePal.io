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
import {CustomizedInputBase} from  './CustomizedInput.js';
import {green, purple } from '@material-ui/core/colors';
import icon1 from './Assets/icon1.png'
import icon2 from './Assets/icon2.png'
import icon5 from './Assets/icon5.png'
import icon6 from './Assets/icon6.png'
import icon7 from './Assets/icon7.png'
import icon8 from './Assets/icon8.png'
import icon9 from './Assets/icon9.png'
import bytepal from './Assets/bytepalio.gif'
import apple from './Assets/apple.png'
import bytepal_logo from './Assets/bytepal.png'


const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    align: "center"
  },
  media: {
    height: 160,
    width:150,
    alignItems: 'center',
  },
  typography: {
    align: "center"
  }
});

const useStyles1 = makeStyles((theme) => ({
  root:{
    flexGrow: 1,
  },
  paper:{
    padding: theme.spacing(2),
    background: "#f8f4f4",
    alignItems:"center"
  },
  image:{
    width: 600,
    height: 600,
  },
  img:{
    margin:theme.spacing(0),
    maxWidth: '90%',
    maxHeight: '90%',
  },
  img4: {
    margin: theme.spacing(4),
    maxWidth: '85%',
    maxHeight: '85%',
  },
  img2:{
    marginTop: 40,
    marginBottom: 20,
    maxWidth: '55%',
    maxHeight: '55%',
  },
  img3:{
    margin: 'auto',
    maxWidth: '17%',
    maxHeight: '17%',
  },

}));

export const ComplexGrid2 = (props) => {
      const classes = useStyles1();
      var show

      if (props.option=== "first"){
        show = <img className={classes.img} alt="complex" src={props.display} style={{marginLeft:15}} />
      }
      else {
      show = <img className={classes.img4} alt="complex" src={props.display} />
      }

      const theme = createMuiTheme({
        typography: {
          fontFamily: [
            '"Passion One"', 'cursive',
          ].join(','),
        }
      });
      const theme2 = createMuiTheme({
        typography: {
          fontFamily: [
            'Teko', 'sans-serif',
          ].join(','),
          fontSize: 30,
        }
      });
      var app_logo = " "

      if(props.logo === "empty"){
        app_logo = " "
      }
      else {
        // href="https://www.apple.com/ios/app-store/">
        app_logo = <Link>
        <img className={classes.img2} alt="complex" src={props.logo} style={{marginLeft:15}}/>
        </Link>
      }

      const texts = props.description
      const listTexts = texts.map((text) =>
      (text === "divider") ?
      <Divider orientation="horizontal" /> :
      (text === "line") ?
      <p> {"\n"} </p> :
      <Typography variant="subtitle2" color="textPrimary" fontFamily="Helvetica" style={{marginLeft:15}}>
        {text}
        </Typography>
      )

      var image1 = " "
      var image2 = " "

      if(props.images === "empty"){
        image1 = " "
        image2 = "  "
      }
      else{
        image1 = <img className={classes.img3} alt="complex" src={props.images[0]} />
        image2 = <img className={classes.img3} alt="complex" src={props.images[1]} />
      }

      return (
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <Paper className={classes.paper} square={true}  elevation={3}>
              <Grid container spacing={1}>
                <Grid item>
                  {show}
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="h2"fontFamily="Helvetica" style={{marginLeft:15}} >
                        {props.title}
                      </Typography>
                      <ThemeProvider theme={theme2}>
                        {listTexts}
                      </ThemeProvider>
                      {app_logo}
                      <p> </p>
                      {image1}
                      <p> </p>
                      {image2}
                    </Grid>
                    <Grid item>
                      <CustomizedInputBase/>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </ThemeProvider>
  );
}
