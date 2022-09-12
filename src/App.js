import './style.scss'
import Navbar from './Components/Navbar/Navbar.js';
import User from './Components/Users/User.js';
import Chatbox from './Components/ChatBox/Chatbox.js';
import Chatboxsetting from './Components/ChatBoxSetting/ChatBoxSetting.js';

function App() {
  return (
    <div className="App">
        <Navbar>
            <div className='navbar__action--icon active'><i className="fa-solid fa-comment-dots"></i></div>
            <div className='navbar__action--icon'><i className="fa-solid fa-users"></i></div>
            <div className='navbar__action--icon'><i className="fa-solid fa-video"></i></div>
            <div className='navbar__action--icon'><i className="fa-solid fa-phone"></i></div>
            <div className='navbar__action--icon'><i className="fa-regular fa-calendar"></i></div>
            <div className='navbar__action--icon'><i className="fa-solid fa-gear"></i></div>
        </Navbar>
        <User></User>
        <Chatbox></Chatbox>
        {/* <Chatboxsetting></Chatboxsetting> */}
    </div>
  );
}

export default App;
