import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalProvider } from './context/modal-context';
import { ThemeProvider } from './context/theme-context';
import "./index.css"
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<StrictMode>

    <ThemeProvider> <ModalProvider>  <App /> </ModalProvider>  </ThemeProvider></StrictMode >
)