import React, {Component} from 'react'

class Intro extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ctr: 0
        }
    }

    increment = () => {
        this.setState({
            ctr: this.state.ctr + 1
        })
    }

    render() {
        return (<div>
            <h1>Hello, {this.props.name}</h1>
            <h1>{this.state.ctr}</h1>
            <button onClick={this.increment} >Increment</button>
        </div>)
    }
}

export default Intro