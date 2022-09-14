import React, { useState } from 'react';
import logo from '../../Assets/Image/logo.svg';
import './style.scss';
import { Link, NavLink  } from 'react-router-dom';

const tabs = [
    {id:0, title: 'Message', class:'fa-solid fa-comment-dots'},
    {id:1, title: 'Group', class:'fa-solid fa-users'},
    {id:2, title: 'Video', class:'fa-solid fa-video'},
    {id:3, title: 'Phone', class:'fa-solid fa-phone'},
    {id:4, title: 'Calendar', class:'fa-regular fa-calendar'},
    {id:5, title: 'Setting', class:'fa-solid fa-gear'}

]

const Navbar = () => {
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
                    <Link style={{textDecoration: "none"}}  key={index} onClick={() => handleClick(index)}  to={`/${tab.title}`} className={`icon navbar__action--icon ${isActive === index? 'active' : '' }`}><i className={tab.class}></i></Link>
                ))}
            </div>

            <div className='navbar__logout'>
                <i className="fa-solid fa-right-from-bracket"></i>
            </div>
        </div>
    )
}
  
export default Navbar