import React, { useEffect } from 'react'
import Header from '../common/Header'
import '../../css/rating-info.css'
import RestaurantDetails from './RestaurantDetails'
import Footer from '../common/Footer'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedRestaurant } from '../../store/restaurants/restaurantSlice'
import { GetRestaurants } from '../../api/Functions'
export default function RatingInfo() {
    const { restaurant } = useParams()
    const { restaurantList, selectedRestaurant } = useSelector(state => state.restaurant.restaurantSlice)
    const dispatch = useDispatch()
    useEffect(() => {
        // if the list is still stored in the slice, why not fetch the ID from there instead of making another request??
        if (restaurantList.length > 0) {
            let sr = {}
            restaurantList.map(res => {
                if (res.id == restaurant)
                    sr = res
            })
            dispatch(setSelectedRestaurant(sr))
        }
        else {
            // well, if the page was refreshed, we fetch again. but with the filter of the selected restaurant
            GetRestaurants(`${restaurant}`).then(resolve => {
                if (resolve.status == 200) {
                    dispatch(setSelectedRestaurant(resolve.response.data))
                }
            })
        }
    }, [])
    return (
        <div className=' flex flex-col items-center justify-start'>
            <div className='det-wrapper w-full flex flex-col items-center justify-start'>
            </div>
            <h1 className='rating-title mt-10'>Rating <span className='greened'>Info</span></h1>
            {Object.keys(selectedRestaurant).length > 0 && <RestaurantDetails data={selectedRestaurant} />}
            <div className='mt-40 w-full'>
                <Footer />
            </div>
        </div>
    )
}
