import PrimaryColor from './PrimaryColor';
import BackgroundColor from './BackgroundColor';
import Modal from '../components/Modal';
import './theme.css';
import { primaryColors, backgroundColors } from './data';

const Theme = () => {
  return (
    <Modal className='theme__modal'>
      <h3>Customize your theme</h3>
      <p>Change the primary and background color to your preference</p>
      <div className='theme__primary-wraper'>
        <h5> Primary Color</h5>
        <div className='theme__primary-colors'>
          {primaryColors.map((pColor) => (
            <PrimaryColor key={pColor.className} className={pColor.className} />
          ))}
        </div>
      </div>
      <div className='theme__background-wraper'>
        <h5>Background Color</h5>
        <div className='theme__background-colors'>
          {backgroundColors.map((bColor) => (
            <BackgroundColor
              key={bColor.className}
              className={bColor.className}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Theme;
