import React, { useEffect } from 'react'
import '../../css/rating-info.css'
import RestaurantDetails from './RestaurantDetails'
import Footer from '../common/Footer'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedRestaurant } from '../../store/restaurants/restaurantSlice'
import { CalculateRatings, GetRestaurants } from '../../api/Functions'
import { setRatingObject, setRatingWidths } from '../../store/rating/ratingSlice'
export default function RatingInfo() {
    const { restaurant } = useParams()
    const { restaurantList, selectedRestaurant } = useSelector(state => state.restaurant.restaurantSlice)
    const dispatch = useDispatch()
    useEffect(() => {
        // if the list is still stored in the slice, why not fetch the ID from there instead of making another request??
        if (restaurantList.length > 0) {
            let selectedRest = {}
            restaurantList.map(resolve => {
                if (resolve.id == restaurant)
                    selectedRest = resolve
            })
            dispatch(setSelectedRestaurant(selectedRest))
        }
        else {
            // well, if the page was refreshed, we fetch again. but with the filter of the selected restaurant
            GetRestaurants(`${restaurant}`).then(resolve => {
                console.log(resolve.response.data)
                if (resolve.status == 200) {
                    dispatch(setSelectedRestaurant(resolve.response.data))
                }
            })
        }
    }, [])
    // when the selected restaurant reducer is updated.. recalculate the ratings
    useEffect(() => {
        const ratingDaata = CalculateRatings(selectedRestaurant)
        if (ratingDaata) {
            dispatch(setRatingObject(ratingDaata.ratings))
            dispatch(setRatingWidths(ratingDaata.ratingWidths))
        }
    }, [selectedRestaurant])
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
