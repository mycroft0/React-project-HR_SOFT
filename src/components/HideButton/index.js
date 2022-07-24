import {memo} from "react";

const hideButton = ({click}) =>{

    console.log("rendered")
    return(
        <div style={{width: 100, height: 100, borderRadius: "50%", backgroundColor: 'aqua'}}>
            <button onClick={click}>Hide</button>
        </div>
    )
}

export default memo(hideButton)