import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux'

const User = (props) => {
    const [user, setUser] = useState('')

    const userInput = (input) => {
        setUser(input.target.value)
    }

    return (<div>
        <h1>User Name: </h1>
        <input onChange={userInput} type="text" />
        <button onClick={() => props.setGlobalUser(user)}>Sign In</button>
    </div>)
}

const mapDispatchToProps = (dispatch) => {
    return {
        setGlobalUser: (user) => dispatch({type: 'SET_USER', user: user})
    }
}

export default connect(null, mapDispatchToProps)(User)