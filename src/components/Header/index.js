import {Component, useContext} from "react";

class Header extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener('click',this.click)
    }

    componentWillUnmount() {
        document.removeEventListener('click',this.click)
    }

    click = e =>{
        console.log(e.target.localName === 'header')
    }

    render() {
        return(
            <header className="header" style={{backgroundColor: this.props.color}}>
                Header
            </header>
        )
    }
}

export default Header