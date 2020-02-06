import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux'

function Counter(props) {
    const [subtractVal, setSubtractVal] = useState(0)

    const setLocalVal = (val) => {
        setSubtractVal(val.target.value)
    }

    return (
        <div>
            <h1>Counter 1: {props.user}</h1>
            <h3>{props.cnt}</h3>
            <button onClick={() => props.onDecrease()}>Decrease</button>
            <input onChange={setLocalVal} type="number" />
            <button onClick={() => props.setGlobalVal(subtractVal)}>Subtract</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cnt: state.cnt,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDecrease: () => dispatch({type: 'DECREASE_COUNTER'}),
        setGlobalVal: (subtractVal) => dispatch({type: 'SUBTRACT_COUNTER', val: subtractVal})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)