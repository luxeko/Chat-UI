import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar.js';
import ListContact from '../ListContact/ListContact.js';
import {connect} from 'react-redux'

function Room(props) {
    const type= "Rooms"
    return (
        <>
            <Navbar></Navbar>
            <ListContact type={type} login = {props.login}></ListContact>
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
export default connect(mapStateToProps, mapDispatchToProps)(Room)