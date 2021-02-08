/*
 Copyright © 2020 BYTEPAL AI, LLC And Its Affiliates. All rights reserved.
*/

import React from 'react';
import { makeStyles, createMuiTheme  } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import bytepal_logo from '../Assets/bytepal.png'


const useStyles3 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  size:{
    flexGrow:1
  },
  menuButton: {
    flexGrow: 1,
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    backgroundColor: "#159BB3",
    color: "white",
    fontFamily:"Helvetica",

  },
  menuButton1: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    backgroundColor: "#159BB3",
    color: "white",
    borderRadius: "5%",
    height: "50px",
  },
  title: {
    flexGrow: 1,
    fontFamily:"Helvetica",
  },
}));



export const ButtonAppBar = (props) => {


  const classes = useStyles3();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [elements] = React.useState(props);
  //const items = elements.items // props.items
  const items = [["Home", "/"],["How it works","/how"]] // ["Terms","/terms"], ["Privacy","/privacy"]
  const listButtons= items.map((item) =>
  <Button className={classes.menuButton} variant="contained" style={{fontFamily:[
    '"Source Code Pro"', 'monospace']}}> <Link style={{ textDecoration: 'none', color:'white' }} to={item[1]}> {item[0]} </Link> </Button>
  )
  const listMenus= items.map((item) =>
  <MenuItem onClick={handleClose}> <Link style={{ textDecoration: 'none', color:'black' }} to={item[1]}> {item[0]} </Link></MenuItem>
  )

  const listPages= items.map((item) =>
  <Link style={{ textDecoration: 'none', color:'black', fontFamily:"HelveticaNeue-Bold", paddingRight:20, fontSize:20}} to={item[1]}> {item[0]} </Link>
  )

  const theme = createMuiTheme({
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
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="fixed" color="white" className={classes.size}>
        
          <Hidden only={['xs', 'sm']}>
          <Toolbar>
            <Link style={{ textDecoration: 'none', color:'white' }} to="/">
              <img src={bytepal_logo} style={{height:50,width:175, marginRight: theme.spacing(3)}} />
            </Link>
            <Divider orientation="vertical" style={{height: 25} }/>
            <Hidden only={['xs', 'sm']}>
              {listButtons}
            </Hidden>
          </Toolbar>
        </Hidden>

        <Hidden only={['md', 'lg', 'xl']}>
          <Accordion position="fixed" color="white" className={classes.size} square={true}>
            <AccordionSummary
              expandIcon={
                <MenuIcon/>
              }
              aria-controls="panel1a-content"
              id="panel1a-header">
                <Link style={{ textDecoration: 'none', color:'white' }} to="/">
                  <img src={bytepal_logo} style={{height:50,width:175, marginRight: theme.spacing(3), marginTop:theme.spacing(-1), marginBottom:theme.spacing(-1.5)} } />
                </Link>
                <Divider orientation="vertical" style={{height: 30} }/>
              </AccordionSummary>
              <AccordionDetails>
                {listPages}
              </AccordionDetails>
            </Accordion>
          </Hidden>

      </AppBar>
  </div>
</ThemeProvider>
);

}
