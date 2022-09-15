import React from 'react';
import './style.scss';


const Chatbox = (props) => {
    return (
        <div className='chatbox'>
            <div className='chatbox__header'>
                <div className='chatbox__header--user'>
                    <div className='chatbox__user--icon'>
                        <img src={require('../../Assets/Image/User/face1.jpg')}  alt="user"/>
                    </div>
                    <div className='chatbox__user--name'>
                        <p>Đức Anh</p>
                        <p>typing...</p>
                    </div>
                </div>
                <div className='chatbox__action'>
                    <div className='chatbox__action--video'>
                        <i className="fa-solid fa-video"></i>
                    </div>
                    <div className='chatbox__action--call'>
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className='chatbox__action--ellipsis'>
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            </div>
            <div className='chatbox__content'>

            </div>
            <div className='chatbox__input'>
                <div className='chatbox__input--action'>
                    <div className='chatbox__input--files'> 
                        <i className="fa-solid fa-paperclip"></i>
                    </div>
                    <div className='chatbox__input--emoji'>
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
                <div className='chatbox__input--messages'>
                    <input type={"text"} placeholder="Write a message..." className="chatbox__input--messages"/>
                </div>
                <div className='chatbox__input--sendBtn'>
                    <i className="fa-solid fa-paper-plane"></i>
                </div>
            </div>
        </div>
    )
}
export default Chatbox
