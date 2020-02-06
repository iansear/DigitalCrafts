import React, {Component} from 'react'
import Header from './Header'
import Books from './Books'
import Footer from './Footer'

class App extends Component {

  render() {
    return (<div>
              <Header />
              <Books />
              <Footer />
            </div>)
  }
}

export default App