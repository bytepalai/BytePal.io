/*
 Copyright © 2020 BYTEPAL AI, LLC And Its Affiliates. All rights reserved.
*/
import React from 'react';
import { makeStyles, createMuiTheme  } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import {CustomizedInputBase} from  './CustomizedInput.js';



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

export const MainCard = (props) => {
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
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
      fontSize: 22,
  },
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
                    <div style={{marginLeft:15}}>
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
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </ThemeProvider>
  );
}
