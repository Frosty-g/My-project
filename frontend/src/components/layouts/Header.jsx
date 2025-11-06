import React from 'react';


const Header = () => {
    return (
        <header className='absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 x-50'>
            <h1 className='text-4xl font-bold text-white'>aiMee</h1>

            <nav>
                <ul className='flex gap-8 text-white'>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#destination'>Destination</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;