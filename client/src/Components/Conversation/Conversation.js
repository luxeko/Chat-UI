import React, { useRef, useEffect, useState } from "react";
import "./style.scss";
import io from 'socket.io-client'

const socket = io.connect("http://localhost:5000")

const Conversation = () => {
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");
    const typingRef = useRef();
    const inputMessage = useRef();
  
    function handleTypeMessage(e) {
        if (e.target.value !== "") {
            typingRef.current.innerText = "Typing...";
        } else {
            typingRef.current.innerText = "";
        }
        setMessage(e.target.value);
    }
    const joinRoom = () => {
        if(room !== "") {
            socket.emit("join_room", room)
        }
    }
    const sendMessage = () => {
        socket.emit("send_message", { room, message })
        inputMessage.current.value = ""
    }
    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageReceived(data.message)
        })
    }, [socket])
    return (
        <div className="chatbox">
            <div className="chatbox__header">
                <div className="chatbox__header--user">
                    <div className="chatbox__user--icon">
                        <img src={""} alt="user" />
                    </div>
                    <div className="chatbox__user--name">
                        <p>{""}</p>
                        <p>
                            <code>ID: </code>
                            <code>{""}</code>
                        </p>
                        
                    </div>
                </div>
                <div className="chatbox__action">
                    <div className="chatbox__action--video">
                        <i className="fa-solid fa-video"></i>
                    </div>
                    <div className="chatbox__action--call">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="chatbox__action--ellipsis">
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            </div>
            <div className="chatbox__layout">
                <div className="chatbox__content">
                    <p>{messageReceived}</p>
                    
                    <p ref={typingRef}></p>
                </div>
                <div className="chatbox__input">
                    <div className="chatbox__input--action">
                        <div className="chatbox__input--files">
                            <i className="fa-solid fa-paperclip"></i>
                        </div>
                        <div className="chatbox__input--emoji">
                            <i className="fa-regular fa-face-smile"></i>
                        </div>
                    </div>
                    <div className="chatbox__input--messages">
                        <input ref={inputMessage} onChange={(e) => handleTypeMessage(e)} type={"text"} placeholder="Write a message..." className="chatbox__input--messages" />
                    </div>
                    <div onClick={sendMessage} className="chatbox__input--sendBtn">
                        <i className="fa-solid fa-paper-plane"></i>
                    </div>
                </div>
            </div>
           
        </div>
    );
};
export default Conversation;
