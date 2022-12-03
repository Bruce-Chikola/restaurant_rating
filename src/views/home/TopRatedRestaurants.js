import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
export default function TopRatedRestaurants() {
    const { restaurantList, restaurantLogos } = useSelector((state) => state.restaurant.restaurantSlice)

    return (
        <div className='w-full flex flex-col mt-10 mb-40 items-center justify-start'>
            <h1 className='top-restaurant-title mb-5'>Top Rated <span className='greened'>Restaurants</span></h1>
            <div className='grid grid-cols-4 w-4/5 gap-10 mt-20'>
                {
                    restaurantList.length > 0 ?
                        (
                            restaurantList.map((restaurant, index) =>
                                index < 4 &&
                                <Card
                                    id={restaurant.id}
                                    key={`{restaurant.attributes.id${Math.random() * 1101}}`}
                                    name={restaurant.attributes.name}
                                    logo={restaurantLogos.Logo()}
                                    address={restaurant.attributes.address}
                                />
                            )
                        )
                        : ''
                }
            </div>
        </div>
    )
}
