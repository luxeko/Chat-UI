import './style.scss'
import Navbar from './Components/Navbar/Navbar.js';
import User from './Components/Users/User.js';
import Chatbox from './Components/ChatBox/Chatbox.js';
import Chatboxsetting from './Components/ChatBoxSetting/ChatBoxSetting.js';
import Login from './Components/Login/Login.js';
import React, { useState } from 'react';
function App() {
    const [email, setEmail] = useState();
    
    return (
        <div className="App">
            <Login onEmailSubmit={setEmail}></Login>
            {/* <Navbar>
                
            </Navbar>
            <User></User>
            <Chatbox></Chatbox> */}
            {/* <Chatboxsetting></Chatboxsetting> */}
        </div>
    );
}

export default App;
