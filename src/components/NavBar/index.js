import {useContext} from "react";
import {ColorThemeContext} from "../../context/colorThemeProvider";

const NavBar = () =>{

    const {themeColor, setThemeColor} = useContext(ColorThemeContext)

    const handleThemeColor = e =>{
        setThemeColor(e.target.value)
    }

    return(
        <div>
            NavBar
            <select value={themeColor} onChange={handleThemeColor} name = 'color' id = 'color'>
                <option value = "white">white</option>
                <option value = "green">green</option>
                <option value = "orange">orange</option>
            </select>
        </div>
    )
}

export default NavBar