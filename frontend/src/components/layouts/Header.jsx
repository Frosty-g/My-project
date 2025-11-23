const Header = () => {
    return (
        <header className='fixed top-0 w-full z-50 backdrop-blur-lg bg-white/20 border-b border-white/20'>
            <div className='max-w-6xl mx-auto flex items-center justify-between p-4'>
            <h1 className='text-4xl font-bold text-orange-500'>aiMee</h1>
            <label htmlFor='menu-toggle' className='md:hidden cursor-pointer'>
                <svg className='w-7 h-7 text-white' fill="none" stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16M4 12h14M4 18h16' />
                </svg>
            </label>

            <input type='checkbox' id='menu-toggle' className='peer hidden' />
            <nav className='absolute left-0 w-full p-4 
            bg-white/20 backdrop-blur-lg transition-all
            top-[-400px] opacity-0
            peer-checked:top-16 peer-checked:opacity-100

            md:static md:w-auto md:p-0 md:bg-transparent md:backdrop-blur-none
            md:opacity-100 md:top-0 md:flex md:gap-6'>
                <ul className='flex flex-col md:flex-row gap-4 text-white text-lg'>
                    <li><a href='#home' className='hover:text-orange-500 transition'>Home</a></li>
                    <li><a href='#destination' className='hover:text-orange-500 transition'>Destination</a></li>
                    <li><a href='#about' className='hover:text-orange-500 transition'>About</a></li>
                    <li><a href='#contact' className='hover:text-orange-500 transition'>Contact</a></li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default Header;