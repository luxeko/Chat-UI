import React, { useState } from 'react'
import './style.scss'
import toast from '../Toast/toast.js';


export default function Login({sentData}) {
    const [isSignUp, setIsSignUp] = useState(false);
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassoword] = useState("");
    const initialState = {
        fullName: fullName,
        userName: userName,
        password: password
    }
    const handleSubmit = async e => {
        e.preventDefault();
        if(isSignUp) {
            localStorage.setItem(userName, JSON.stringify(initialState))
            toast({
                title: "Success",
                message: "Sign up success",
                type: "success",
                duration: 3000
            })
            setIsSignUp(!isSignUp)
        } else {
            const auth_login = JSON.parse(localStorage.getItem(userName))
            if(auth_login && auth_login.password === password) {
                localStorage.setItem("login", true);
                localStorage.setItem("user_login", JSON.stringify(userName))
                window.location.href = '/';
            }
            else {
                toast({
                    title: "Fail",
                    message: "Incorrect account or password",
                    type: "error",
                    duration: 3000
                })
            }
        }
    }
    const swichtMode = () => {
        setIsSignUp(!isSignUp)
    }
    return (
        <>
            <div className='login'>
                <div className='login__wrapper'>
                    <div className='login__right'>
                        <div className='login__title'><h1>{isSignUp ? "Sign Up": "Sign In"}</h1></div>
                        <form onSubmit={handleSubmit} className='login__box'>
                            <input onChange={(e) => setUserName(e.target.value)} type={'text'} className='login__input' placeholder='User Name' name='userName' required/>
                            {isSignUp && (
                            <>
                                <input onChange={(e) => setFullName(e.target.value)} type={'text'} className='login__input' placeholder='Full Name' name='fullName' required/>

                            </>
                            )}
                            <input onChange={(e) => setPassoword(e.target.value)} type={'password'} className='login__input' placeholder='Password' name='password' required/>
                            <button className='login__btn' onClick={() => sentData(userName)}>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                        </form>
                        <p>
                            {isSignUp  
                                ? "Already have an Account? " 
                                : "Don't have an Account? "
                            }
                            <span onClick={swichtMode}>
                                {isSignUp ? " Sign In" : " Sign Up"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}