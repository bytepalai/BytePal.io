/*
 Copyright © 2020 BYTEPAL AI, LLC And Its Affiliates. All rights reserved.
*/
import React, { useState, useEffect } from 'react';
import '../App.css';
import icon1 from '../Assets/icon1.png'
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import hostname from './Constants.js'
import {isSafari} from 'react-device-detect';

function play(sound) {
  var audio = new Audio(sound);
  audio.play();
}

function ChatView(props) {
    const image1 = icon1
    var voice
    var model_response
    var audio_url

    const handleNewUserMessage = (newMessage) => {

      var address = hostname + 'interact_io'
      fetch(address, {
         method: "POST",
         mode: 'cors',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'Cache': 'no-cache'
         },
         body: JSON.stringify({ "text":newMessage, "type":"bot"}),
         credentials: 'include'
       })
       .then(function(response) {
         model_response = response.headers.get('message')
         return response.blob();
       })
       .then(function(data) {
         audio_url = URL.createObjectURL(data)
         if (isSafari == false){
         // Play Voice response
         play(audio_url)
       }
         // Display text message
         addResponseMessage(String(model_response));
   })

  }


  return (

  <div class="widget-container ">
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      profileAvatar={image1}
      title="BytePal Chat"
      subtitle="Have a conversation !"
      />
  </div>
  );
}

export default ChatView;
