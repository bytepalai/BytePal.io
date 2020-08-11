/*
 Copyright © 2020 BYTEPAL AI, LLC And Its Affiliates. All rights reserved.
*/
import React, { useState, useEffect } from 'react';
import './App.css';
import {MainCard} from './components/Main.js';
import {ButtonAppBar} from './components/ButtonApp.js';
import ChatView from './components/Chat.js';
import { Link } from 'react-router-dom';
import icon1 from './Assets/icon1.png';
import icon2 from './Assets/icon2.png';
import icon5 from './Assets/icon5.png';
import bytepal from './Assets/bytepalio.gif';
import apple from './Assets/apple.png';
import Cookies from 'js-cookie';
import hostname from './components/Constants.js'
import { addResponseMessage } from 'react-chat-widget';

function App() {

    useEffect(() => {
      var setCookie = hostname + 'setcookie'
      fetch(setCookie, {
        method: "GET",
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Cache': 'no-cache'
        },
        credentials: 'include'
      })
      .then(res => {

        var deleteAgent = hostname + 'delete_agent_io'

        fetch(deleteAgent, {
          method: "GET",
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache': 'no-cache'
          },
          credentials: 'include'
        })
        .then(res => {

          var createAgent = hostname + 'create_agent_io'

        fetch(createAgent, {
          method: "GET",
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache': 'no-cache'
          },
          credentials: 'include'
        })
        .then(res => {
          console.log(res); // undefined
        })
      })

    })

      addResponseMessage('Hello');
   }, []);


  const iphone = bytepal
  const logo = apple
  const image1 = icon1
  const image2 = icon2
  const image3 = icon5
  var texts0 = ["line", "Meet your new friend and start having real conversations", "line" , "At BytePal, we realized that sometimes you might not have someone you can talk to or interact with on a daily basis that is why a team of brilliant  engineers decided to tackle that issue and provide you with a virtual companion to hopefully make things easier for you.", "line", "divider", "line"]
  var texts1 = ["line", "BytePal is the most advanced conversational AI. It is built using the latest and greatest research in Artificial Intelligence.", "line",  "The core technology comes from Deep Learning Research applied to Natural Language Processing. It is capable of language understanding, voice recognition and speech."]
  var texts2 = ["line", "You can interact with BytePal by text or speech and it will answer the same way.", "line", "Using our mobile app, you can talk to it at anytime and you will get an answer instantaneously."]
  var texts = ["line", <Link style={{ textDecoration: 'none', color:'black' }} to={"/how"}>How It Works </Link>, <Link style={{ textDecoration: 'none', color:'black' }} to={"/terms"}> Terms & Conditions </Link>, <Link style={{ textDecoration: 'none', color:'black' }} to={"/privacy"}> Privacy Policy </Link>,"support@bytepal.io", "line", "divider", "line", "Copyright © 2020 BytePal AI, LLC. All rights reserved." ]
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
        <MainCard option="first" display={iphone} title="BytePal AI" description ={texts0} logo={logo} images="empty" />
        <h1></h1>
        <MainCard option="second" display={image1} title="Technology" description ={texts1} logo="empty" images="empty"/>
        <h1></h1>
        <MainCard option="second" display={image2} title="Seamless Interaction" description ={texts2} logo="empty" images="empty" />
        <h1></h1>
        <MainCard option="second" display={image3} title="Company" description={texts} logo="empty" images="empty"/>
        <ChatView/>
      </header>
    </div>
  );
}

export default App;
