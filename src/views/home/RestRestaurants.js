import React from 'react'
import Card from './Card'
import OtherCard from './OtherCard'
import { useSelector } from 'react-redux'
export default function RestRestaurants() {
    const { restaurantList, restaurantLogos } = useSelector((state) => state.restaurant.restaurantSlice)
    return (
        <div className='rest-wrapper w-full flex justify-start flex-col items-center mt-5'>
            <h1 className='top-restaurant-title mt-20'>Other <span className='greened'>Restaurants</span></h1>
            <p>Below are the less or none-rated restaurants. to rate any any of the, click on them and give them points of your choice</p>
            <div className='w-3/4 grid grid-cols-4 gap-5 mt-10'>
                {
                    restaurantList.length > 0 ?
                        (
                            restaurantList.map(restaurant =>
                                <OtherCard
                                    id={restaurant.id}
                                    key={`{restaurant.id${Math.random() * 2201}}`}
                                    name={restaurant.attributes.name}
                                    logo={restaurantLogos.Logo()}
                                />
                            )
                        )
                        : ''
                }
            </div>
        </div>
    )
}
