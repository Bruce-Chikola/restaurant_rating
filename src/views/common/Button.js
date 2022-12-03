import React from 'react'

export default function Button({ title = '', className = {} }) {
    const classes = `btn hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded ${className}`
    return (
        <div>
            <button className={classes}>{title}</button>
        </div >
    )
}
