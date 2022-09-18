import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.scss'
import Room from './Components/Message/Room.js';
import Calendar from './Components/Calendar/Calendar.js'
import Video from './Components/Video/Video.js'
import Phone from './Components/Phone/Phone.js'
import UserSetting from './Components/UserSetting/UserSetting.js'
export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Room/>} exact={true}></Route>
                    <Route path="UserSetting" element={<UserSetting/>}></Route>
                    <Route path="Video" element={<Video/>}></Route>
                    <Route path="Calendar" element={<Calendar/>}></Route>
                    <Route path="Phone" element={<Phone/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
