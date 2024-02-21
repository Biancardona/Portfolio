import HeaderImage from '../../assets/profile1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import data from './data.js';
import './header.css';
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    AOS.init({ startEvent: 'load', duration: 2000 });
  }, []);
  return (
    <header id='header'>
      <div className='container header__container'>
        <div className='header__profile' data-aos='fade-in'>
          <img src={HeaderImage} alt='Header Profile'></img>
        </div>
        <h3 data-aos='fade-in'> Bianca Cardona</h3>
        <p data-aos='fade-in'>
          {' '}
          A passionate creator in crafting applications!!
        </p>
        <div className='header__cta'>
          <a href='#contact' className='btn primary'>
            Contact
          </a>
          <a href='#portfolio' className='btn light'>
            {' '}
            My projects
          </a>
          <a href='#blog'>View Blog</a>
        </div>
        <div className='header__socials'>
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {item.icon}{' '}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
