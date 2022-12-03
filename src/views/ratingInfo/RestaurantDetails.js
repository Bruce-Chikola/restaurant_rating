import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import RatingData from './RatingData'
import Reviews from './Reviews'

export default function RestaurantDetails({ data }) {
    console.log(data)
    return (
        <div className='rest-dets bordder border-indigo-500 rounded'>
            <div className='my-3 ml-5'>RestaurantDetails</div>
            <div className='w-full grid grid-cols-3'>
                <img style={{ maxWidth: 400 }} src="../../../public/img/f4.png" />
                <div className='col-span-2'>
                    <h1 className='rt'>{data.attributes.name}</h1>
                    <h4 className='flex m-0 items-center justify-start'><HiLocationMarker size={30} color="gray" /> {data.attributes.address}</h4>
                    <RatingData />
                    <Reviews />
                </div>
            </div>
        </div>
    )
}
