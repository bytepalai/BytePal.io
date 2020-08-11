/*
 Copyright © 2020 BYTEPAL AI, LLC And Its Affiliates. All rights reserved.
*/
import React, { useState, useEffect } from 'react';
import './App.css';
import icon1 from './Assets/icon1.png'
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

function play(sound) {
  var audio = new Audio(sound);
  audio.play();
}

function ChatView(props) {
    const image1 = icon1
    var voice
    var model_response
    var audio_url = 'http://127.0.0.1:3000/13b4730b-c0be-4d41-9ef3-947558156b0e'

    const handleNewUserMessage = (newMessage) => {
      fetch('http://34.73.221.176:8001/interact_io', {
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
         // Play Voice response
         play(audio_url)
         // Display text message
         addResponseMessage(model_response);
   })

  }


  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      profileAvatar={image1}
      title="BytePal Chat"
      subtitle="Have a conversation !"
      />

  );
}

export default ChatView;
