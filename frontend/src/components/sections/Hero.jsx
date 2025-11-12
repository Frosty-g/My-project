import Stats from "../sections/Stat";
const Hero = ({ onGetStarted }) => {
        return (
            <section className="relative min-h-120 w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-6 py-20" 
            style= {{ backgroundImage: "url('/src/assets/hero-bg.jpg')" }}>
                <div className='text-white text-center max-w-xl z-10'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-4 leading-tight'>Explore The World With Ease</h1>
                    <p className='text-base md:text-lg mb-6 leading-relaxed'>Discover breathtaking destinations and unforgettable experiences tailored just for you.</p>

                    <button onClick={onGetStarted}
                    className="bg-orange-500 text-white py-3 px-6 md:px-8 rounded-md font-medium hover:scale-105 transition-all duration-300">
                        Get Started
                    </button>
                </div>
                <Stats />
            </section>
        );
    }

    export default Hero;