import {useEffect, useState} from "react";

const NavBar = () => {

    const [count,setCount] = useState(0)

    useEffect(()=>{
        fetch('kkkk')
            .then(res => res.json())
            .then(res=>{
                setCount(res)
            })
    },[])

    const changeCount = arg  =>{
        setCount(prev => ++prev)
        setCount(prev => ++prev)
        setCount(prev => ++prev)
        setCount(prev => ++prev)

    }

    return (
        <div>
            <button onClick={changeCount}>change count</button>
            {count}
        </div>  )

}

export default NavBar