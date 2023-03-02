import React, { Component } from 'react';   
import {IoHomeOutline} from 'react-icons/io5';
import Link from 'next/link';

export default function Navbar () {
    return(
        <div className="fixed flex flex-wrap container mx-auto max-w-full items-center py-4 px-5 justify-between bg-[#E9DEA6] z-50">
            <img src={'assets/logo-perak.svg'} alt="Logo Perak" className='w-30'/>
            <Link href={'/'}>
            <div className='bg-[#EABB76] text-[#383D75] flex space-x-2 px-4 py-3 rounded-md shadow-sm hover:scale-105 cursor-pointer'>
                <IoHomeOutline size={20}/>
                <h2 className='font-poppinsReg'>Home</h2>
            </div>
            </Link>
        </div>
    )
}