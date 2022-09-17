import React, { useState, useEffect, useRef } from 'react';
import Loader from '../Loader/Loader.js'
import './style.scss';
import Conversation from '../Conversation/Conversation';
import io from 'socket.io-client'
import Login from '../Login/Login';
import Modal from 'react-modal';
import {v4 as uuidV4 } from 'uuid'
const socket = io.connect("http://localhost:5000")

const auth_login = false;

const room = {
    id: uuidV4(),
    userCreateId: '12345-67890'
}
const ListContact = ({ type, login }) => {
    const createChat = useRef()
    const [conversation, setConversation] = useState(false)

    const [userChat, setUserChat] = useState({});

    const handleShowMessage = (props) => {
        setConversation(true);
        setUserChat(props);
    }
    
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, [])
    const onSearch = () => {

    }
    const contact = (props) => {
        return <div className='user__messages--box' onClick={() => handleShowMessage(props)}>
                    <div>
                        <div className='user__online--icon'>
                            <img src={props.imageSrc}  alt={props.name}/>
                            <span className='user__online--status'></span>
                        </div>
                        <div className='user__messages--name'>
                            <p>{props.name}</p>
                            <p>Hello world</p>
                        </div>
                    </div>
                    <div className='user__messages--time'>
                        <span>10:24 AM</span>
                    </div>
                </div>
    }
  
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    function handleCreate() {
        console.log(createChat.current.value);
    }
    return (
        <div className='user'>
             <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Create"
                    overlayClassName="Overlay"
            >
                    <div className='form__modal'>
                        <input ref={createChat} placeholder={`${type === "Messages" ? "ID " : "Room"}`} type={'text'} />
                        <button onClick={handleCreate}>Create</button>
                    </div>
                    <div className='close__modal' onClick={closeModal}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
            </Modal>
            <div className="list__chat">
                <div className='user__title--2'>
                    <h2>Chat</h2>   
                </div>
                <div className='user__seaarch'>
                    <i onChange={onSearch} className="fa-solid fa-magnifying-glass"></i>
                    <input 
                        placeholder={type === 'Messages' ? 'Search people or message...' : 'Search room or message...'} />
                </div>
                <div className='user__title--3'>
                    <h3>{type === 'Messages' ? 'Messages' : 'Rooms'}</h3>
                </div>
                <div className='user__messages'>
                    {/* {listUser && listUser.length > 0 && listUser.map((user, index) => {
                        return <contact key={index} id={user.id} imageSrc={user.imageSrc} name={user.name}></contact>
                    })} */}
                </div>
                <div onClick={openModal} className='create__message'>
                    {type === 'Messages' ? 'Create Message' : 'Create Room'}
                </div>
            </div>
         
            <div className='converstation'>
                {/* {loading? <Loader></Loader> : <></>} */}
               
                {login ?  conversation ? <Conversation/> : ""   : <Login/>}
                {/* { conversation ? <Conversation/> :  } */}
                {/* <Conversation userChat={userChat}/> */}
            </div>
        </div>
    )
}
  
export default ListContact