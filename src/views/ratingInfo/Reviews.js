import React from 'react'
import Review from './Review'

export default function Reviews({ reviews }) {
    return (
        <div>
            <div className='reviews w-full flex flex-col mt-10'>
                <h3>Reviews</h3>
                {
                    reviews.length > 0 && reviews.map(review => <Review key={Math.random() * 134} value={review.attributes.rating} review={review.attributes.description} />)
                }
                {
                    reviews.length == 0 && <h1>No Reviews Available!</h1>
                }

            </div>
        </div>
    )
}
