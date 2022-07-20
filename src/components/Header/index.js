import {Component, useContext} from "react";

class Header extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener('click',(e)=>{
            console.log(e.target.localName === 'header')
        })
    }

    render() {
        return(
            <header className="header">
                Header
            </header>
        )
    }
}

export default Header