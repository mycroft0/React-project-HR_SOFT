import {useContext} from "react";
import {ColorThemeContext} from "../../context/colorThemeProvider";

const Footer = () =>{

    const {themeColor} = useContext(ColorThemeContext)
    console.log('themeColor', themeColor)

    return(
        <div style={{height: '10vh', width: '100%' , backgroundColor: themeColor }}>

        </div>
    )
}

export default Footer