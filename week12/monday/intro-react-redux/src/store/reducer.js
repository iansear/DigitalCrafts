const initState = {
    cnt: 0
}

const reducer = (state = initState, action) => {
    if(action.type === 'DECREASE_COUNTER') {
        return {
            ...state,
            cnt: state.cnt - 1
        }
    } else if(action.type === 'INCREASE_COUNTER') {
        return {
            ...state,
            cnt: state.cnt + 1
        }
    } else if(action.type === 'SET_USER') {
        return {
            ...state,
            user: action.user
        }
    } else if(action.type === 'SUBTRACT_COUNTER') {
        return {
            ...state,
            cnt: state.cnt - action.val
        }
    } else {
        return state
    }
}

export default reducer