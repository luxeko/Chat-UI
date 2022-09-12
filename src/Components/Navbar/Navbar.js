import React from 'react';
import logo from '../../Assets/Image/logo.svg';
import './style.scss';

const Navbar = ({ children }) => {
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='navbar__action'>
                {children}
            </div>
            <div className='navbar__logout'>
                <i class="fa-solid fa-right-from-bracket"></i>
            </div>
        </div>
    )
}
  
export default Navbar