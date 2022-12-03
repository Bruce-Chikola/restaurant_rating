import React from 'react'
import { Link } from 'react-router-dom'
export default function OtherCard({ logo, name, id }) {
    return (
        <Link to={`ratingInfo/${id}`} className='other-card w-full flex flex-col items-center justify-center' style={{ textDecoration: 'none' }}>
            <img className='other-card-img' src={`img/${logo}`} />
            <h4>{name}</h4>
        </Link>
    )
}
