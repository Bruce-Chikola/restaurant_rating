import { combineReducers } from '@reduxjs/toolkit'
import restaurantSlice from './restaurantSlice'
const reducer = combineReducers({ restaurantSlice })

export default reducer