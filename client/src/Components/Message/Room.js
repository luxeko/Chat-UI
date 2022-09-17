import React from 'react'
import Navbar from '../Navbar/Navbar.js';
import ListContact from '../ListContact/ListContact.js';
import {connect} from 'react-redux'

function Room(props) {
    return (
        <>
            <Navbar></Navbar>
            <ListContact login={props.login}></ListContact>
        </>
    )
}
const mapStateToProps = (state) => ({
    dataRedux: state
})
const mapDispatchToProps = (dispatch) => ({
    create: (userCreate) => dispatch({type: "CREATE_USER", payload: "userCreate"}),
    delete: (userDelete) => dispatch({type: "DELETE_USER", payload: "userDelete"}),
})
export default connect(mapStateToProps, mapDispatchToProps)(Room)