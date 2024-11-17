import { Link } from 'react-router-dom';
import './chatList.css';

const ChatList = () => {
  return (
    <div className='chatList'>
        <span className='title'>DASHBOARD</span>
        <Link to="/dashboard">Create a new chat</Link>
        <Link to="/">Explore Yatini GPT</Link>
        <Link to="/">Contact</Link>
        <hr />
        <span className='title'>RECENT CHATS</span>
        <div className="list">
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
        </div>
        <hr />
        <div className="upgrade">
            <img src="/logo.png" alt="" />
            <div className='texts'>
            <span>Upgrade to Yatini GPT Pro</span>
            <span>Get unlimited acess to all the features</span>
            </div>
        </div>
    </div>
  );
};

export default ChatList;