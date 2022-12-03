import React from 'react'
import Rate from './Rate'
export default function RatingData() {
    return (
        <div className='rating-data bg-gray-200 mt-10 w-full grid grid-cols-3'>
            <div className='flex justify-center items-center'>
                <h1 className=' font-bold' style={{ fontSize: 50 }}>4.5</h1>
            </div>
            <div className='col-span-2 flex flex-col mt-10'>
                <Rate key='fv' width="50%" value={5} color="#0b2239" />
                <Rate key='fo' width="80%" value={4} color="#0b2239" />
                <Rate key='tr' width="40%" value={3} color="#0b2239" />
                <Rate key='tw' width="10%" value={2} color="#0b2239" />
                <Rate key='on' width="100%" value={1} color="#0b2239" />
            </div>

        </div>
    )
}
