import { combineReducers } from 'redux'
import restaurant from './restaurants/'
import rating from './rating/ratingSlice'
const rootReducer = () => (state, action) => {
    const combinedReducer = combineReducers({ restaurant, rating })
    return combinedReducer(state, action)
}

export default rootReducer
