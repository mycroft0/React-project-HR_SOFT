import {useEffect, useState, useRef} from "react";

const NavBar = () => {

    const [count,setCount] = useState(0)

    const ref = useRef()

    useEffect(()=>{
        /*fetch('kkkk')
            .then(res => res.json())
            .then(res=>{
                setCount(res)
            })*/
        document.addEventListener('click', clickHandler)
        return(
            document.removeEventListener('click', clickHandler)
        )
    },[])

    const clickHandler = (e) => {
        console.log(e.target)
    }

    const changeCount = arg  =>{
        setCount(prev => ++prev)
        setCount(prev => ++prev)
        setCount(prev => ++prev)
        setCount(prev => ++prev)

    }

    const changeState = () => {
        console.log(ref.current)
    }

    return (
        <div>
            <button  onClick={changeCount}>change count</button>
            <button ref={ref} onClick={changeState}>Click ref</button>
            {count}
        </div>  )

}

export default NavBar