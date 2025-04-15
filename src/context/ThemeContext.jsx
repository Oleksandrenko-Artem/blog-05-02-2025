import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import CONSTANTS from "../constants";

const { THEMES } = CONSTANTS;

const ThemeContext = createContext(); // {Provider, Consumer}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(THEMES.LIGHT);
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    const toogleTheme = () => {
        setTheme((prevTheme) => prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
    };
    return <ThemeContext.Provider value={{theme, toogleTheme}}>{children}</ThemeContext.Provider>
};

ThemeProvider.propTypes = {
    children: PropTypes.any,
}

export { ThemeContext };