import React from 'react';
import logo from '../../Assets/Image/logo.svg';
import './style.scss';
import { NavLink } from 'react-router-dom';

const tabs = [
    {id:0, title: 'Room', class:'fa-solid fa-comment-dots'},
    {id:2, title: 'Video', class:'fa-solid fa-video'},
    {id:3, title: 'Phone', class:'fa-solid fa-phone'},
    {id:4, title: 'Calendar', class:'fa-regular fa-calendar'},
    {id:5, title: 'UserSetting', class:'fa-solid fa-gear'}
]
const Navbar = () => {
   
    const handleLogOut = () => {
        localStorage.removeItem("login");
        localStorage.removeItem("user_login");
        window.location.href = '/';
    }
   
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            
            <div className='navbar__action'>
                {tabs.map((tab, index) => (
                    <NavLink 
                        key={index}     
                        style={{textDecoration: "none"}}  
                        to={`/${tab.title}`} 
                        className={`icon navbar__action--icon`}
                    >
                        <i className={tab.class}></i>
                    </NavLink>
                ))}
                
            </div>

            <div className='navbar__logout'>
                <i onClick={handleLogOut} className="fa-solid fa-right-from-bracket"></i>
            </div>
        </div>
    )
}
  
export default Navbar