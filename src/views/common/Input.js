import React from 'react'

export default function Input({ placeholder, style }) {
    return (
        <div>
            <input
                className={`search text-white text-sm rounded-lg block w-full p-2.5`}
                style={style}
                placeholder={placeholder} />
        </div>
    )
}
