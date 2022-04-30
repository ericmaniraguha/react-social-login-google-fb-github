import basket from '../asset/imagesBasket/basket.png';
const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Auth App</span>
      <ul className='list'>
        <li className='listItem'>
          <img src={basket} alt='' className='avatar' />
        </li>
        <li className='listItem'>Mr. Smith Parker</li>
        <li className='listItem'>Logout</li>
      </ul>
    </div>
  );
};
export default Navbar;
