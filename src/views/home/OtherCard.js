import React from 'react'

export default function OtherCard({ logo, name }) {
    return (
        <div className='other-card w-full flex flex-col items-center justify-center'>
            <img className='other-card-img' src={`img/${logo}`} />
            <h4>{name}</h4>
        </div>
    )
}
