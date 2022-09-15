import React, { useEffect, useRef } from 'react'
import './style.scss'
import {connect} from 'react-redux'
import { v4 as uuidV4} from 'uuid'
import { Link } from 'react-router-dom';

function Register(props) {
    const nameRef = useRef();
    const passwordRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
    }
    function handleAddUser() {
        const user = {
            id: uuidV4(),
            name: nameRef.current.value,
            password: passwordRef.current.value
        }
        props.createUser(user)
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
                            <Link style={{textDecoration: "none"}} onClick={(e) => handleAddUser(e)} className='login_btn' to={`/`}>Create</Link>
                            <Link style={{textDecoration: "none"}} className='register_btn' to={`/`}>Login with an Accountt</Link>
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
    createUser: (userCreate) => dispatch({type: "CREATE_USER", payload: userCreate}),
}) 
export default connect(mapStateToProps, mapDispatchToProps)(Register)
