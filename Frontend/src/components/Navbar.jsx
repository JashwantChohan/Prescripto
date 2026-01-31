import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Navbar() {
    const navigate = useNavigate()
    const { token, setToken } = useContext(AppContext)

    const [showMenu, setShowMenu] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)

    const logOut = () => {
        setToken(false)
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <img onClick={() => { navigate('/') }} className='w-44 cursor-pointer' src={assets.logo} alt="logo" />

            {/* ---------- Desktop Menu ---------- */}
            <ul className='hidden md:flex items-start gap-5 font-medium no-underline'>
                <NavLink to='/'><li className='py-1'>HOME</li></NavLink>
                <NavLink to='/doctors'><li className='py-1'>ALL DOCTORS</li></NavLink>
                <NavLink to='/about'><li className='py-1'>ABOUT</li></NavLink>
                <NavLink to='/contact'><li className='py-1'>CONTACT</li></NavLink>
            </ul>

            <div className='flex items-center gap-4'>
                {
                    token ? (
                        <div className='flex items-center relative'>
                            <img
                                onClick={() => setShowDropdown(!showDropdown)}
                                className='w-8 mx-1 rounded-full cursor-pointer'
                                src={assets.profile_pic}
                                alt="profile"
                            />
                            <img
                                onClick={() => setShowDropdown(!showDropdown)}
                                className='w-2.5 cursor-pointer'
                                src={assets.dropdown_icon}
                                alt="dropdown"
                            />

                            {/* Dropdown menu */}
                            {showDropdown && (
                                <div className='w-48 absolute top-10 right-0 bg-stone-100 rounded shadow-lg p-4 flex flex-col gap-2 text-gray-600 text-base font-medium z-20'>
                                    <p onClick={() => { navigate('/my-profile'); setShowDropdown(false); }} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={() => { navigate('/my-appointment'); setShowDropdown(false); }} className='hover:text-black cursor-pointer'>My Appointments</p>
                                    <p onClick={() => { logOut(); setShowDropdown(false); }} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button
                            onClick={() => navigate('/login')}
                            className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'
                        >
                            Create Account
                        </button>
                    )
                }

                {/* ---------- Mobile Menu Icon ---------- */}
                <img
                    onClick={() => setShowMenu(true)}
                    className='w-6 md:hidden cursor-pointer'
                    src={assets.menu_icon}
                    alt="menu"
                />

                {/* ---------- Mobile Menu ---------- */}
                <div
                    className={`fixed top-0 right-0 bottom-0 bg-white z-20 transition-all duration-300 ease-in-out
          ${showMenu ? 'w-full opacity-100 visible' : 'w-0 opacity-0 invisible'} md:hidden overflow-hidden`}
                >
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-36' src={assets.logo} alt="logo" />
                        <img className='w-7 cursor-pointer' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="close" />
                    </div>

                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={() => setShowMenu(false)} to='/'> <p className='px-4 py-2 rounded inline-block'>HOME</p> </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/doctors'> <p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p> </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/about'> <p className='px-4 py-2 rounded inline-block'>ABOUT</p> </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/contact'> <p className='px-4 py-2 rounded inline-block'>CONTACT</p> </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
