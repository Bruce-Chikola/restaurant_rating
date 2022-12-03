import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    restaurantList: [],
    selectedRestaurant: {},
    restaurantLogos: ['f1.png', 'f2.png', 'f3.png', 'f4.png', 'f5.png', 'f6.png']
}
export const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        setRestaurantList: (state, action) => {
            state.restaurantList = action.payload
        },
        setSelectedRestaurant: (state, action) => {
            state.selectedRestaurant = action.payload
        }
    }
})
export const { setRestaurantList, setSelectedRestaurant } = restaurantSlice.actions
export default restaurantSlice.reducer