import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.scss'
import Message from './Components/Message/Message.js';
import Room from './Components/Message/Room.js';
import Calendar from './Components/Calendar/Calendar.js'
import Video from './Components/Video/Video.js'
import Phone from './Components/Phone/Phone.js'
import UserSetting from './Components/UserSetting/UserSetting.js'
export default function App() {
    // const { token, setToken } = useToken(false);
    const auth_login = true;
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Message login={auth_login}/>}></Route>
                    <Route path="/Room" element={<Room login={auth_login}/>}></Route>
                    <Route path="/UserSetting" element={<UserSetting login={auth_login}/>}></Route>
                    <Route path="/Video" element={<Video login={auth_login}/>}></Route>
                    <Route path="/Calendar" element={<Calendar login={auth_login}/>}></Route>
                    <Route path="/Phone" element={<Phone login={auth_login}/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
