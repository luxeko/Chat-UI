import React, { useState, useEffect } from 'react'
import Loader from './Loader.js'
import Navbar from '../Navbar/Navbar.js';
import Users from '../Users/Users.js';
import Chatbox from '../ChatBox/Chatbox.js';
import Chatboxsetting from '../ChatBoxSetting/ChatBoxSetting.js';
import {connect} from 'react-redux'

function Dashboard(props) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])
    return (
        <>
            { loading 
            ? <Loader></Loader>
            : <>
                <Navbar></Navbar>
                <Users {...props.dataRedux}></Users>
                <Chatbox></Chatbox>  
                {/* <Chatboxsetting></Chatboxsetting> */}
            </>
            } 
        </>
    )
}
const mapStateToProps = (state) => ({
    dataRedux: state
})
const mapDispatchToProps = (dispatch) => ({
    create: (userCreate) => dispatch({type: "CREATE_USER", payload: "userCreate"}),
    update: (userUpdate) => dispatch({type: "UPDATE_USER", payload: "userUpdate"}),
    delete: (userDelete) => dispatch({type: "DELETE_USER", payload: "userDelete"}),
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)