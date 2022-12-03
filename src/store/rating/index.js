import { combineReducers } from '@reduxjs/toolkit'
import ratingSlice from './ratingSlice'
const reducer = combineReducers({ ratingSlice })

export default reducer