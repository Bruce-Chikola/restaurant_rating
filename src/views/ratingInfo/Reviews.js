import React from 'react'
import Review from './Review'

export default function Reviews() {
    return (
        <div>
            <div className='reviews w-full flex flex-col mt-10'>
                <h3>Reviews</h3>
                <Review key={Math.random() * 134} value={3} review="This is the worst rating system i have ever seen ine pano mumbwenbe" />
                <Review key={Math.random() * 55} value={5} review="This is the worst rating system i have ever seen ine pano mumbwenbe" />
                <Review key={Math.random() * 67} value={3} review="This is the worst rating system i have ever seen ine pano mumbwenbe" />
                <Review key={Math.random() * 88} value={1} review="This is the worst rating system i have ever seen ine pano mumbwenbe" />

            </div>
        </div>
    )
}
