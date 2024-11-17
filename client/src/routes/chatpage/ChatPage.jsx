import "./chatPage.css";
import NewPrompt from "../../components/Chatlist/newPrompt/NewPrompt";

const ChatPage = () => {

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test message by ai</div>
          <div className="message user">Test message by human</div>
          <div className="message">Test message by ai</div>
          <div className="message user">Test message by human</div>
          <div className="message">Test message by ai</div>
          <div className="message user">Test message by human</div>
          <div className="message">Test message by ai</div>
          <div className="message user">Test message by human</div>
          <div className="message">Test message by ai</div>
          <div className="message user">Test message by human</div>
          <div className="message">Test message by ai</div>
          <div className="message user">Test message by human</div>
          <div className="message">Test message by ai</div>
          <div className="message user">Test message by human</div>
          <div className="message">Test message by ai</div>
          <div className="message user">Test message by human</div>
          <div className="message">Test message by ai</div>
          <div className="message user">Test message by human</div>
          <div className="message">Test message by ai</div>
          <div className="message user">Test message by human</div>
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
