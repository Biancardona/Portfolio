import { createContext, useState } from "react";

//create a variable that stores or create the Context
const ModalContext = createContext();
//Create a function o component father that it's going to wrap all the others apps
const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState(false);
    //Functions that are going to show or hide the modal
    const showModalHandler = () => {
        setModal(true)
    }
    const closeModalHandler = () => {
        setModal(false)
    }

    return (<ModalContext.Provider value={{ modal, setModal, showModalHandler, closeModalHandler }}
    >{children}
    </ModalContext.Provider>)
}

export { ModalProvider }
export default ModalContext