import Card from './Card';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import useModal from '../hooks/useModal';
import './modal.css';

const Modal = ({ className, children }) => {
  const { modal, closeModalHandler } = useModal();
  return (
    <Fragment>
      {modal &&
        ReactDOM.createPortal(
          <>
            {' '}
            <section id='backdrop' onClick={closeModalHandler}>
              {' '}
            </section>{' '}
            <Card className={className}>{children} </Card>{' '}
          </>,
          document.querySelector('#overlays')
        )}
    </Fragment>
  );
};

export default Modal;
