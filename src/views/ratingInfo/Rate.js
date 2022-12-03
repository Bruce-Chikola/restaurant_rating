import React from 'react'
import { HiStar } from 'react-icons/hi'

export default function Rate({ width, color, value }) {
    let stars = []
    for (let i = 0; i < value; i++)
        stars.push(<HiStar key={Math.random() * i} size={20} color="gray" />)
    return (
        <div className='w-full mb-2 flex items-center justify-start'>
            <h6 className='m-0 flex items-center justify-center'>{stars.map(star => star)}</h6>
            <div className='rate-progress-wrapper ml-5 mr-10 relative' style={{ color: color }}>
                <div className='rate-progress absolute l-0 left-0' style={{ background: color, width: width }}></div>
            </div>
        </div>
    )
}
