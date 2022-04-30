import basket from '../asset/imagesBasket/basket.png';
import { Link } from 'react-router-dom';
// import Login from './pages/Login';

const Navbar = ({ user }) => {
  return (
    <div className='navbar'>
      <span className='logo'>
        <Link className='link' to='/'>
          Auth App
        </Link>
      </span>
      {user ? (
        <ul className='list'>
          <li className='listItem'>
            <img src={basket} alt='' className='avatar' />
          </li>
          <li className='listItem'>Mr. Smith Parker</li>
          <li className='listItem'>Logout</li>
        </ul>
      ) : (
        <Link className='link' to='Login'>
          Login
        </Link>
      )}
    </div>
  );
};
export default Navbar;
