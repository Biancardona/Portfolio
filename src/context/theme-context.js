import { createContext, useReducer, useEffect } from 'react';
import themeReducer from '../hooks/themeReducer';

const ThemeContext = createContext()
const initialStateTheme = JSON.parse(localStorage.getItem("theme")) || { primary: 'color-1', background: 'bg-1' }


const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialStateTheme)

    // Update localStorage whenever the state changes
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(state));
    }, [state]);

    //Dependind on the button that is clicked, we are going to use the className to change 
    //the primary or background theme
    const themeHandler = (buttonClassName) => {
        dispatch({
            type: buttonClassName,
        })
    }



    return (<ThemeContext.Provider value={{ state, themeHandler }}>
        {children}
    </ThemeContext.Provider>
    )
}

export { ThemeProvider }
export default ThemeContext