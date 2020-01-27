import React, {Component} from 'react'

class Stepper extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ctr: 0
        }
    }

    increaseCtr = () => {
        this.setState({
            ctr: this.state.ctr + 1
        })
    }

    decreaseCtr = () => {
        this.setState({
            ctr: this.state.ctr - 1
        })
    }

    render() {
        return (<div className="stepper">
            <button onClick={this.decreaseCtr}>-</button>
            <h1>{this.state.ctr}</h1>
            <button onClick={this.increaseCtr}>+</button>  
        </div>)
    }
}

export default Stepper