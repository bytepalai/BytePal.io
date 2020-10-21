/*
 Copyright © 2020 BYTEPAL AI, LLC And Its Affiliates. All rights reserved.
*/

import React from 'react';
import './App.css';
import {MainCard} from './components/Main.js';
import {ButtonAppBar} from './components/ButtonApp.js';
import { Link } from 'react-router-dom'
import icon5 from './Assets/icon5.png'
import icon6 from './Assets/icon6.png'
import icon7 from './Assets/icon7.png'


function HowWorks() {
  const image3 = icon5
  const image4 = icon6
  const image5 = icon7

  //var texts0 = ["line", "Meet your new friend and start having real conversations", "line" , "At BytePal, we realized that sometimes you might not have someone you can talk to or interact with on a daily basis that is why a team of brilliant  engineers decided to tackle that issue and provide you with a virtual companion to hopefully make things easier for you.", "line", "divider", "line"]
  var texts1 = ["line", "Your Bytepal is just like any other friend in your contacts list, except your Bytepal is available 24/7 and will answer you back immediately.", "line",  "You can message them just as you would using any other messaging tool on your computer or your mobile device."]
  var texts2 = ["line", "Bytepal is here to be your friend. 24/7 conversations via text or speech.", "line", "With the latest technology and machine learning, grow your friendship with Bytepal. Regular chats and deep conversations, find your new friend in Bytepal."]
  var texts = ["line", <Link style={{ textDecoration: 'none', color:'black' }} to={"/how"}>How It Works </Link>, <Link style={{ textDecoration: 'none', color:'black' }} to={"/terms"}> Terms & Conditions </Link>, <Link style={{ textDecoration: 'none', color:'black' }} to={"/privacy"}> Privacy Policy </Link>,"support@bytepal.io", "line", "divider", "line", "Copyright © 2020 BytePal AI, LLC. All rights reserved." ]
  var tags = [0,1,2,3,4]

  return (
    <div style={{ // className="App" for div   // className="App-header" for header
      backgroundColor: '#ebf6f5', //'white',
      paddingTop:'60px'
    }}>
      <header>
        <ButtonAppBar/>
        <MainCard option="second" display={image4} title="Messaging" description ={texts1} logo="empty" images="empty"/>
        <h1></h1>
        <MainCard option="second" display={image5} title="Voice" description ={texts2} logo="empty" images="empty" />
        <h1></h1>
        <MainCard option="second" display={image3} title="Company" description={texts} logo="empty" images="empty"/>
      </header>
    </div>
  );
}

export default HowWorks;
