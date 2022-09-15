import React from 'react';
import './style.scss';

const Users = (dataUsers) => {
    console.log();
    return (
        <div className='user'>
            <div className='user__title--2'>
                <h2>Chat</h2>   
            </div>
            <div className='user__seaarch'>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input placeholder='Search people or message...' />
            </div>
            <div className='user__title--3'>
                <h3>Online</h3>
            </div>
            <div className='user__online'>
                <div className='user__online--icon'>
                    <img src={require('../../Assets/Image/User/face1.jpg')}  alt="user"/>
                    <span className='user__online--status'></span>
                </div>
                <div className='user__online--icon'>
                    <img src={require('../../Assets/Image/User/face1.jpg')}  alt="user"/>
                    <span className='user__online--status'></span>
                </div>
                <div className='user__online--icon'>
                    <img src={require('../../Assets/Image/User/face1.jpg')}  alt="user"/>
                    <span className='user__online--status'></span>
                </div>
                <div className='user__online--icon'>
                    <img src={require('../../Assets/Image/User/face1.jpg')}  alt="user"/>
                    <span className='user__online--status'></span>
                </div>
            </div>
            <div className='user__title--3'>
                <h3>Messages</h3>
            </div>
            <div className='user__messages'>
                {dataUsers.users && dataUsers.users.length > 0 && dataUsers.users.map((user, index) => {
                    return  <div key={user.id} className='user__messages--box'>
                                <div>
                                    <div className='user__online--icon'>
                                        <img src={require('../../Assets/Image/User/face1.jpg')}  alt="user"/>
                                        <span className='user__online--status'></span>
                                    </div>
                                    <div className='user__messages--name'>
                                        <p>{user.name}</p>
                                        <p>Hello world</p>
                                    </div>
                                </div>
                                <div className='user__messages--time'>
                                    <span>10:24 AM</span>
                                </div>
                            </div>
                })
                }
            </div>
            
        </div>
    )
}
  
export default Users