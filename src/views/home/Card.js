import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { Link } from 'react-router-dom'
export default function Card({ id, logo, name, address }) {
    return (
        <Link to={`ratingInfo/${id}`}
            style={{ textDecoration: 'none' }}
            className='card border bg-white border w-full h-full rounded  flex items-center justify-center flex-col'
        >
            <img style={{ width: 140, height: 140, objectFit: 'contain' }} src={`img/${logo}`} />
            <h3 style={{ margin: 0 }}>{name}</h3>
            <p className='flex items-center justify-center' style={{ fontSize: 15, color: 'gray' }}>
                <HiLocationMarker color="#2ac489" className='mr-3' size={20} />
                {address}
            </p>
        </Link>
    )
}
