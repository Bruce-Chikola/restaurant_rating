import React from 'react'
import Button from '../common/Button'

export default function LandingContent() {
    return (
        <div className='landing-content-wrapper w-full flex items-center justify-center'>
            <div className='w-4/5 grid grid-cols-2 gap-2'>
                <div className='w-full h-full flex flex-col items-start justify-center'>
                    <h1 className='rate-title'>Rate Your Favorite Restaurant According To Their Standards. </h1>
                    <Button title='Get Started' className='border-0' />
                </div>
                <div className='w-full h-full flex items-start justify-center'>
                    <div className='landing-image-wrapper flex justify-center align-center'>
                        <img className="landing-img" style={{}} src="img/food.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}
