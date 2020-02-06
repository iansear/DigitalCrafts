import React from 'react'
import {connect} from 'react-redux'

function Counter(props) {
    return (
        <div>
            <h1>Counter 2</h1>
            <h3>{props.cnt}</h3>
            <button onClick={() => props.onIncrease()}>Increase</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cnt: state.cnt
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: () => dispatch({type: 'INCREASE_COUNTER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)