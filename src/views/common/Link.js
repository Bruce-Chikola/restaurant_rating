import React from 'react'

export default function Link({ url, title }) {
    return (
        <div className='mb-5'>
            <a href={url} className="text-white font-sm" style={{ textDecoration: 'none' }}>{title}</a>
        </div>
    )
}
