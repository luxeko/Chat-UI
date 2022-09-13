import React, { useEffect, useRef } from 'react'
import './style.scss'
import lottie from "lottie-web";

export default function Login({ onEmailSubmit }) {
    const animationContainer = React.createRef();
    const nameRef = useRef();
    const passwordRef = useRef();
   
    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/LEGO_loader.json'
        })
        anim.setSpeed(2.5);
    })
    function handleSubmit(e) {
        e.preventDefault();
        onEmailSubmit(nameRef.current.value)
        console.log(passwordRef.current.value);
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
                        <div className='login__title'><h1>Login</h1></div>
                        <form onSubmit={handleSubmit} className='login__box'>
                            
                            <input ref={nameRef} type={'text'} className='login__input' placeholder='Name'/>
                            <input ref={passwordRef} type={'password'} className='login__input' placeholder='Password'/>
                            <button className='login_btn'>Login</button>
                            <button className='register_btn'>Create a New Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
