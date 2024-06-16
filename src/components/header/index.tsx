import Link from 'next/link'
import React from 'react'
import { FiUser, FiLogOut } from 'react-icons/fi'



function Header() {
    return (
        <header className="w-full flex items-center px-2 py-4 bg-white h-20 max-w-6xl mx-auto shadow-sm">

            <div className='w-full flex items-center justify-between'>
                <Link href="/">
                    <h1 className='font-bold text-2x1 pl-1 hover:tracking-widest duration-300'>
                        <span className='text-green-600'>MY</span> TICKETS
                    </h1>
                </Link>

                <div className='flex items-baseline gap-4'>
                    <Link href="/dashboard">
                        <FiUser size={26} color='#4b5563' />
                    </Link>

                    <button>
                        <FiLogOut size={26} color='#4b5563' />
                   </button>

                </div>
            </div>

        </header>
    )
}

export default Header