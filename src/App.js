import {Component} from "react";
import {COLORS, BUTTON_TYPES} from "./helpers/constants"
import Header from "./components/Header";

import NavBar from "./components/NavBar";


const {RED, PURPLE, BROWN, BLUE,GREEN, ORANGE} = COLORS
const {HIDE, SHOW} = BUTTON_TYPES

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            circles: [
                {
                    id: '1',
                    color:RED
                },
                {
                    id: '2',
                    color:PURPLE
                },
                {
                    id: '3',
                    color:BROWN
                },
                {
                    id: '4',
                    color:BLUE
                },
                {
                    id: '5',
                    color:GREEN
                }

            ],
            chosenCircle: null,
            isHeaderShown: true
        }

    }

    changeColor = e => {
        this.setState({chosenCircle: e.target.id})

    }

    toggleHeader = () =>{
        this.setState(prev=>{
            prev.isHeaderShown = !prev.isHeaderShown
            return prev
        })
    }

    getRandomNum = () =>{
        Math.floor(Math.random()*100)
    }


    render(){
        const {circles, chosenCircle, isHeaderShown} = this.state;
        return(
            <>
                {isHeaderShown && <Header color={chosenCircle && circles[chosenCircle - 1].color} /> }
                <button onClick={this.toggleHeader}>{isHeaderShown ? HIDE : SHOW}</button>
                <div className="container">
                    {
                        this.state.circles.map(circle =>{
                            return(
                                <div key={circle.id}
                                     id = {circle.id}
                                     className="circle"
                                     style={{backgroundColor: this.state.chosenCircle === circle.id ? ORANGE : circle.color}}
                                     onClick={this.changeColor}

                                >{circle.id}</div>
                            )
                        })
                    }
                </div>
            </>

        );
    }
}

export default App