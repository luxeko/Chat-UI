import React, { useState, useEffect, useRef } from 'react';
import Loader from '../Loader/Loader.js'
import './style.scss';
import Conversation from '../Conversation/Conversation';
import io from 'socket.io-client'
import Login from '../Login/Login';
import Modal from 'react-modal';
import {v4 as uuidV4 } from 'uuid'
import {connect} from 'react-redux'
import Moment from 'moment';

const socket = io.connect("http://localhost:5000");


const ListContact = ({ login, ...props }) => {
    const createChat = useRef()
    const [loading, setLoading] = useState(false);
    const [roomChat, setRoomChat] = useState({});
    const [conversation, setConversation] = useState(false)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [action, setAction] = useState("");
    const [userName, setUserName]  = useState("");
    const [roomID, setRoomID] = useState("");
    const data = props.dataRedux


    const join__room = () => {
        setUserName(data.users)
        if(userName[0] !== "" && roomID !== "") {
            socket.emit("join_room", roomID)
        }
        setConversation(true);
        // setRoomChat(init)
        setIsOpen(false);
    }
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, [])

    const handleShowMessage = (props) => {
        if(props.createrName !== "" && props.id !== "") {
            socket.emit("join_room", props.id)
            setConversation(true);
            setRoomChat(props)
        }
    }
    
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
    function openModalJoin() {
        setIsOpen(true);
        setAction("join")
    }
    function openModalCreate() {
        setIsOpen(true);
        setAction("create")
    }
    function closeModal() {
        setIsOpen(false);
    }
    function handleCreate() {
        const date = Moment().format("DD/MM/yyyy")
        props.create({
            id: uuidV4(),
            createrName: data.users,
            name: createChat.current.value,
            createdDate: date,
        });
        setIsOpen(false);
    }
    const ListRoom = (props) => {
        return  <div 
                    className='user__messages--box' 
                    onClick={() => handleShowMessage(props)}>
                    <div>
                        <div className='user__messages--name'>
                            <p># {props.name}</p>
                            <p>Created by: {props.createrName}</p>
                        </div>
                    </div>
                    <div className='user__messages--time'>
                        <span>{props.createdDate}</span>
                    </div>
                </div>
    }
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                overlayClassName="Overlay"
                ariaHideApp={false}>
                <div className='form__modal'>
                    {action === 'create' 
                    ?   <>
                        <input onChange={(event) => setRoomID(event.target.value)} placeholder='Name of Room' />
                        <button className='btn__modal--create' onClick={handleCreate}>Create</button>
                        </>
                    : 
                        <>
                        <input onChange={(event) => setRoomID(event.target.value)} placeholder='ID Room' />
                        <button className='btn__modal--join' onClick={join__room}>Join</button>
                        </>
                    }
                    
                </div>
                <div className='close__modal' onClick={closeModal}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </Modal>
            <div className='user'>
                <div id="toast"></div>
            
                <div className="list__chat">
                    <div className='user__title--2'>
                        <h2>{data.users}</h2>   
                    </div>
                    <div className='user__seaarch'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input 
                            placeholder={'Search......'} />
                    </div>
                    <div className='user__title--3'>
                        <h3>{'Rooms'}</h3>
                    </div>
                    <div className='user__messages'>
                        {data && data.rooms.length > 0 && data.rooms.map((room, index) => (
                          <ListRoom 
                            key={index} 
                            id={room.id} 
                            name={room.name} 
                            createrName={room.createrName} 
                            createdDate={room.createdDate}>
                          </ListRoom>
                        ))}
                       
                    </div>
                    <div className='room__actions'>
                        <div onClick={openModalJoin} className='join__room' >
                            {'Join Room'}
                        </div>
                        <div onClick={openModalCreate} className='create__room'>
                            {'Create Room'}
                        </div>
                    </div>
                </div>
            
                <div className='converstation'>
                    { data.users.length > 0 
                        ?
                        <>
                            {loading ? <Loader/> :
                            <>
                                { conversation ? <Conversation userName={userName} socket={socket} roomID={roomID} roomChat={roomChat}/> : ""}
                            </>
                            }
                        </>
                        : 
                        <Login/>
                    }
                </div>
            </div>
        </>
        
    )
}
const mapStateToProps = (state) => ({
    dataRedux: state
})
const mapDispatchToProps = (dispatch) => ({
    create: (roomCreate) => dispatch({type: "CREATE_ROOM", payload: roomCreate}),
    delete: (roomDelete) => dispatch({type: "DELETE_ROOM", payload: roomDelete}),
    update: (roomUpdate) => dispatch({type: "Update_ROOM", payload: roomUpdate}),
})
export default connect(mapStateToProps, mapDispatchToProps)(ListContact)