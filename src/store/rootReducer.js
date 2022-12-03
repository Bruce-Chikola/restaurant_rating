import { combineReducers } from 'redux'
import restaurant from './restaurants/'
const rootReducer = () => (state, action) => {
    const combinedReducer = combineReducers({ restaurant })
    return combinedReducer(state, action)
}

export default rootReducer
