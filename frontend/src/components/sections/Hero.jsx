import React from 'react';

    const Hero = () => {
        return (
            <section className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-20" 
            style= {{ backgroundImage: "url('/src/assets/hero-bg.jpg')" }}>
                <div className='text-white text-center max-w-xl'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-4 leading-tight'>Explore The World With Ease</h1>
                    <p className='text-base md:text-lg mb-6 leading-relaxed'>Discover breathtaking destinations and unforgettable experiences tailored just for you.</p>

                    <button className='bg-orange-500 text-white py-3 px-6 md:px-8 rounded-md font-medium hover:scale-105 transition-all duration-300'>
                        Get Started
                    </button>
                </div>
            </section>
        );
    }

    export default Hero;