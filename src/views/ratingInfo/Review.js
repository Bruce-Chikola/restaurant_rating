import React from 'react'
import { HiStar, HiUserCircle } from 'react-icons/hi'

export default function Review({ value, review }) {
    let stars = []
    for (let i = 0; i < value; i++)
        stars.push(<HiStar key={Math.random() * value * value} size={20} color="gray" />)
    return (
        <div className='flex items-start justify-start'>
            <HiUserCircle size={50} />
            <div className='w-full flex flex-col ml-3  bg-gray-200 rounded mb-10 p-5'>
                <h3 className='flex m-0 justify-start items-center w-full'>{stars.map(star => star)}</h3>
                <p>{review}</p>
            </div>
        </div>
    )
}
