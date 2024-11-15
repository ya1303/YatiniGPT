import { Link, Outlet } from 'react-router-dom';
import './rootLayout.css';

const RootLayout = () => {
  return (
    <div className='rootLayout'>
        <header>
            <Link to="/">
            <img src="/public/logo.png" alt="hi" />
            <span>Yatini GPT</span>
            </Link>
            <main>
                <Outlet/>
            </main>
        </header>
    </div>
  );
};

export default RootLayout;