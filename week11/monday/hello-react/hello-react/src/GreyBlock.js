import React, {Component} from 'react'

class GreyBlock extends Component {

    render() {
        return (<div className="greyblock">
             <h1>{this.props.title}</h1>
             <p>{this.props.body}</p>
        </div>)
    }
}

export default GreyBlock