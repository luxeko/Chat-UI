import React, { useEffect, useRef } from 'react'
import './style.scss'

export default function Register({ onEmailSubmit, onNameSubmit, onPasswordSubmit }) {
    const nameRef = useRef();
    const passwordRef = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        onEmailSubmit(nameRef.current.value)
        console.log(passwordRef.current.value);
    }
    function moveBackLogin(e) {
        e.preventDefault();
    }
    return (
        <>
            {/* <div ref={animationContainer}></div> */}
            <div className='login'>
                <div className='login__wrapper'>
                    <div className='login__left'>
                        <h3 className='login__logo'>React JS</h3>
                        <span className='login__desc'>
                            Connect with frineds and the world around you on ReactJs
                        </span>
                    </div>
                    <div className='login__right'>
                        <div className='login__title'><h1>Register</h1></div>
                        <form onSubmit={handleSubmit} className='login__box'>
                            <input ref={nameRef} type={'text'} className='login__input' placeholder='Name'/>
                            <input ref={passwordRef} type={'password'} className='login__input' placeholder='Password'/>
                            <button className='register_btn'>Create</button>
                            <button onClick={moveBackLogin} className='login_btn'>Login with an Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
