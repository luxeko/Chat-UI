import React from 'react';
import './style.scss';


const Chatbox = () => {
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
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            </div>
            <div className='chatbox__content'>

            </div>
            <div className='chatbox__input'>
                
            </div>
        </div>
    )
}
export default Chatbox
