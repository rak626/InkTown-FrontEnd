import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/image/InkTownLogo.png'

function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <header>
            <nav className='flex justify-between items-center px-10 py-2 bg-gray-200'>
                <Link to='/home' className='logo'>
                    <img
                        src={Logo}
                        alt='InkTown'
                        className='w-20 h-20 rounded-full object-cover'
                    />
                </Link>
                <ul className='flex space-x-4'>
                    <li>
                        <NavLink
                            to='/home'
                            className={({isActive}) =>` hover:bg-gray-300 ${isActive ? `text-orange-700`: `text-gray-700`} px-2 py-1 rounded`}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/orders'
                            className={({isActive}) =>` hover:bg-gray-300 ${isActive ? `text-orange-700`: `text-gray-700`} px-2 py-1 rounded`}>
                            Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/customers'
                            className={({isActive}) =>` hover:bg-gray-300 ${isActive ? `text-orange-700`: `text-gray-700`} px-2 py-1 rounded`}>
                            Customers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/products'
                            className={({isActive}) =>` hover:bg-gray-300 ${isActive ? `text-orange-700`: `text-gray-700`} px-2 py-1 rounded`}>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/reports'
                            className={({isActive}) =>` hover:bg-gray-300 ${isActive ? `text-orange-700`: `text-gray-700`} px-2 py-1 rounded`}>
                            Reports
                        </NavLink>
                    </li>
                </ul>
                <div className='flex items-center'>
                    <div className='relative inline-block'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-gray-700 hover:bg-gray-300 px-2 py-1 rounded flex items-center focus:outline-none'>
                            <i className='fas fa-user mr-1'></i> Rakesh Ghosh
                        </button>
                        {isOpen && (
                            <ul
                                className='dropdown-menu absolute bg-white shadow list-none py-2'
                                onMouseLeave={() => setIsOpen(false)}>
                                <li>
                                    <Link
                                        to='/profile'
                                        className='text-gray-700 hover:bg-gray-300 px-2 py-1 rounded block'>
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/logout'
                                        className='text-gray-700 hover:bg-gray-300 px-2 py-1 rounded block'>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
