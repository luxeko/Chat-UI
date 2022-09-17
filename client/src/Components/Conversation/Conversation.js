import React, { useRef, useEffect, useState } from "react";
import "./style.scss";
const Conversation = ({userName, socket, room}) => {
    // const typingRef = useRef();
    const inputMessage = useRef();
    
    const [currentMessage, setCurrentMessage] = useState("")
    const [messageList, setMessageList] = useState([])
    const lastMessageRef = useRef();
    const sendMessage = async () => {
       
        if(currentMessage !== "") {
            const messageData = {
                room: room,
                author: userName,
                message: currentMessage,
                time: new Date(Date.now()).toLocaleTimeString()
            }
            await socket.emit("send_message", messageData)
            setMessageList((list) => [...list, messageData])

        }
        inputMessage.current.value = ""
    }
    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data])
        })
    }, [socket])
    useEffect(() => {
        if(lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({smooth: true})
        }
    })
    return (
        <div className="chatbox">
            <div className="chatbox__header">
                <div className="chatbox__header--user">
                    <div className="chatbox__user--name">
                        <p></p>
                        <p>
                            <code>ID: </code>
                            <code>{}</code>
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
                    {messageList.map((messageContent, index) => {
                        const lastMessage = messageList.length - 1 === index
                        return (
                            <div ref={lastMessage ? lastMessageRef : null}          
                                className="message" 
                                id={userName === messageContent.author ? "you" : "other"}>
                                <div>
                                    <div className="message__content" >
                                        <p>{messageContent.message}</p>    
                                    </div>    
                                    <div className="message__meta" >
                                        <code>{messageContent.time}</code>    
                                        <code>{userName === messageContent.author ? "you" : "other"}</code>    
                                    </div>    
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
                    {/* <p className="typing" ref={typingRef}></p> */}
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
                        <input 
                            ref={inputMessage} 
                            onChange={(e) => setCurrentMessage(e.target.value)} 
                            type={"text"} 
                            placeholder="Write a message..." className="chatbox__input--messages"
                            onKeyPress={(e) => {e.key === "Enter" && sendMessage()}} />
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
