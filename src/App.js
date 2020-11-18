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
import {isSafari, isMobile} from 'react-device-detect';

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
  var texts0 = ["line", "Chatbot Pal that is always online for you!", "line" , "Bytepal is an AI Chatbot that is always available to talk to you.", "It is the world's first Virtual Friend that you will ever meet. You can have conversations that you never imagined to have with a Virtual Assistant.", "line", "divider", "line"]

  var texts1 = ["line", "We have made BytePal for you to have real conversations. It's your virtual friend who's always up to listen to anything and everything you want to talk about.", "line",  "The core technology comes from Deep Learning Research applied to Natural Language Processing. It is capable of understanding human language, virtual voice recognition and speech recognition without any issues."]
  var texts2 = ["line", "BytePal is a virtual AI assistant that learns and understands you better each day you use it. Once you start using it, it'll know if you're a cat person or dog person.", "line", "You can text or just talk to it. The voice-activated prompts recognize your voice and you can start your conversation with them anywhere, and anytime."]
  var texts = ["line", <Link style={{ textDecoration: 'none', color:'black' }} to={"/how"}>How It Works </Link>, <Link style={{ textDecoration: 'none', color:'black' }} to={"/terms"}> Terms & Conditions </Link>, <Link style={{ textDecoration: 'none', color:'black' }} to={"/privacy"}> Privacy Policy </Link>,"support@bytepal.io", "line", "divider", "line", "Copyright © 2020 BytePal AI, LLC. All rights reserved." ]
  var tags = [0,1,2,3,4]
  const listh1 = tags.map((tag) =>
  <h1> </h1>
  )

  console.log(isMobile)

  var chat

  if (isMobile == false){
    chat = <ChatView/>
  }
  else{
    chat = <h1></h1>
  }
  return (
    <div style={{ // className="App" for div   // className="App-header" for header
      backgroundColor: '#ebf6f5', //'white',
      paddingTop:'60px'
    }}>
    <header>
        <ButtonAppBar/>
        <MainCard option="first" display={iphone} title="What is Bytepal?" description ={texts0} logo={logo} images="empty" />
        <h1></h1>
        {chat}
        <MainCard option="second" display={image1} title="Why BytePal?" description ={texts1} logo="empty" images="empty"/>
        <h1></h1>
        <MainCard option="second" display={image2} title="A Virtual friend in need is a friend indeed" description ={texts2} logo="empty" images="empty" />
        <h1></h1>
        <MainCard option="second" display={image3} title="Company" description={texts} logo="empty" images="empty"/>
      </header>
    </div>
  );


}

export default App;
