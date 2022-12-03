import React from 'react'
import { HiMail, HiPhone } from 'react-icons/hi'
import Link from './Link'

export default function Footer() {
    return (
        <div className='w-full footer flex items-center justify-start flex-col'>
            <div className='footer-content-wrapper w-4/5 grid grid-cols-3 mt-20 pb-5'>
                <div className='w-full flex flex-col text-white'>
                    <h4>Quick Links</h4>
                    <Link url="#" title="Homepage" />
                    <Link url="#" title="Most Rated Restaurants" />
                    <Link url="#" title="About Us" />
                    <Link url="#" title="About Us" />
                </div>
                <div className='w-full flex flex-col text-white'>
                    <h4>Contact</h4>
                    <p className='flex items-center justify-start'> <HiPhone /> +260776866555</p>
                    <p className='flex items-center justify-start'> <HiPhone /> +260968877665</p>
                    <p className='flex items-center justify-start'> <HiMail /> mailhere@example.com</p>
                </div>
                <div className='w-full flex flex-col text-white'>
                    <h4>More</h4>
                    <Link url="#" title="Privancy Policy" />
                    <Link url="#" title="Terms & Condition" />
                    <Link url="#" title="Rating Policy" />
                    <Link url="#" title="Download the app" />
                </div>
            </div>
        </div>
    )
}
