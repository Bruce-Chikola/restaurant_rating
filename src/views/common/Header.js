import React from 'react'
import Logo from './Logo'
import '../../css/header.css'
import Input from './Input'
import { HiSearch } from "react-icons/hi";
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div className='header w-full flex items-center justify-center absolute top-0'>
            <div className='head-content-wrapper w-4/5 flex items-center justify-between'>
                <Link to="/" style={{ textDecoration: 'none' }} className='flex justify-center items-center'>
                    <Logo />
                    <h3 className='header-title ml-5'>Restaurant Rating</h3>
                </Link >
                <div className='search-wrapper flex items-center justify-center'>
                    <HiSearch size={30} color="gray" />
                    <div className='' style={{ width: 200 }}>
                        <Input placeholder="Search Restaurant" />
                    </div>
                </div>
            </div>
        </div>
    )
}
