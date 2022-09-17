import React, { useState } from 'react'
import './style.scss'

const initialState = {
    fullName: '',
    userName: '',
    id: ''
}
export default function Login() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [form, setForm] = useState(initialState);
    const handleSubmit = async e => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
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
                            <input onChange={handleChange} type={'text'} className='login__input' placeholder='User Name' name='userName' required/>
                            {isSignUp && (
                            <>
                                <input onChange={handleChange} type={'text'} className='login__input' placeholder='Full Name' name='fullName' required/>

                            </>
                            )}
                            <button className='login__btn'>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
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