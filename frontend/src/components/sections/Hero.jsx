import React from 'react';

    const Hero = () => {
        return (
            <section className='h-screen w-full bg-cover bg-center bg-no-repeat flex items-center px-10 pt-32' 
            style={{ backgroundImage: "url('/src/assets/hero-bg.jpg')" }}>
                <div className='text-white text-center ml-auto mr-auto max-w-2xl'>
                    <h1 className='text-5xl font-bold mb-4 text-center whitespace-nowrap'>Explore The World With Ease</h1>
                    <p className='text-lg mb-6 leading-relaxed'>Discover breathtaking destinations and unforgettable experiences tailored just for you.</p>

                    <button className='bg-black text-white py-3 px-8 rounded-md font-medium hover:scale-105 transition-all duration-300'>
                        Get Started
                    </button>
                </div>
            </section>
        );
    }

    export default Hero;