import { Link } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className="orbital"/>
      <div className="left">
        <h1>YATINI GPT</h1>
        <h2>Supercharge Your creativity and productivity</h2>
        <h3>Elevating your conversational AI experience with cutting-edge technology and unparalleled efficiency.</h3>
        <Link to="/dashboard" className="button">Get Started</Link>
      </div>
      <div className="right">
        <div className="imageContainer">
          <div className="bgContainer">
          <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className='bot' />
        </div>
      </div>
    </div>
  );
};

export default HomePage;