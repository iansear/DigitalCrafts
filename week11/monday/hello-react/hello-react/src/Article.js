import React, {Component} from 'react'
import Stepper from './Stepper'

class Article extends Component {

    render() {
        return (<div className="article">
             <h1>{this.props.title}</h1>
             <p>{this.props.body}</p>
             <div className="commentsbar">
                 <p>{this.props.comments} comments</p>
                 <p>{this.props.likes} likes</p>
                <Stepper />
             </div>
        </div>)
    }
}

export default Article