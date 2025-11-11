import React from 'react';

    const Footer = () => {
        return (
            <footer className='w-full bg-black text-white py-10 px-10'>
                <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8'>
                    <div>
                        <h2 className='text-2xl font-semibold text-orange-500 mb-4'>aiMee</h2>
                        <p className='text-sm leading-relaxed'>
                            Explore beautiful destinations and make unforgettable memories.
                        </p>
                    </div>

                    <div>
                        <h3 className='text-orange-500 font-semibold mb-3'>Quick Links</h3>
                        <ul className='space-y-2 text-sm'>
                            <li>Home</li>
                            <li>Destination</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-orange-500 font-semibold mb-3'>Contact us</h3>
                        <p className='text-sm'>Email info@aimee.co.ke</p>
                        <p className='text-sm'>Phone: +254 726701060</p>
                        <p className='text-sm mt-2'>Nairobi, Kenya</p>
                    </div>
                </div>

                <div className='border-t border-orange-500 mt-10 pt-4 text-center text-sm text-gray-400'>
                    &copy;  {new Date().getFullYear()} aiMee. All rights reserved.
                </div>
            </footer>
        );
    }

    export default Footer;