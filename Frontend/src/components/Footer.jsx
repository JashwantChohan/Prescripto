import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

function Footer() {
    return (
        <div>
            <div className="md:mx-10">
                <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 taxt-sm">
                    {/* left section */}
                    <div>
                        <img className='mb-5 w-40' src={assets.logo} alt="" />
                        <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                    {/* center section */}
                    <div className="">
                        <p className='text-xl font-medium mb-5'>COMPANY</p>
                        <ul className='flex flex-col gap-2 text-gray-600'>
                            <li>HOME</li>
                            <li>ABOUT US </li>
                            <li>CONTACT US</li>
                            <li>PRIVACY POLICY</li>
                        </ul>
                    </div>

                    {/* right section */}
                    <div className="">
                        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                        <ul className='flex flex-col gap-2 text-gray-600'>
                            <li>+92-324-2256029</li>
                            <li>jchohan@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="">
                {/* --------- copyright text --------- */}
                <hr className='text-gray-400' />
                <p className='py-5 text-sm text-center'>Copyright © 2026 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
