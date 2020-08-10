/*
 Copyright © 2020 BYTEPAL AI, LLC And Its Affiliates. All rights reserved.
*/

import React from 'react';
import logo from './logo.svg';
import './App.css';
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
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { white, green, purple } from '@material-ui/core/colors';
import {ComplexGrid2} from './Main.js';
import {ButtonAppBar} from './ButtonApp.js';
import { Link } from 'react-router-dom'
import {Terms} from './Terms.js';
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

function HowWorks() {
  const iphone = bytepal
  const logo = apple
  const image1 = icon1
  const image2 = icon2
  const image3 = icon5
  const image4 = icon6
  const image5 = icon7
  const image6 = icon8
  const image7 = icon9
  //var texts0 = ["line", "Meet your new friend and start having real conversations", "line" , "At BytePal, we realized that sometimes you might not have someone you can talk to or interact with on a daily basis that is why a team of brilliant  engineers decided to tackle that issue and provide you with a virtual companion to hopefully make things easier for you.", "line", "divider", "line"]
  var texts1 = ["line", "BytePal is an advanced chatbot embedded into a mobile application. You can interact with it like you would with anyone else.", "line",  "The application comes with a custom built messaging interface that you can use like any other texting app. You can text BytePal anytime. It is always available 24/7."]
  var texts2 = ["line", "In other to make the interaction as enjoyable as possible. The team added a voice interface.", "line", "You can speak to it and it will answer using speech too. Interacting with voice makes the experience more immersive."]
  var texts = ["line", <Link style={{ textDecoration: 'none', color:'black' }} to={"/how"}>How It Works </Link>, <Link style={{ textDecoration: 'none', color:'black' }} to={"/terms"}> Terms & Conditions </Link>, <Link style={{ textDecoration: 'none', color:'black' }} to={"/privacy"}> Privacy Policy </Link>,"support@bytepal.io", "line", "divider", "line", "Copyright © 2020 BytePal AI, LLC. All rights reserved." ]
  var listImages = [image4, image5] // Pass it in images for "Seamless Interaction - The design needs to be reviewed"
  var tags = [0,1,2,3,4]

  const listh1 = tags.map((tag) =>
  <h1> </h1>
  )

  return (
    <div style={{ // className="App" for div   // className="App-header" for header
      backgroundColor: '#ebf6f5', //'white',
      paddingTop:'60px'
    }}>
      <header>
        <ButtonAppBar/>
        <ComplexGrid2 option="second" display={image4} title="Messaging" description ={texts1} logo="empty" images="empty"/>
        <h1></h1>
        <ComplexGrid2 option="second" display={image5} title="Voice" description ={texts2} logo="empty" images="empty" />
        <h1></h1>
        <ComplexGrid2 option="second" display={image3} title="Company" description={texts} logo="empty" images="empty"/>
      </header>
    </div>
  );
}

export default HowWorks;
