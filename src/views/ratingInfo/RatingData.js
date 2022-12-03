import React from 'react'
import Rate from './Rate'
import { useSelector } from 'react-redux'
export default function RatingData() {
    const { ratingWidths } = useSelector(state => state.rating)
    return (
        <div className='rating-data bg-gray-200 mt-10 w-full grid grid-cols-3'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='m-0 font-bold' style={{ fontSize: 50 }}>4.5</h1>
                <small className='text-red-700 font-semibold'>Uncalculated</small>
            </div>
            <div className='col-span-2 flex flex-col mt-10'>
                <Rate key='fv' width={ratingWidths.five} value={5} />
                <Rate key='fo' width={ratingWidths.four} value={4} />
                <Rate key='tr' width={ratingWidths.three} value={3} />
                <Rate key='tw' width={ratingWidths.two} value={2} />
                <Rate key='on' width={ratingWidths.one} value={1} />
            </div>

        </div>
    )
}
