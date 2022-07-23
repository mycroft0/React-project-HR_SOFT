import {createContext, useState} from "react";

export const ColorThemeContext = createContext(null)

const ColorThemeProvider = ({children}) => {

    const [themeColor, setThemeColor] = useState('red')

    return <ColorThemeContext.Provider value = {{themeColor, setThemeColor}}>
        {children}
    </ColorThemeContext.Provider>
}

export default ColorThemeProvider