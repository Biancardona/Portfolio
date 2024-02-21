import './footer.css';
import { links, socials } from './data';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container footer__container'>
        <ul className='nav__menu'>
          {links.map((item) => (
            <li key={item.id}>
              {' '}
              <a href={item.link}> {item.title}</a>
            </li>
          ))}
        </ul>
        <div className='footer__socials' data-aos='fade-up'>
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className='footer__copyright'>
        <small>2024 & Bianca Esmeralda Cardona Rivera </small>
      </div>
    </footer>
  );
};

export default Footer;
