import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar.js';
import User from '../Users/User.js';
import Chatbox from '../ChatBox/Chatbox.js';
import Chatboxsetting from '../ChatBoxSetting/ChatBoxSetting.js';

export default function Dashboard() {
    
    return (
    <>
        <Navbar></Navbar>
        <User></User>
        <Chatbox ></Chatbox> 
    
        {/* <Chatboxsetting></Chatboxsetting> */}
    </>
  )
}

