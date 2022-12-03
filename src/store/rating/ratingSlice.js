import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    ratings: {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0
    },
    ratingWidths: {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0
    }
}
export const ratingSlice = createSlice({
    name: 'rating',
    initialState,
    reducers: {
        setRatingObject: (state, action) => {
            state.ratings = action.payload
        },
        setRatingWidths: (state, action) => {
            state.ratingWidths = action.payload
        },
    }
})
export const { setRatingObject, setRatingWidths } = ratingSlice.actions
export default ratingSlice.reducer