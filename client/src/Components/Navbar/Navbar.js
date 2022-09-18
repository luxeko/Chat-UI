import React, {useState} from 'react';
import logo from '../../Assets/Image/logo.svg';
import './style.scss';
import { NavLink } from 'react-router-dom';

const tabs = [
    {id:1, title: '/', class:'fa-solid fa-comment-dots'},
    {id:2, title: '/Video', class:'fa-solid fa-video'},
    {id:3, title: '/Phone', class:'fa-solid fa-phone'},
    {id:4, title: '/Calendar', class:'fa-regular fa-calendar'},
    {id:5, title: '/UserSetting', class:'fa-solid fa-gear'}
]
const Navbar = () => {
    const [active, setActive] = useState()
    const handleLogOut = () => {
        window.location.href = '/';
    }
    function onCheckActive(e) {
        setActive(e)
    }
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            
            <div className='navbar__action'>
                {tabs.map((tab, index) => (
                    <NavLink 
                        onClick={()=>onCheckActive(tab.id)}
                        key={index}     
                        style={{textDecoration: "none"}}  
                        to={tab.title} 
                        className={`icon navbar__action--icon`}
                        exact={tab.id === 1 ? true : false}
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