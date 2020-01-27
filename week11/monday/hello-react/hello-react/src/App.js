import React, {Component} from 'react'
// import Intro from './Intro' <Intro name="MyName" />
// import Stepper from './Stepper' <Stepper />
import Header from './Header'
import GreyBlock from './GreyBlock'
import './App.css';
import Article from './Article';

class App extends Component {

  render() {
    let title1 = `Curse of the Current Reviews`
    let body1 = `When you wnat to buy any application from the Apple 
                iTunes store you have more choices than you can handle. 
                Most of the users scroll past the application description 
                completely avoiding it like ads................`
    let title2 = `Hello WatchKit`
    let body2 = `Last month Apple realeased the anticipated Watchkit 
                Framework for d3velopers in the form of iOS 8.2 beta SDK 
                release. The Watchkit framework enable the developers to 
                create Apple Watch applications. In this article........`
    let title3 = `Introduction to Swift`
    let body3 = `Swift is a modern programming language developed by 
                Apple to create the next generation of iOS and OSX 
                applications. Swift is a fairly new language and still
                in development byt it clearly reflects the intentions
                and the furure direction. This article will revolve
                around the basic concepts in the....................`
    return (<div>
            <Header />
            <GreyBlock title={title1} body={body1} />
            <Article title={title2} body={body2} comments="12" likes="124"/>
            <Article title={title3} body={body3} comments="15" likes="45"/>
          </div>)
  }
}

export default App;
