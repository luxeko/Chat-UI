import React, { useState } from 'react';
import logo from '../../Assets/Image/logo.svg';
import './style.scss';

const tabs = [
    {id:0, title: 'message', class:'fa-solid fa-comment-dots'},
    {id:1, title: 'group', class:'fa-solid fa-users'},
    {id:2, title: 'video', class:'fa-solid fa-video'},
    {id:3, title: 'phone', class:'fa-solid fa-phone'},
    {id:4, title: 'calendar', class:'fa-regular fa-calendar'},
    {id:5, title: 'setting', class:'fa-solid fa-gear'}

]

const Navbar = ({ children }) => {
    const [isActive, setIsActive] = useState(0);

    const handleClick = (index) => {
        setIsActive(index);
    }
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            
            <div className='navbar__action'>
                {tabs.map((tab, index) => (
                    <div key={index} onClick={() => handleClick(index)} className={`icon navbar__action--icon ${isActive === index? 'active' : '' }`}><i className={tab.class}></i></div>
                ))}
            </div>

            <div className='navbar__logout'>
                <i className="fa-solid fa-right-from-bracket"></i>
            </div>
        </div>
    )
}
  
export default Navbar