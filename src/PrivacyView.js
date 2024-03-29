/*
 Copyright © 2020 BYTEPAL AI, LLC And Its Affiliates. All rights reserved.
*/
import React from 'react';
import './App.css';
import {MainCard} from './components/Main.js';
import {ButtonAppBar} from './components/ButtonApp.js';
import { Link } from 'react-router-dom'
import {Privacy} from './copyright/Privacy.js'
import icon5 from './Assets/icon5.png'


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
        <MainCard option="second" display={image3} title="Company" description={texts} logo="empty" images="empty"/>
      </header>
    </div>
  );
}

export default PrivacyView;
