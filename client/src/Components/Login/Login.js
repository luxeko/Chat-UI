import React, { useState } from 'react'
import './style.scss'
import {connect} from 'react-redux'

function Login(props) {
    const [userName, setUserName] = useState("");
   
    const handleSubmit = (e) => {
        e.preventDefault();
        props.create(userName)
    }
    return (
        <>
            <div className='login'>
                <div className='login__wrapper'>
                    <div className='login__right'>
                        <div className='login__title'><h1>{"Sign In"}</h1></div>
                        <form className='login__box'>
                            <input onChange={(e) => setUserName(e.target.value)} type={'text'} className='login__input' placeholder='User Name' name='userName' required/>
                            <button onClick={handleSubmit} className='login__btn'>{'Sign In'}</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    dataRedux: state
})
const mapDispatchToProps = (dispatch) => ({
    create: (userCreate) => dispatch({type: "CREATE_USER", payload: userCreate}),
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)