/*
 Copyright © 2020 BYTEPAL AI, LLC And Its Affiliates. All rights reserved.
*/
import React from 'react';
import './App.css';
import {ComplexGrid2} from './Main.js';
import {ButtonAppBar} from './ButtonApp.js';
import { Link } from 'react-router-dom'
import {Terms} from './Terms.js';
import icon5 from './Assets/icon5.png'



function TermsView() {
  var texts = ["line", <Link style={{ textDecoration: 'none', color:'black' }} to={"/how"}>How It Works </Link>, <Link style={{ textDecoration: 'none', color:'black' }} to={"/terms"}> Terms & Conditions </Link>, <Link style={{ textDecoration: 'none', color:'black' }} to={"/privacy"}> Privacy Policy </Link>,"support@bytepal.io", "line", "divider", "line", "Copyright © 2020 BytePal AI, LLC. All rights reserved." ]
  const image3 = icon5

  return (
    <div style={{ // className="App" for div   // className="App-header" for header
      backgroundColor: '#ebf6f5', //'white',
      paddingTop:'60px'
    }}>
        <header>
          <ButtonAppBar/>
          <Terms/>
          <h1></h1>
          <ComplexGrid2 option="second" display={image3} title="Company" description={texts} logo="empty" images="empty"/>
        </header>
    </div>
  );
}

export default TermsView;
