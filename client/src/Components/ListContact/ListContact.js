import React, { useState, useEffect, useRef } from 'react';
import Loader from '../Loader/Loader.js'
import './style.scss';
import Conversation from '../Conversation/Conversation';
import io from 'socket.io-client'
import Login from '../Login/Login';
import Modal from 'react-modal';
import {v4 as uuidV4 } from 'uuid'
import {connect} from 'react-redux'
import toast from '../Toast/toast.js';
import Moment from 'moment';

const socket = io.connect("http://localhost:5000");

const checkLogin = JSON.parse(localStorage.getItem("login"));

const ListContact = ({ login, ...props }) => {
    const data = JSON.parse(localStorage.getItem("data"));
    const authLogin = JSON.parse(localStorage.getItem("user_login"));
    const getUserLogin = JSON.parse(localStorage.getItem(authLogin));
    const createChat = useRef()
    const joinChat = useRef()
    const [loading, setLoading] = useState(false);
    const [userChat, setUserChat] = useState({});
    const [conversation, setConversation] = useState(false)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [action, setAction] = useState("");
    const [userName, setUserName]  = useState("");
    const [room, setRoom] = useState("");
   
    const join__room = () => {
        if(getUserLogin) {
            setUserName(getUserLogin.userName)
        }
        if(userName !== "" && room !== "") {
            socket.emit("join_room", room)
            setIsOpen(false);
        }
    }
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, [])

    const handleShowMessage = (props) => {
        setConversation(true);
        setUserChat(props);
    }
    
    const onSearch = (e) => {
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
        // console.log(createChat.current.value);
        props.create({
            id: uuidV4(),
            createrId: '12345-67890',
            name: createChat.current.value,
            createdDate: date,
            userId : [],
        });
        setIsOpen(false);
    }
   
    // function handleJoin() {
    //     if(data) {
    //         const findRoom = data.rooms.filter(room => (
    //             room.id === joinChat.current.value
    //         ))
    //         if(findRoom.length < 1) {
    //             toast({
    //                 title: "Fail",
    //                 message: "Can't find the ID room, please try again",
    //                 type: "error",
    //                 duration: 3000
    //             })
    //         } else {
    //             toast({
    //                 title: "Success",
    //                 message: "Join the room Success",
    //                 type: "success",
    //                 duration: 3000
    //             })
    //             props.update({
    //                 ...findRoom, userJoinId: [...findRoom.userJoinId, currentUser]
    //             })
    //         }
    //     }
    //     setIsOpen(false);
    // }
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
                        <input onChange={(event) => setRoom(event.target.value)} placeholder='Name of Room' />
                        <button className='btn__modal--create' onClick={handleCreate}>Create</button>
                        </>
                    : 
                        <>
                        <input onChange={(event) => setRoom(event.target.value)} placeholder='ID Room' />
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
                        <h2>{checkLogin ? userName : ""}</h2>   
                    </div>
                    <div className='user__seaarch'>
                        <i onChange={onSearch} className="fa-solid fa-magnifying-glass"></i>
                        <input 
                            placeholder={'Search......'} />
                    </div>
                    <div className='user__title--3'>
                        <h3>{'Rooms'}</h3>
                    </div>
                    <div className='user__messages'>
                        {/* {data && data.rooms.length > 0 && data.rooms.map((room, index) => {
                            return <Contact key={index} id={room.id} name={room.name} userId={room.userId} createdDate={room.createdDate}></Contact>
                        })} */}
                        <div className='user__messages--box' onClick={() => handleShowMessage(props)}>
                            <div>
                                <div className='user__messages--name'>
                                    <p># {room}</p>
                                    <p>{userName}</p>
                                </div>
                            </div>
                            <div className='user__messages--time'>
                                <span>{}</span>
                            </div>
                        </div>
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
                    {
                        checkLogin && checkLogin===true 
                        ?<>{loading 
                            ? <Loader/> 
                                :   <>
                                    <Conversation userName={userName} socket={socket} room={room}/>
                                    {/* {conversation ? <Conversation userName={userName} socket={socket} room={room}/> : ""} */}
                                    </>}
                        </>
                        :<Login/>
                    }
                    
                 
                
                    {/* <Conversation /> */}
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