import React from 'react'
import Navbar from '../Navbar/Navbar.js';
import ListContact from '../ListContact/ListContact.js';

function Room(props) {
    return (
        <>
            <Navbar></Navbar>
            <ListContact login={props.login}></ListContact>
        </>
    )
}

export default Room