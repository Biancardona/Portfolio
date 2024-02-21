import Logo from '../../assets/logo1b.jpg';
import data from './data';
import useModal from '../../hooks/useModal';
import { IoIosColorPalette } from 'react-icons/io';
import './navbar.css';

const Navbar = () => {
  //Calling the useModal function , Aplying destructuring
  //to access the values from the modalContext

  const { showModalHandler } = useModal();

  return (
    <nav>
      <div className='container nav__container'>
        <a href='index.thaml' className='nav__logo'>
          <img src={Logo} alt='Logo' />{' '}
        </a>
        <ul className='nav__menu'>
          {data.map((item) => (
            <li key={item.id}>
              {' '}
              <a href={item.link}>{item.title} </a>
            </li>
          ))}
        </ul>
        <button type='button' onClick={showModalHandler} id='theme__icon'>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
