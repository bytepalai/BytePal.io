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
import {Privacy} from './Privacy.js'
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


function PrivacyView() {
  var texts = ["line", <Link style={{ textDecoration: 'none', color:'black' }} to={"/how"}>How It Works </Link>, <Link style={{ textDecoration: 'none', color:'black' }} to={"/terms"}> Terms & Conditions </Link>, <Link style={{ textDecoration: 'none', color:'black' }} to={"/privacy"}> Privacy Policy</Link>,"support@bytepal.io", "line", "divider", "line", "Copyright © 2020 BytePal AI, LLC. All rights reserved." ]
  const image3 = icon5

  return (
    <div style={{ // className="App" for div   // className="App-header" for header
      backgroundColor: '#ebf6f5', //'white',
      paddingTop:'60px'
      }}>
      <header>
        <ButtonAppBar/>
        <Privacy/>
        <h1></h1>
        <ComplexGrid2 option="second" display={image3} title="Company" description={texts} logo="empty" images="empty"/>
      </header>
    </div>
  );
}

export default PrivacyView;
