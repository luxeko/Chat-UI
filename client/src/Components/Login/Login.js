import React, { useEffect, useRef, useState } from 'react'
import './style.scss'
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}
export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
        username,
        password
        });
        setToken(token);
    }
   
    return (
        <>
            {/*  */}
            <div className='login'>
                <div className='login__wrapper'>
                    <div className='login__left'>
                        <h3 className='login__logo'>React JS</h3>
                        <span className='login__desc'>
                            Connect with frineds and the world around you on ReactJs
                        </span>
                    </div>
                    <div className='login__right'>
                        <div className='login__title'><h1>Login</h1></div>
                        <form onSubmit={handleSubmit} className='login__box'>
                            
                            <input onChange={e => setUserName(e.target.value)} type={'text'} className='login__input' placeholder='Name'/>
                            <input onChange={e => setPassword(e.target.value)} type={'password'} className='login__input' placeholder='Password'/>
                            <button className='login_btn'>Login</button>
                            <button className='register_btn'>Create a New Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }