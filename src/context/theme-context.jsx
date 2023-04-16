import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkmode] = useState(false);



    function changeTheme() {
        setDarkmode(!darkMode)
    }


    return (
        <ThemeContext.Provider value={{ darkMode, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider