import './style.scss'
import Navbar from './Components/Navbar/Navbar.js';
import User from './Components/Users/User.js';
import Chatbox from './Components/ChatBox/Chatbox.js';
import Chatboxsetting from './Components/ChatBoxSetting/ChatBoxSetting.js';

function App() {
  return (
    <div className="App">
        <Navbar>
            
        </Navbar>
        <User></User>
        <Chatbox></Chatbox>
        {/* <Chatboxsetting></Chatboxsetting> */}
    </div>
  );
}

export default App;
