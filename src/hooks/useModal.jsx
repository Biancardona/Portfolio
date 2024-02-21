//CUSTOM HOOK FOR THE MODAL CONTEXT
//Context its going to extract all the info (state) from the modal-Context
import { useContext } from 'react';
import ModalContext from '../context/modal-context';

//UseModal is going to make available the values of the provider(modalContext)

const useModal = () => {
  return useContext(ModalContext);
};

export default useModal;
