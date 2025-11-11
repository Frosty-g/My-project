const Header = () => {
    return (
        <header className='fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-50 bg-transparent'>
            <h1 className='text-4xl font-bold text-white'>aiMee</h1>

            <nav>
                <ul className='flex gap-8 text-white'>
                    <li className='hover:text-orange-500'><a href='#home'>Home</a></li>
                    <li className='hover:text-orange-500'><a href='#destination'>Destination</a></li>
                    <li className='hover:text-orange-500'><a href='#about'>About</a></li>
                    <li className='hover:text-orange-500'><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;