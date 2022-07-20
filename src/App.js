import {Component} from "react";
import Header from "./Header";
import NavBar from "./components/NavBar";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            circles: [
                {
                    id: '1',
                    color:'red'
                },
                {
                    id: '2',
                    color:'purple'
                },
                {
                    id: '3',
                    color:'brown'
                },
                {
                    id: '4',
                    color:'blue'
                },
                {
                    id: '5',
                    color:'green'
                }

            ]
        }

    }

    changeColor = e => {
        this.setState({circles})
        e.target.id
    }

    render(){
        return(
            <div className="container">
                {
                    this.state.circles.map(circle =>{
                        return(
                            <div key={circle.id}
                                 id = {circle.id}
                                 className="circle"
                                 style={{backgroundColor: circle.color}}
                                 onClick={this.changeColor}

                            >{circle.id}</div>
                        )
                    })
                }
            </div>
        );
    }
}

export default App