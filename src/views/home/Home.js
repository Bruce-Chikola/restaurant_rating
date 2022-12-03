import React, { useEffect } from 'react'
import Header from '../common/Header'
import LandingContent from './LandingContent'
import '../../css/home.css'
import '../../css/footer.css'
import TopRatedRestaurants from './TopRatedRestaurants'
import RestRestaurants from './RestRestaurants'
import Footer from '../common/Footer'
import { GetRestaurants } from '../../api/Functions'
import { useDispatch } from 'react-redux'
import { setRestaurantList } from '../../store/restaurants/restaurantSlice'
export default function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        // fetch data on mount
        GetRestaurants().then(resolve => {
            if (resolve.status == 200) {
                dispatch(setRestaurantList(resolve.response.data))
            }
        })
    }, [])
    return (
        <>
            <LandingContent />
            <TopRatedRestaurants />
            <RestRestaurants />
            <Footer />
        </>
    )
}
