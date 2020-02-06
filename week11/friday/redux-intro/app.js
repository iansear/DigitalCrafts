const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    number: 0,
    string: 'this'
}

const reducer = (state = initialState, action) => {
    if(action.type == 'ADD') {
        return {
            ...state,
            number: state.number + action.value
        }
    
    } else if(action.type == 'SETSTRING') {
        return {
            ...state,
            string: state.string = action.value
        }
    }
    return state
}

const store = createStore(reducer)

console.log(store.getState()) 

store.subscribe(() => {
    console.log('store updated...')
    console.log(store.getState()) 
})

store.dispatch({type: 'ADD', value: 10})

store.dispatch({type: 'ADD', value: -3})

store.dispatch({type: 'SETSTRING', value: 'that'})

store.dispatch({type: 'SETSTRING', value: 'some more stuff'})

let currentState = store.getState()
console.log('This is', currentState.string)